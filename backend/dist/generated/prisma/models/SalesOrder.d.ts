import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SalesOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$SalesOrderPayload>;
export type AggregateSalesOrder = {
    _count: SalesOrderCountAggregateOutputType | null;
    _min: SalesOrderMinAggregateOutputType | null;
    _max: SalesOrderMaxAggregateOutputType | null;
};
export type SalesOrderMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    transportTypeId: string | null;
    status: $Enums.OrderStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SalesOrderMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    transportTypeId: string | null;
    status: $Enums.OrderStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SalesOrderCountAggregateOutputType = {
    id: number;
    customerId: number;
    transportTypeId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SalesOrderMinAggregateInputType = {
    id?: true;
    customerId?: true;
    transportTypeId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SalesOrderMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    transportTypeId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SalesOrderCountAggregateInputType = {
    id?: true;
    customerId?: true;
    transportTypeId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SalesOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderWhereInput;
    orderBy?: Prisma.SalesOrderOrderByWithRelationInput | Prisma.SalesOrderOrderByWithRelationInput[];
    cursor?: Prisma.SalesOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SalesOrderCountAggregateInputType;
    _min?: SalesOrderMinAggregateInputType;
    _max?: SalesOrderMaxAggregateInputType;
};
export type GetSalesOrderAggregateType<T extends SalesOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateSalesOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalesOrder[P]> : Prisma.GetScalarType<T[P], AggregateSalesOrder[P]>;
};
export type SalesOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderWhereInput;
    orderBy?: Prisma.SalesOrderOrderByWithAggregationInput | Prisma.SalesOrderOrderByWithAggregationInput[];
    by: Prisma.SalesOrderScalarFieldEnum[] | Prisma.SalesOrderScalarFieldEnum;
    having?: Prisma.SalesOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalesOrderCountAggregateInputType | true;
    _min?: SalesOrderMinAggregateInputType;
    _max?: SalesOrderMaxAggregateInputType;
};
export type SalesOrderGroupByOutputType = {
    id: string;
    customerId: string;
    transportTypeId: string;
    status: $Enums.OrderStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: SalesOrderCountAggregateOutputType | null;
    _min: SalesOrderMinAggregateOutputType | null;
    _max: SalesOrderMaxAggregateOutputType | null;
};
export type GetSalesOrderGroupByPayload<T extends SalesOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalesOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalesOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalesOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalesOrderGroupByOutputType[P]>;
}>>;
export type SalesOrderWhereInput = {
    AND?: Prisma.SalesOrderWhereInput | Prisma.SalesOrderWhereInput[];
    OR?: Prisma.SalesOrderWhereInput[];
    NOT?: Prisma.SalesOrderWhereInput | Prisma.SalesOrderWhereInput[];
    id?: Prisma.StringFilter<"SalesOrder"> | string;
    customerId?: Prisma.StringFilter<"SalesOrder"> | string;
    transportTypeId?: Prisma.StringFilter<"SalesOrder"> | string;
    status?: Prisma.EnumOrderStatusFilter<"SalesOrder"> | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    transportType?: Prisma.XOR<Prisma.TransportTypeScalarRelationFilter, Prisma.TransportTypeWhereInput>;
    items?: Prisma.SalesOrderItemListRelationFilter;
    schedule?: Prisma.XOR<Prisma.ScheduleNullableScalarRelationFilter, Prisma.ScheduleWhereInput> | null;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type SalesOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    transportType?: Prisma.TransportTypeOrderByWithRelationInput;
    items?: Prisma.SalesOrderItemOrderByRelationAggregateInput;
    schedule?: Prisma.ScheduleOrderByWithRelationInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type SalesOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SalesOrderWhereInput | Prisma.SalesOrderWhereInput[];
    OR?: Prisma.SalesOrderWhereInput[];
    NOT?: Prisma.SalesOrderWhereInput | Prisma.SalesOrderWhereInput[];
    customerId?: Prisma.StringFilter<"SalesOrder"> | string;
    transportTypeId?: Prisma.StringFilter<"SalesOrder"> | string;
    status?: Prisma.EnumOrderStatusFilter<"SalesOrder"> | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    transportType?: Prisma.XOR<Prisma.TransportTypeScalarRelationFilter, Prisma.TransportTypeWhereInput>;
    items?: Prisma.SalesOrderItemListRelationFilter;
    schedule?: Prisma.XOR<Prisma.ScheduleNullableScalarRelationFilter, Prisma.ScheduleWhereInput> | null;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id">;
export type SalesOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SalesOrderCountOrderByAggregateInput;
    _max?: Prisma.SalesOrderMaxOrderByAggregateInput;
    _min?: Prisma.SalesOrderMinOrderByAggregateInput;
};
export type SalesOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalesOrderScalarWhereWithAggregatesInput | Prisma.SalesOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalesOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalesOrderScalarWhereWithAggregatesInput | Prisma.SalesOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SalesOrder"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"SalesOrder"> | string;
    transportTypeId?: Prisma.StringWithAggregatesFilter<"SalesOrder"> | string;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"SalesOrder"> | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string;
};
export type SalesOrderCreateInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutSalesOrdersInput;
    transportType: Prisma.TransportTypeCreateNestedOneWithoutSalesOrdersInput;
    items?: Prisma.SalesOrderItemCreateNestedManyWithoutSalesOrderInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderUncheckedCreateInput = {
    id?: string;
    customerId: string;
    transportTypeId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput;
    transportType?: Prisma.TransportTypeUpdateOneRequiredWithoutSalesOrdersNestedInput;
    items?: Prisma.SalesOrderItemUpdateManyWithoutSalesOrderNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderCreateManyInput = {
    id?: string;
    customerId: string;
    transportTypeId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalesOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesOrderListRelationFilter = {
    every?: Prisma.SalesOrderWhereInput;
    some?: Prisma.SalesOrderWhereInput;
    none?: Prisma.SalesOrderWhereInput;
};
export type SalesOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SalesOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalesOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalesOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalesOrderScalarRelationFilter = {
    is?: Prisma.SalesOrderWhereInput;
    isNot?: Prisma.SalesOrderWhereInput;
};
export type SalesOrderNullableScalarRelationFilter = {
    is?: Prisma.SalesOrderWhereInput | null;
    isNot?: Prisma.SalesOrderWhereInput | null;
};
export type SalesOrderCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutCustomerInput, Prisma.SalesOrderUncheckedCreateWithoutCustomerInput> | Prisma.SalesOrderCreateWithoutCustomerInput[] | Prisma.SalesOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutCustomerInput | Prisma.SalesOrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.SalesOrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
};
export type SalesOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutCustomerInput, Prisma.SalesOrderUncheckedCreateWithoutCustomerInput> | Prisma.SalesOrderCreateWithoutCustomerInput[] | Prisma.SalesOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutCustomerInput | Prisma.SalesOrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.SalesOrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
};
export type SalesOrderUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutCustomerInput, Prisma.SalesOrderUncheckedCreateWithoutCustomerInput> | Prisma.SalesOrderCreateWithoutCustomerInput[] | Prisma.SalesOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutCustomerInput | Prisma.SalesOrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.SalesOrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.SalesOrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.SalesOrderCreateManyCustomerInputEnvelope;
    set?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    disconnect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    delete?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    connect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    update?: Prisma.SalesOrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.SalesOrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.SalesOrderUpdateManyWithWhereWithoutCustomerInput | Prisma.SalesOrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.SalesOrderScalarWhereInput | Prisma.SalesOrderScalarWhereInput[];
};
export type SalesOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutCustomerInput, Prisma.SalesOrderUncheckedCreateWithoutCustomerInput> | Prisma.SalesOrderCreateWithoutCustomerInput[] | Prisma.SalesOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutCustomerInput | Prisma.SalesOrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.SalesOrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.SalesOrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.SalesOrderCreateManyCustomerInputEnvelope;
    set?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    disconnect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    delete?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    connect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    update?: Prisma.SalesOrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.SalesOrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.SalesOrderUpdateManyWithWhereWithoutCustomerInput | Prisma.SalesOrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.SalesOrderScalarWhereInput | Prisma.SalesOrderScalarWhereInput[];
};
export type SalesOrderCreateNestedManyWithoutTransportTypeInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutTransportTypeInput, Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput> | Prisma.SalesOrderCreateWithoutTransportTypeInput[] | Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput[];
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutTransportTypeInput | Prisma.SalesOrderCreateOrConnectWithoutTransportTypeInput[];
    createMany?: Prisma.SalesOrderCreateManyTransportTypeInputEnvelope;
    connect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
};
export type SalesOrderUncheckedCreateNestedManyWithoutTransportTypeInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutTransportTypeInput, Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput> | Prisma.SalesOrderCreateWithoutTransportTypeInput[] | Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput[];
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutTransportTypeInput | Prisma.SalesOrderCreateOrConnectWithoutTransportTypeInput[];
    createMany?: Prisma.SalesOrderCreateManyTransportTypeInputEnvelope;
    connect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
};
export type SalesOrderUpdateManyWithoutTransportTypeNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutTransportTypeInput, Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput> | Prisma.SalesOrderCreateWithoutTransportTypeInput[] | Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput[];
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutTransportTypeInput | Prisma.SalesOrderCreateOrConnectWithoutTransportTypeInput[];
    upsert?: Prisma.SalesOrderUpsertWithWhereUniqueWithoutTransportTypeInput | Prisma.SalesOrderUpsertWithWhereUniqueWithoutTransportTypeInput[];
    createMany?: Prisma.SalesOrderCreateManyTransportTypeInputEnvelope;
    set?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    disconnect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    delete?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    connect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    update?: Prisma.SalesOrderUpdateWithWhereUniqueWithoutTransportTypeInput | Prisma.SalesOrderUpdateWithWhereUniqueWithoutTransportTypeInput[];
    updateMany?: Prisma.SalesOrderUpdateManyWithWhereWithoutTransportTypeInput | Prisma.SalesOrderUpdateManyWithWhereWithoutTransportTypeInput[];
    deleteMany?: Prisma.SalesOrderScalarWhereInput | Prisma.SalesOrderScalarWhereInput[];
};
export type SalesOrderUncheckedUpdateManyWithoutTransportTypeNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutTransportTypeInput, Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput> | Prisma.SalesOrderCreateWithoutTransportTypeInput[] | Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput[];
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutTransportTypeInput | Prisma.SalesOrderCreateOrConnectWithoutTransportTypeInput[];
    upsert?: Prisma.SalesOrderUpsertWithWhereUniqueWithoutTransportTypeInput | Prisma.SalesOrderUpsertWithWhereUniqueWithoutTransportTypeInput[];
    createMany?: Prisma.SalesOrderCreateManyTransportTypeInputEnvelope;
    set?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    disconnect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    delete?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    connect?: Prisma.SalesOrderWhereUniqueInput | Prisma.SalesOrderWhereUniqueInput[];
    update?: Prisma.SalesOrderUpdateWithWhereUniqueWithoutTransportTypeInput | Prisma.SalesOrderUpdateWithWhereUniqueWithoutTransportTypeInput[];
    updateMany?: Prisma.SalesOrderUpdateManyWithWhereWithoutTransportTypeInput | Prisma.SalesOrderUpdateManyWithWhereWithoutTransportTypeInput[];
    deleteMany?: Prisma.SalesOrderScalarWhereInput | Prisma.SalesOrderScalarWhereInput[];
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type SalesOrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutItemsInput, Prisma.SalesOrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.SalesOrderWhereUniqueInput;
};
export type SalesOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutItemsInput, Prisma.SalesOrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.SalesOrderUpsertWithoutItemsInput;
    connect?: Prisma.SalesOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalesOrderUpdateToOneWithWhereWithoutItemsInput, Prisma.SalesOrderUpdateWithoutItemsInput>, Prisma.SalesOrderUncheckedUpdateWithoutItemsInput>;
};
export type SalesOrderCreateNestedOneWithoutScheduleInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutScheduleInput, Prisma.SalesOrderUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutScheduleInput;
    connect?: Prisma.SalesOrderWhereUniqueInput;
};
export type SalesOrderUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutScheduleInput, Prisma.SalesOrderUncheckedCreateWithoutScheduleInput>;
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutScheduleInput;
    upsert?: Prisma.SalesOrderUpsertWithoutScheduleInput;
    connect?: Prisma.SalesOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalesOrderUpdateToOneWithWhereWithoutScheduleInput, Prisma.SalesOrderUpdateWithoutScheduleInput>, Prisma.SalesOrderUncheckedUpdateWithoutScheduleInput>;
};
export type SalesOrderCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutAuditLogsInput, Prisma.SalesOrderUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.SalesOrderWhereUniqueInput;
};
export type SalesOrderUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderCreateWithoutAuditLogsInput, Prisma.SalesOrderUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.SalesOrderCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.SalesOrderUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.SalesOrderWhereInput | boolean;
    delete?: Prisma.SalesOrderWhereInput | boolean;
    connect?: Prisma.SalesOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalesOrderUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.SalesOrderUpdateWithoutAuditLogsInput>, Prisma.SalesOrderUncheckedUpdateWithoutAuditLogsInput>;
};
export type SalesOrderCreateWithoutCustomerInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transportType: Prisma.TransportTypeCreateNestedOneWithoutSalesOrdersInput;
    items?: Prisma.SalesOrderItemCreateNestedManyWithoutSalesOrderInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderUncheckedCreateWithoutCustomerInput = {
    id?: string;
    transportTypeId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderCreateOrConnectWithoutCustomerInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutCustomerInput, Prisma.SalesOrderUncheckedCreateWithoutCustomerInput>;
};
export type SalesOrderCreateManyCustomerInputEnvelope = {
    data: Prisma.SalesOrderCreateManyCustomerInput | Prisma.SalesOrderCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type SalesOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalesOrderUpdateWithoutCustomerInput, Prisma.SalesOrderUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutCustomerInput, Prisma.SalesOrderUncheckedCreateWithoutCustomerInput>;
};
export type SalesOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalesOrderUpdateWithoutCustomerInput, Prisma.SalesOrderUncheckedUpdateWithoutCustomerInput>;
};
export type SalesOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.SalesOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.SalesOrderUpdateManyMutationInput, Prisma.SalesOrderUncheckedUpdateManyWithoutCustomerInput>;
};
export type SalesOrderScalarWhereInput = {
    AND?: Prisma.SalesOrderScalarWhereInput | Prisma.SalesOrderScalarWhereInput[];
    OR?: Prisma.SalesOrderScalarWhereInput[];
    NOT?: Prisma.SalesOrderScalarWhereInput | Prisma.SalesOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"SalesOrder"> | string;
    customerId?: Prisma.StringFilter<"SalesOrder"> | string;
    transportTypeId?: Prisma.StringFilter<"SalesOrder"> | string;
    status?: Prisma.EnumOrderStatusFilter<"SalesOrder"> | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalesOrder"> | Date | string;
};
export type SalesOrderCreateWithoutTransportTypeInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutSalesOrdersInput;
    items?: Prisma.SalesOrderItemCreateNestedManyWithoutSalesOrderInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderUncheckedCreateWithoutTransportTypeInput = {
    id?: string;
    customerId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderCreateOrConnectWithoutTransportTypeInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutTransportTypeInput, Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput>;
};
export type SalesOrderCreateManyTransportTypeInputEnvelope = {
    data: Prisma.SalesOrderCreateManyTransportTypeInput | Prisma.SalesOrderCreateManyTransportTypeInput[];
    skipDuplicates?: boolean;
};
export type SalesOrderUpsertWithWhereUniqueWithoutTransportTypeInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalesOrderUpdateWithoutTransportTypeInput, Prisma.SalesOrderUncheckedUpdateWithoutTransportTypeInput>;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutTransportTypeInput, Prisma.SalesOrderUncheckedCreateWithoutTransportTypeInput>;
};
export type SalesOrderUpdateWithWhereUniqueWithoutTransportTypeInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalesOrderUpdateWithoutTransportTypeInput, Prisma.SalesOrderUncheckedUpdateWithoutTransportTypeInput>;
};
export type SalesOrderUpdateManyWithWhereWithoutTransportTypeInput = {
    where: Prisma.SalesOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.SalesOrderUpdateManyMutationInput, Prisma.SalesOrderUncheckedUpdateManyWithoutTransportTypeInput>;
};
export type SalesOrderCreateWithoutItemsInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutSalesOrdersInput;
    transportType: Prisma.TransportTypeCreateNestedOneWithoutSalesOrdersInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    customerId: string;
    transportTypeId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutItemsInput, Prisma.SalesOrderUncheckedCreateWithoutItemsInput>;
};
export type SalesOrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.SalesOrderUpdateWithoutItemsInput, Prisma.SalesOrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutItemsInput, Prisma.SalesOrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.SalesOrderWhereInput;
};
export type SalesOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.SalesOrderWhereInput;
    data: Prisma.XOR<Prisma.SalesOrderUpdateWithoutItemsInput, Prisma.SalesOrderUncheckedUpdateWithoutItemsInput>;
};
export type SalesOrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput;
    transportType?: Prisma.TransportTypeUpdateOneRequiredWithoutSalesOrdersNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderCreateWithoutScheduleInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutSalesOrdersInput;
    transportType: Prisma.TransportTypeCreateNestedOneWithoutSalesOrdersInput;
    items?: Prisma.SalesOrderItemCreateNestedManyWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderUncheckedCreateWithoutScheduleInput = {
    id?: string;
    customerId: string;
    transportTypeId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutSalesOrderInput;
};
export type SalesOrderCreateOrConnectWithoutScheduleInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutScheduleInput, Prisma.SalesOrderUncheckedCreateWithoutScheduleInput>;
};
export type SalesOrderUpsertWithoutScheduleInput = {
    update: Prisma.XOR<Prisma.SalesOrderUpdateWithoutScheduleInput, Prisma.SalesOrderUncheckedUpdateWithoutScheduleInput>;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutScheduleInput, Prisma.SalesOrderUncheckedCreateWithoutScheduleInput>;
    where?: Prisma.SalesOrderWhereInput;
};
export type SalesOrderUpdateToOneWithWhereWithoutScheduleInput = {
    where?: Prisma.SalesOrderWhereInput;
    data: Prisma.XOR<Prisma.SalesOrderUpdateWithoutScheduleInput, Prisma.SalesOrderUncheckedUpdateWithoutScheduleInput>;
};
export type SalesOrderUpdateWithoutScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput;
    transportType?: Prisma.TransportTypeUpdateOneRequiredWithoutSalesOrdersNestedInput;
    items?: Prisma.SalesOrderItemUpdateManyWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderUncheckedUpdateWithoutScheduleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderCreateWithoutAuditLogsInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutSalesOrdersInput;
    transportType: Prisma.TransportTypeCreateNestedOneWithoutSalesOrdersInput;
    items?: Prisma.SalesOrderItemCreateNestedManyWithoutSalesOrderInput;
    schedule?: Prisma.ScheduleCreateNestedOneWithoutSalesOrderInput;
};
export type SalesOrderUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    customerId: string;
    transportTypeId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput;
    schedule?: Prisma.ScheduleUncheckedCreateNestedOneWithoutSalesOrderInput;
};
export type SalesOrderCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.SalesOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutAuditLogsInput, Prisma.SalesOrderUncheckedCreateWithoutAuditLogsInput>;
};
export type SalesOrderUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.SalesOrderUpdateWithoutAuditLogsInput, Prisma.SalesOrderUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.SalesOrderCreateWithoutAuditLogsInput, Prisma.SalesOrderUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.SalesOrderWhereInput;
};
export type SalesOrderUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.SalesOrderWhereInput;
    data: Prisma.XOR<Prisma.SalesOrderUpdateWithoutAuditLogsInput, Prisma.SalesOrderUncheckedUpdateWithoutAuditLogsInput>;
};
export type SalesOrderUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput;
    transportType?: Prisma.TransportTypeUpdateOneRequiredWithoutSalesOrdersNestedInput;
    items?: Prisma.SalesOrderItemUpdateManyWithoutSalesOrderNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutSalesOrderNestedInput;
};
export type SalesOrderUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutSalesOrderNestedInput;
};
export type SalesOrderCreateManyCustomerInput = {
    id?: string;
    transportTypeId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalesOrderUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transportType?: Prisma.TransportTypeUpdateOneRequiredWithoutSalesOrdersNestedInput;
    items?: Prisma.SalesOrderItemUpdateManyWithoutSalesOrderNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesOrderCreateManyTransportTypeInput = {
    id?: string;
    customerId: string;
    status?: $Enums.OrderStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalesOrderUpdateWithoutTransportTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput;
    items?: Prisma.SalesOrderItemUpdateManyWithoutSalesOrderNestedInput;
    schedule?: Prisma.ScheduleUpdateOneWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderUncheckedUpdateWithoutTransportTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput;
    schedule?: Prisma.ScheduleUncheckedUpdateOneWithoutSalesOrderNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutSalesOrderNestedInput;
};
export type SalesOrderUncheckedUpdateManyWithoutTransportTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesOrderCountOutputType = {
    items: number;
    auditLogs: number;
};
export type SalesOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | SalesOrderCountOutputTypeCountItemsArgs;
    auditLogs?: boolean | SalesOrderCountOutputTypeCountAuditLogsArgs;
};
export type SalesOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderCountOutputTypeSelect<ExtArgs> | null;
};
export type SalesOrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderItemWhereInput;
};
export type SalesOrderCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type SalesOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    transportTypeId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.SalesOrder$itemsArgs<ExtArgs>;
    schedule?: boolean | Prisma.SalesOrder$scheduleArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.SalesOrder$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.SalesOrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salesOrder"]>;
