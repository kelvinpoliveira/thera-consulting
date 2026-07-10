import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { OrderStatus } from '../../../../generated/prisma/enums.js';

export class FilterSalesOrdersDto {
  @ApiPropertyOptional({ enum: OrderStatus })
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;

  @ApiPropertyOptional()
  @IsUUID()
  @IsOptional()
  customerId?: string;

  @ApiPropertyOptional()
  @IsUUID()
  @IsOptional()
  transportTypeId?: string;

  @ApiPropertyOptional({ example: '2026-07-08' })
  @IsDateString()
  @IsOptional()
  date?: string;
}
