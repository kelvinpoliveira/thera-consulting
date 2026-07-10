import { Module } from '@nestjs/common';
import { AuditController } from './audit.controller.js';
import { AuditListener } from './audit.listener.js';
import { AuditRepository } from './audit.repository.js';

@Module({
  controllers: [AuditController],
  providers: [AuditRepository, AuditListener],
})
export class AuditModule {}
