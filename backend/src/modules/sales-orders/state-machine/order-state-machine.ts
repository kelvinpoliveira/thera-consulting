import { BadRequestException } from '@nestjs/common';
import { OrderStatus } from '../../../../generated/prisma/enums.js';

// Mapa imutável de transições válidas.
// Adicionar um novo estado = adicionar uma entrada aqui, sem tocar em nenhuma outra lógica.
const VALID_TRANSITIONS: Record<OrderStatus, OrderStatus | null> = {
  [OrderStatus.CRIADA]: OrderStatus.PLANEJADA,
  [OrderStatus.PLANEJADA]: OrderStatus.AGENDADA,
  [OrderStatus.AGENDADA]: OrderStatus.EM_TRANSPORTE,
  [OrderStatus.EM_TRANSPORTE]: OrderStatus.ENTREGUE,
  [OrderStatus.ENTREGUE]: null,
};

export function assertValidTransition(current: OrderStatus, next: OrderStatus): void {
  const allowed = VALID_TRANSITIONS[current];
  if (allowed !== next) {
    throw new BadRequestException(
      `Transição inválida: ${current} → ${next}. Transição permitida: ${current} → ${allowed ?? 'nenhuma (status final)'}`,
    );
  }
}
