import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Empresa XPTO Ltda' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '12.345.678/0001-90', description: 'CPF ou CNPJ' })
  @IsString()
  @IsNotEmpty()
  document: string;

  @ApiPropertyOptional({ example: 'contato@xpto.com.br' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: '(11) 99999-0000' })
  @IsString()
  @IsOptional()
  phone?: string;
}
