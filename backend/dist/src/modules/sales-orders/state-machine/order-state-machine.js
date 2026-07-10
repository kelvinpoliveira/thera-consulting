import { BadRequestException } from '@nestjs/common';
import { OrderStatus } from '../../../../generated/prisma/enums.js';
const VALID_TRANSITIONS = {
    [OrderStatus.CRIADA]: OrderStatus.PLANEJADA,
    [OrderStatus.PLANEJADA]: OrderStatus.AGENDADA,
    [OrderStatus.AGENDADA]: OrderStatus.EM_TRANSPORTE,
    [OrderStatus.EM_TRANSPORTE]: OrderStatus.ENTREGUE,
    [OrderStatus.ENTREGUE]: null,
};
export function assertValidTransition(current, next) {
    const allowed = VALID_TRANSITIONS[current];
    if (allowed !== next) {
        throw new BadRequestException(`Transição inválida: ${current} → ${next}. Transição permitida: ${current} → ${allowed ?? 'nenhuma (status final)'}`);
    }
}
//# sourceMappingURL=order-state-machine.js.map