import { BadRequestException } from '@nestjs/common';
import { OrderStatus } from '../../../../generated/prisma/enums.js';
import { assertValidTransition } from './order-state-machine.js';

describe('OrderStateMachine', () => {
  describe('transições válidas', () => {
    it('deve permitir CRIADA → PLANEJADA', () => {
      expect(() =>
        assertValidTransition(OrderStatus.CRIADA, OrderStatus.PLANEJADA),
      ).not.toThrow();
    });

    it('deve permitir PLANEJADA → AGENDADA', () => {
      expect(() =>
        assertValidTransition(OrderStatus.PLANEJADA, OrderStatus.AGENDADA),
      ).not.toThrow();
    });

    it('deve permitir AGENDADA → EM_TRANSPORTE', () => {
      expect(() =>
        assertValidTransition(OrderStatus.AGENDADA, OrderStatus.EM_TRANSPORTE),
      ).not.toThrow();
    });

    it('deve permitir EM_TRANSPORTE → ENTREGUE', () => {
      expect(() =>
        assertValidTransition(OrderStatus.EM_TRANSPORTE, OrderStatus.ENTREGUE),
      ).not.toThrow();
    });
  });

  describe('transições inválidas', () => {
    it('deve rejeitar CRIADA → AGENDADA (pulo de status)', () => {
      expect(() =>
        assertValidTransition(OrderStatus.CRIADA, OrderStatus.AGENDADA),
      ).toThrow(BadRequestException);
    });

    it('deve rejeitar ENTREGUE → qualquer status (status final)', () => {
      expect(() =>
        assertValidTransition(OrderStatus.ENTREGUE, OrderStatus.CRIADA),
      ).toThrow(BadRequestException);
    });

    it('deve rejeitar regressão de status (AGENDADA → PLANEJADA)', () => {
      expect(() =>
        assertValidTransition(OrderStatus.AGENDADA, OrderStatus.PLANEJADA),
      ).toThrow(BadRequestException);
    });

    it('deve rejeitar PLANEJADA → EM_TRANSPORTE (pulo de dois)', () => {
      expect(() =>
        assertValidTransition(OrderStatus.PLANEJADA, OrderStatus.EM_TRANSPORTE),
      ).toThrow(BadRequestException);
    });
  });
});
