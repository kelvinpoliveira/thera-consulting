import { Module } from '@nestjs/common';
import { TransportTypesModule } from '../transport-types/transport-types.module.js';
import { CustomersController } from './customers.controller.js';
import { CustomersRepository } from './customers.repository.js';
import { CustomersService } from './customers.service.js';

@Module({
  imports: [TransportTypesModule],
  controllers: [CustomersController],
  providers: [CustomersService, CustomersRepository],
  exports: [CustomersService, CustomersRepository],
})
export class CustomersModule {}
