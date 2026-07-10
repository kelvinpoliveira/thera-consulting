import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuditRepository } from './audit.repository.js';

@ApiTags('Audit')
@Controller('audit-logs')
export class AuditController {
  constructor(private readonly repository: AuditRepository) {}

  @Get('sales-orders/:salesOrderId')
  @ApiOperation({ summary: 'Buscar logs de auditoria de uma Ordem de Venda' })
  findBySalesOrder(@Param('salesOrderId') salesOrderId: string) {
    return this.repository.findBySalesOrder(salesOrderId);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar logs por tipo e ID da entidade' })
  @ApiQuery({ name: 'entityType', required: true, example: 'SalesOrder' })
  @ApiQuery({ name: 'entityId', required: true })
  findByEntity(
    @Query('entityType') entityType: string,
    @Query('entityId') entityId: string,
  ) {
    return this.repository.findByEntity(entityType, entityId);
  }
}
