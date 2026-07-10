export declare class OrderItemDto {
    itemId: string;
    quantity: number;
}
export declare class CreateSalesOrderDto {
    customerId: string;
    transportTypeId: string;
    items: OrderItemDto[];
}
