var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';
export class CreateScheduleDto {
    deliveryDate;
    windowStart;
    windowEnd;
}
__decorate([
    ApiProperty({ example: '2026-07-15T00:00:00.000Z' }),
    Type(() => Date),
    IsDate(),
    IsNotEmpty(),
    __metadata("design:type", Date)
], CreateScheduleDto.prototype, "deliveryDate", void 0);
__decorate([
    ApiProperty({ example: '2026-07-15T08:00:00.000Z', description: 'Início da janela de atendimento' }),
    Type(() => Date),
    IsDate(),
    IsNotEmpty(),
    __metadata("design:type", Date)
], CreateScheduleDto.prototype, "windowStart", void 0);
__decorate([
    ApiProperty({ example: '2026-07-15T12:00:00.000Z', description: 'Fim da janela de atendimento' }),
    Type(() => Date),
    IsDate(),
    IsNotEmpty(),
    __metadata("design:type", Date)
], CreateScheduleDto.prototype, "windowEnd", void 0);
//# sourceMappingURL=create-schedule.dto.js.map