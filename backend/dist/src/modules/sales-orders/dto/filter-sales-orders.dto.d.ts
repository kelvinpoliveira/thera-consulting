import { OrderStatus } from '../../../../generated/prisma/enums.js';
export declare class FilterSalesOrdersDto {
    status?: OrderStatus;
    customerId?: string;
    transportTypeId?: string;
    date?: string;
}
