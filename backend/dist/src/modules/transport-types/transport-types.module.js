var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TransportTypesController } from './transport-types.controller.js';
import { TransportTypesRepository } from './transport-types.repository.js';
import { TransportTypesService } from './transport-types.service.js';
let TransportTypesModule = class TransportTypesModule {
};
TransportTypesModule = __decorate([
    Module({
        controllers: [TransportTypesController],
        providers: [TransportTypesService, TransportTypesRepository],
        exports: [TransportTypesService],
    })
], TransportTypesModule);
export { TransportTypesModule };
//# sourceMappingURL=transport-types.module.js.map