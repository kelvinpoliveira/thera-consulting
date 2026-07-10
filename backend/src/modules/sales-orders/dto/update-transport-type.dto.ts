import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateTransportTypeDto {
  @ApiProperty({ example: 'uuid-do-tipo-de-transporte' })
  @IsUUID()
  @IsNotEmpty()
  transportTypeId: string;
}
