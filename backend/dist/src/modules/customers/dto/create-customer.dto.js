var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateCustomerDto {
    name;
    document;
    email;
    phone;
}
__decorate([
    ApiProperty({ example: 'Empresa XPTO Ltda' }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "name", void 0);
__decorate([
    ApiProperty({ example: '12.345.678/0001-90', description: 'CPF ou CNPJ' }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "document", void 0);
__decorate([
    ApiPropertyOptional({ example: 'contato@xpto.com.br' }),
    IsEmail(),
    IsOptional(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "email", void 0);
__decorate([
    ApiPropertyOptional({ example: '(11) 99999-0000' }),
    IsString(),
    IsOptional(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "phone", void 0);
//# sourceMappingURL=create-customer.dto.js.map