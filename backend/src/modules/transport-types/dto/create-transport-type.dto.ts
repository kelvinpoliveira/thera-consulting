import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTransportTypeDto {
  @ApiProperty({ example: 'Caminhão' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'Veículo de carga leve' })
  @IsString()
  @IsOptional()
  description?: string;
}
