import { Module } from '@nestjs/common';
import { TransportTypesController } from './transport-types.controller.js';
import { TransportTypesRepository } from './transport-types.repository.js';
import { TransportTypesService } from './transport-types.service.js';

@Module({
  controllers: [TransportTypesController],
  providers: [TransportTypesService, TransportTypesRepository],
  exports: [TransportTypesService],
})
export class TransportTypesModule {}
