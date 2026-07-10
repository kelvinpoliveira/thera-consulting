import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsUUID, Min, ValidateNested } from 'class-validator';

export class OrderItemDto {
  @ApiProperty({ example: 'uuid-do-item' })
  @IsUUID()
  itemId: string;

  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateSalesOrderDto {
  @ApiProperty({ example: 'uuid-do-cliente' })
  @IsUUID()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty({ example: 'uuid-do-tipo-de-transporte' })
  @IsUUID()
  @IsNotEmpty()
  transportTypeId: string;

  @ApiProperty({ type: [OrderItemDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
