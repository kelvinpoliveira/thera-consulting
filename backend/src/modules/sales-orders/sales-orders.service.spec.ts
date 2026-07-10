import { jest } from '@jest/globals';
import { BadRequestException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomersRepository } from '../customers/customers.repository.js';
import { ItemsRepository } from '../items/items.repository.js';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto.js';
import { SalesOrdersRepository } from './sales-orders.repository.js';
import { SalesOrdersService } from './sales-orders.service.js';

const mockCustomersRepository = {
  hasTransportType: jest.fn(),
};

const mockItemsRepository = {
  findManyByIds: jest.fn(),
};

const mockSalesOrdersRepository = {
  create: jest.fn(),
  findById: jest.fn(),
  updateStatus: jest.fn(),
};

const mockEventEmitter = {
  emit: jest.fn(),
};

describe('SalesOrdersService', () => {
  let service: SalesOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesOrdersService,
        { provide: CustomersRepository, useValue: mockCustomersRepository },
        { provide: ItemsRepository, useValue: mockItemsRepository },
        { provide: SalesOrdersRepository, useValue: mockSalesOrdersRepository },
        { provide: EventEmitter2, useValue: mockEventEmitter },
      ],
    }).compile();

    service = module.get<SalesOrdersService>(SalesOrdersService);
    jest.clearAllMocks();
  });

  const dto: CreateSalesOrderDto = {
    customerId: 'customer-uuid',
    transportTypeId: 'transport-uuid',
    items: [{ itemId: 'item-uuid', quantity: 2 }],
  };

  describe('create', () => {
    it('deve lançar BadRequestException quando transporte não é autorizado para o cliente', async () => {
      mockCustomersRepository.hasTransportType.mockResolvedValue(null);

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
      expect(mockCustomersRepository.hasTransportType).toHaveBeenCalledWith(
        dto.customerId,
        dto.transportTypeId,
      );
    });

    it('deve lançar BadRequestException quando um item não existe', async () => {
      mockCustomersRepository.hasTransportType.mockResolvedValue({ customerId: 'customer-uuid' });
      mockItemsRepository.findManyByIds.mockResolvedValue([]); // nenhum item encontrado

      await expect(service.create(dto)).rejects.toThrow(BadRequestException);
    });

    it('deve criar a OV e emitir evento quando dados são válidos', async () => {
      const createdOrder = { id: 'order-uuid', status: 'CRIADA', ...dto };
      mockCustomersRepository.hasTransportType.mockResolvedValue({ customerId: 'customer-uuid' });
      mockItemsRepository.findManyByIds.mockResolvedValue([{ id: 'item-uuid' }]);
      mockSalesOrdersRepository.create.mockResolvedValue(createdOrder);

      const result = await service.create(dto);

      expect(result).toEqual(createdOrder);
      expect(mockEventEmitter.emit).toHaveBeenCalledWith('order.created', expect.objectContaining({
        orderId: 'order-uuid',
      }));
    });
  });
});
