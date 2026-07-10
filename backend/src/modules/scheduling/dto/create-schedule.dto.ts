import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateScheduleDto {
  @ApiProperty({ example: '2026-07-15T00:00:00.000Z' })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  deliveryDate: Date;

  @ApiProperty({ example: '2026-07-15T08:00:00.000Z', description: 'Início da janela de atendimento' })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  windowStart: Date;

  @ApiProperty({ example: '2026-07-15T12:00:00.000Z', description: 'Fim da janela de atendimento' })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  windowEnd: Date;
}