export type SalesOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    transportTypeId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salesOrder"]>;
export type SalesOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    transportTypeId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salesOrder"]>;
export type SalesOrderSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    transportTypeId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SalesOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "transportTypeId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["salesOrder"]>;
export type SalesOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.SalesOrder$itemsArgs<ExtArgs>;
    schedule?: boolean | Prisma.SalesOrder$scheduleArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.SalesOrder$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.SalesOrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SalesOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
};
export type SalesOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
};
export type $SalesOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalesOrder";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        transportType: Prisma.$TransportTypePayload<ExtArgs>;
        items: Prisma.$SalesOrderItemPayload<ExtArgs>[];
        schedule: Prisma.$SchedulePayload<ExtArgs> | null;
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        transportTypeId: string;
        status: $Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["salesOrder"]>;
    composites: {};
};
export type SalesOrderGetPayload<S extends boolean | null | undefined | SalesOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload, S>;
export type SalesOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalesOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalesOrderCountAggregateInputType | true;
};
export interface SalesOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalesOrder'];
        meta: {
            name: 'SalesOrder';
        };
    };
    findUnique<T extends SalesOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, SalesOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SalesOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalesOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SalesOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, SalesOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SalesOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalesOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SalesOrderFindManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SalesOrderCreateArgs>(args: Prisma.SelectSubset<T, SalesOrderCreateArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SalesOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SalesOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalesOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SalesOrderDeleteArgs>(args: Prisma.SelectSubset<T, SalesOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SalesOrderUpdateArgs>(args: Prisma.SelectSubset<T, SalesOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SalesOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SalesOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, SalesOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SalesOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalesOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SalesOrderUpsertArgs>(args: Prisma.SelectSubset<T, SalesOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SalesOrderCountArgs>(args?: Prisma.Subset<T, SalesOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalesOrderCountAggregateOutputType> : number>;
    aggregate<T extends SalesOrderAggregateArgs>(args: Prisma.Subset<T, SalesOrderAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderAggregateType<T>>;
    groupBy<T extends SalesOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalesOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: SalesOrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalesOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SalesOrderFieldRefs;
}
export interface Prisma__SalesOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transportType<T extends Prisma.TransportTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransportTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.SalesOrder$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    schedule<T extends Prisma.SalesOrder$scheduleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrder$scheduleArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    auditLogs<T extends Prisma.SalesOrder$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrder$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SalesOrderFieldRefs {
    readonly id: Prisma.FieldRef<"SalesOrder", 'String'>;
    readonly customerId: Prisma.FieldRef<"SalesOrder", 'String'>;
    readonly transportTypeId: Prisma.FieldRef<"SalesOrder", 'String'>;
    readonly status: Prisma.FieldRef<"SalesOrder", 'OrderStatus'>;
    readonly createdAt: Prisma.FieldRef<"SalesOrder", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SalesOrder", 'DateTime'>;
}
export type SalesOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    where: Prisma.SalesOrderWhereUniqueInput;
};
export type SalesOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    where: Prisma.SalesOrderWhereUniqueInput;
};
export type SalesOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    where?: Prisma.SalesOrderWhereInput;
    orderBy?: Prisma.SalesOrderOrderByWithRelationInput | Prisma.SalesOrderOrderByWithRelationInput[];
    cursor?: Prisma.SalesOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalesOrderScalarFieldEnum | Prisma.SalesOrderScalarFieldEnum[];
};
export type SalesOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    where?: Prisma.SalesOrderWhereInput;
    orderBy?: Prisma.SalesOrderOrderByWithRelationInput | Prisma.SalesOrderOrderByWithRelationInput[];
    cursor?: Prisma.SalesOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalesOrderScalarFieldEnum | Prisma.SalesOrderScalarFieldEnum[];
};
export type SalesOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    where?: Prisma.SalesOrderWhereInput;
    orderBy?: Prisma.SalesOrderOrderByWithRelationInput | Prisma.SalesOrderOrderByWithRelationInput[];
    cursor?: Prisma.SalesOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalesOrderScalarFieldEnum | Prisma.SalesOrderScalarFieldEnum[];
};
export type SalesOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalesOrderCreateInput, Prisma.SalesOrderUncheckedCreateInput>;
};
export type SalesOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SalesOrderCreateManyInput | Prisma.SalesOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SalesOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    data: Prisma.SalesOrderCreateManyInput | Prisma.SalesOrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SalesOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SalesOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalesOrderUpdateInput, Prisma.SalesOrderUncheckedUpdateInput>;
    where: Prisma.SalesOrderWhereUniqueInput;
};
export type SalesOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SalesOrderUpdateManyMutationInput, Prisma.SalesOrderUncheckedUpdateManyInput>;
    where?: Prisma.SalesOrderWhereInput;
    limit?: number;
};
export type SalesOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalesOrderUpdateManyMutationInput, Prisma.SalesOrderUncheckedUpdateManyInput>;
    where?: Prisma.SalesOrderWhereInput;
    limit?: number;
    include?: Prisma.SalesOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SalesOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    where: Prisma.SalesOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderCreateInput, Prisma.SalesOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SalesOrderUpdateInput, Prisma.SalesOrderUncheckedUpdateInput>;
};
export type SalesOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    where: Prisma.SalesOrderWhereUniqueInput;
};
export type SalesOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderWhereInput;
    limit?: number;
};
export type SalesOrder$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderItemInclude<ExtArgs> | null;
    where?: Prisma.SalesOrderItemWhereInput;
    orderBy?: Prisma.SalesOrderItemOrderByWithRelationInput | Prisma.SalesOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.SalesOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalesOrderItemScalarFieldEnum | Prisma.SalesOrderItemScalarFieldEnum[];
};
export type SalesOrder$scheduleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
};
export type SalesOrder$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type SalesOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
};
