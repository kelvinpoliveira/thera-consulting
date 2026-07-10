import 'dotenv/config';
import { jest } from '@jest/globals';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../../app.modules.js';
import { PrismaService } from '../../prisma/prisma.service.js';

jest.setTimeout(30000);

describe('SalesOrders (Integration)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  let transportTypeId: string;
  let customerId: string;
  let itemId: string;
  let salesOrderId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
    );

    await app.init();
    prisma = moduleFixture.get<PrismaService>(PrismaService);
  });

  afterAll(async () => {
    if (salesOrderId) {
      await prisma.salesOrder.delete({ where: { id: salesOrderId } }).catch(() => null);
    }
    if (customerId && transportTypeId) {
      await prisma.customerTransportType
        .delete({ where: { customerId_transportTypeId: { customerId, transportTypeId } } })
        .catch(() => null);
    }
    if (customerId) {
      await prisma.customer.delete({ where: { id: customerId } }).catch(() => null);
    }
    if (itemId) {
      await prisma.item.delete({ where: { id: itemId } }).catch(() => null);
    }
    if (transportTypeId) {
      await prisma.transportType.delete({ where: { id: transportTypeId } }).catch(() => null);
    }

    await app.close();
  });

  it('deve preparar dados: TransportType, Customer, Item e autorização', async () => {
    const ttRes = await request(app.getHttpServer())
      .post('/api/transport-types')
      .send({ name: '[TEST] Caminhão Integration', description: 'Teste integração' })
      .expect(201);
    transportTypeId = ttRes.body.id;

    const custRes = await request(app.getHttpServer())
      .post('/api/customers')
      .send({ name: '[TEST] Cliente Integration', document: '99.999.999/0001-01' })
      .expect(201);
    customerId = custRes.body.id;

    const itemRes = await request(app.getHttpServer())
      .post('/api/items')
      .send({ sku: 'SKU-INT-001', name: '[TEST] Item Integration', unitPrice: 10.5 })
      .expect(201);
    itemId = itemRes.body.id;

    await request(app.getHttpServer())
      .post(`/api/customers/${customerId}/transport-types`)
      .send({ transportTypeId })
      .expect(201);
  });

  it('POST /api/sales-orders — deve criar OV com status CRIADA', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/sales-orders')
      .send({ customerId, transportTypeId, items: [{ itemId, quantity: 3 }] })
      .expect(201);

    salesOrderId = res.body.id;

    expect(res.body).toMatchObject({
      id: expect.any(String),
      status: 'CRIADA',
      customerId,
      transportTypeId,
    });
    expect(res.body.items).toHaveLength(1);
    expect(res.body.items[0].quantity).toBe(3);
  });

  it('POST /api/sales-orders — deve rejeitar transporte não autorizado (400)', async () => {
    const ttRes2 = await request(app.getHttpServer())
      .post('/api/transport-types')
      .send({ name: '[TEST] Carreta NAO_AUTH' })
      .expect(201);

    await request(app.getHttpServer())
      .post('/api/sales-orders')
      .send({ customerId, transportTypeId: ttRes2.body.id, items: [{ itemId, quantity: 1 }] })
      .expect(400);

    await prisma.transportType.delete({ where: { id: ttRes2.body.id } });
  });

  it('PATCH /api/sales-orders/:id/status — deve avançar CRIADA → PLANEJADA', async () => {
    const res = await request(app.getHttpServer())
      .patch(`/api/sales-orders/${salesOrderId}/status`)
      .send({ status: 'PLANEJADA' })
      .expect(200);

    expect(res.body.status).toBe('PLANEJADA');
  });

  it('PATCH /api/sales-orders/:id/status — deve rejeitar PLANEJADA → ENTREGUE (400)', async () => {
    await request(app.getHttpServer())
      .patch(`/api/sales-orders/${salesOrderId}/status`)
      .send({ status: 'ENTREGUE' })
      .expect(400);
  });
});
