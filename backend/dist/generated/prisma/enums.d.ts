export declare const OrderStatus: {
    readonly CRIADA: "CRIADA";
    readonly PLANEJADA: "PLANEJADA";
    readonly AGENDADA: "AGENDADA";
    readonly EM_TRANSPORTE: "EM_TRANSPORTE";
    readonly ENTREGUE: "ENTREGUE";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
