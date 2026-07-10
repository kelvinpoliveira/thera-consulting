import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class AssignTransportTypeDto {
  @ApiProperty({ example: 'uuid-do-tipo-de-transporte' })
  @IsUUID()
  @IsNotEmpty()
  transportTypeId: string;
}
