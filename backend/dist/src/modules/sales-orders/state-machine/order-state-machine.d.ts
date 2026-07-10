import { OrderStatus } from '../../../../generated/prisma/enums.js';
export declare function assertValidTransition(current: OrderStatus, next: OrderStatus): void;
