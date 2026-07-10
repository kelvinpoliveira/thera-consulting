import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { OrderStatus } from '../../../../generated/prisma/enums.js';

export class UpdateStatusDto {
  @ApiProperty({ enum: OrderStatus, example: OrderStatus.PLANEJADA })
  @IsEnum(OrderStatus)
  @IsNotEmpty()
  status: OrderStatus;
}
