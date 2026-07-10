import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AuditLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditLogPayload>;
export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
};
export type AuditLogMinAggregateOutputType = {
    id: string | null;
    entityType: string | null;
    entityId: string | null;
    action: string | null;
    salesOrderId: string | null;
    createdAt: Date | null;
};
export type AuditLogMaxAggregateOutputType = {
    id: string | null;
    entityType: string | null;
    entityId: string | null;
    action: string | null;
    salesOrderId: string | null;
    createdAt: Date | null;
};
export type AuditLogCountAggregateOutputType = {
    id: number;
    entityType: number;
    entityId: number;
    action: number;
    previousState: number;
    currentState: number;
    salesOrderId: number;
    createdAt: number;
    _all: number;
};
export type AuditLogMinAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    action?: true;
    salesOrderId?: true;
    createdAt?: true;
};
export type AuditLogMaxAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    action?: true;
    salesOrderId?: true;
    createdAt?: true;
};
export type AuditLogCountAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    action?: true;
    previousState?: true;
    currentState?: true;
    salesOrderId?: true;
    createdAt?: true;
    _all?: true;
};
export type AuditLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditLogCountAggregateInputType;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
};
export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditLog[P]> : Prisma.GetScalarType<T[P], AggregateAuditLog[P]>;
};
export type AuditLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithAggregationInput | Prisma.AuditLogOrderByWithAggregationInput[];
    by: Prisma.AuditLogScalarFieldEnum[] | Prisma.AuditLogScalarFieldEnum;
    having?: Prisma.AuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditLogCountAggregateInputType | true;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
};
export type AuditLogGroupByOutputType = {
    id: string;
    entityType: string;
    entityId: string;
    action: string;
    previousState: runtime.JsonValue | null;
    currentState: runtime.JsonValue | null;
    salesOrderId: string | null;
    createdAt: Date;
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
};
export type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditLogGroupByOutputType[P]>;
}>>;
export type AuditLogWhereInput = {
    AND?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    OR?: Prisma.AuditLogWhereInput[];
    NOT?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    id?: Prisma.StringFilter<"AuditLog"> | string;
    entityType?: Prisma.StringFilter<"AuditLog"> | string;
    entityId?: Prisma.StringFilter<"AuditLog"> | string;
    action?: Prisma.StringFilter<"AuditLog"> | string;
    previousState?: Prisma.JsonNullableFilter<"AuditLog">;
    currentState?: Prisma.JsonNullableFilter<"AuditLog">;
    salesOrderId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
    salesOrder?: Prisma.XOR<Prisma.SalesOrderNullableScalarRelationFilter, Prisma.SalesOrderWhereInput> | null;
};
export type AuditLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    previousState?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentState?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    salesOrder?: Prisma.SalesOrderOrderByWithRelationInput;
};
export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    OR?: Prisma.AuditLogWhereInput[];
    NOT?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    entityType?: Prisma.StringFilter<"AuditLog"> | string;
    entityId?: Prisma.StringFilter<"AuditLog"> | string;
    action?: Prisma.StringFilter<"AuditLog"> | string;
    previousState?: Prisma.JsonNullableFilter<"AuditLog">;
    currentState?: Prisma.JsonNullableFilter<"AuditLog">;
    salesOrderId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
    salesOrder?: Prisma.XOR<Prisma.SalesOrderNullableScalarRelationFilter, Prisma.SalesOrderWhereInput> | null;
}, "id">;
export type AuditLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    previousState?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentState?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AuditLogCountOrderByAggregateInput;
    _max?: Prisma.AuditLogMaxOrderByAggregateInput;
    _min?: Prisma.AuditLogMinOrderByAggregateInput;
};
export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditLogScalarWhereWithAggregatesInput | Prisma.AuditLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditLogScalarWhereWithAggregatesInput | Prisma.AuditLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AuditLog"> | string;
    entityType?: Prisma.StringWithAggregatesFilter<"AuditLog"> | string;
    entityId?: Prisma.StringWithAggregatesFilter<"AuditLog"> | string;
    action?: Prisma.StringWithAggregatesFilter<"AuditLog"> | string;
    previousState?: Prisma.JsonNullableWithAggregatesFilter<"AuditLog">;
    currentState?: Prisma.JsonNullableWithAggregatesFilter<"AuditLog">;
    salesOrderId?: Prisma.StringNullableWithAggregatesFilter<"AuditLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AuditLog"> | Date | string;
};
export type AuditLogCreateInput = {
    id?: string;
    entityType: string;
    entityId: string;
    action: string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    salesOrder?: Prisma.SalesOrderCreateNestedOneWithoutAuditLogsInput;
};
export type AuditLogUncheckedCreateInput = {
    id?: string;
    entityType: string;
    entityId: string;
    action: string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    salesOrderId?: string | null;
    createdAt?: Date | string;
};
export type AuditLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salesOrder?: Prisma.SalesOrderUpdateOneWithoutAuditLogsNestedInput;
};
export type AuditLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    salesOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogCreateManyInput = {
    id?: string;
    entityType: string;
    entityId: string;
    action: string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    salesOrderId?: string | null;
    createdAt?: Date | string;
};
export type AuditLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    salesOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogListRelationFilter = {
    every?: Prisma.AuditLogWhereInput;
    some?: Prisma.AuditLogWhereInput;
    none?: Prisma.AuditLogWhereInput;
};
export type AuditLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    previousState?: Prisma.SortOrder;
    currentState?: Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditLogCreateNestedManyWithoutSalesOrderInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutSalesOrderInput, Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput> | Prisma.AuditLogCreateWithoutSalesOrderInput[] | Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutSalesOrderInput | Prisma.AuditLogCreateOrConnectWithoutSalesOrderInput[];
    createMany?: Prisma.AuditLogCreateManySalesOrderInputEnvelope;
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
};
export type AuditLogUncheckedCreateNestedManyWithoutSalesOrderInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutSalesOrderInput, Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput> | Prisma.AuditLogCreateWithoutSalesOrderInput[] | Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutSalesOrderInput | Prisma.AuditLogCreateOrConnectWithoutSalesOrderInput[];
    createMany?: Prisma.AuditLogCreateManySalesOrderInputEnvelope;
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
};
export type AuditLogUpdateManyWithoutSalesOrderNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutSalesOrderInput, Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput> | Prisma.AuditLogCreateWithoutSalesOrderInput[] | Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutSalesOrderInput | Prisma.AuditLogCreateOrConnectWithoutSalesOrderInput[];
    upsert?: Prisma.AuditLogUpsertWithWhereUniqueWithoutSalesOrderInput | Prisma.AuditLogUpsertWithWhereUniqueWithoutSalesOrderInput[];
    createMany?: Prisma.AuditLogCreateManySalesOrderInputEnvelope;
    set?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    disconnect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    delete?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    update?: Prisma.AuditLogUpdateWithWhereUniqueWithoutSalesOrderInput | Prisma.AuditLogUpdateWithWhereUniqueWithoutSalesOrderInput[];
    updateMany?: Prisma.AuditLogUpdateManyWithWhereWithoutSalesOrderInput | Prisma.AuditLogUpdateManyWithWhereWithoutSalesOrderInput[];
    deleteMany?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
};
export type AuditLogUncheckedUpdateManyWithoutSalesOrderNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutSalesOrderInput, Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput> | Prisma.AuditLogCreateWithoutSalesOrderInput[] | Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutSalesOrderInput | Prisma.AuditLogCreateOrConnectWithoutSalesOrderInput[];
    upsert?: Prisma.AuditLogUpsertWithWhereUniqueWithoutSalesOrderInput | Prisma.AuditLogUpsertWithWhereUniqueWithoutSalesOrderInput[];
    createMany?: Prisma.AuditLogCreateManySalesOrderInputEnvelope;
    set?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    disconnect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    delete?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    update?: Prisma.AuditLogUpdateWithWhereUniqueWithoutSalesOrderInput | Prisma.AuditLogUpdateWithWhereUniqueWithoutSalesOrderInput[];
    updateMany?: Prisma.AuditLogUpdateManyWithWhereWithoutSalesOrderInput | Prisma.AuditLogUpdateManyWithWhereWithoutSalesOrderInput[];
    deleteMany?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
};
export type AuditLogCreateWithoutSalesOrderInput = {
    id?: string;
    entityType: string;
    entityId: string;
    action: string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AuditLogUncheckedCreateWithoutSalesOrderInput = {
    id?: string;
    entityType: string;
    entityId: string;
    action: string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AuditLogCreateOrConnectWithoutSalesOrderInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogCreateWithoutSalesOrderInput, Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput>;
};
export type AuditLogCreateManySalesOrderInputEnvelope = {
    data: Prisma.AuditLogCreateManySalesOrderInput | Prisma.AuditLogCreateManySalesOrderInput[];
    skipDuplicates?: boolean;
};
export type AuditLogUpsertWithWhereUniqueWithoutSalesOrderInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditLogUpdateWithoutSalesOrderInput, Prisma.AuditLogUncheckedUpdateWithoutSalesOrderInput>;
    create: Prisma.XOR<Prisma.AuditLogCreateWithoutSalesOrderInput, Prisma.AuditLogUncheckedCreateWithoutSalesOrderInput>;
};
export type AuditLogUpdateWithWhereUniqueWithoutSalesOrderInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditLogUpdateWithoutSalesOrderInput, Prisma.AuditLogUncheckedUpdateWithoutSalesOrderInput>;
};
export type AuditLogUpdateManyWithWhereWithoutSalesOrderInput = {
    where: Prisma.AuditLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyWithoutSalesOrderInput>;
};
export type AuditLogScalarWhereInput = {
    AND?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
    OR?: Prisma.AuditLogScalarWhereInput[];
    NOT?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
    id?: Prisma.StringFilter<"AuditLog"> | string;
    entityType?: Prisma.StringFilter<"AuditLog"> | string;
    entityId?: Prisma.StringFilter<"AuditLog"> | string;
    action?: Prisma.StringFilter<"AuditLog"> | string;
    previousState?: Prisma.JsonNullableFilter<"AuditLog">;
    currentState?: Prisma.JsonNullableFilter<"AuditLog">;
    salesOrderId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
};
export type AuditLogCreateManySalesOrderInput = {
    id?: string;
    entityType: string;
    entityId: string;
    action: string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AuditLogUpdateWithoutSalesOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateWithoutSalesOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateManyWithoutSalesOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    previousState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    currentState?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    action?: boolean;
    previousState?: boolean;
    currentState?: boolean;
    salesOrderId?: boolean;
    createdAt?: boolean;
    salesOrder?: boolean | Prisma.AuditLog$salesOrderArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    action?: boolean;
    previousState?: boolean;
    currentState?: boolean;
    salesOrderId?: boolean;
    createdAt?: boolean;
    salesOrder?: boolean | Prisma.AuditLog$salesOrderArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    action?: boolean;
    previousState?: boolean;
    currentState?: boolean;
    salesOrderId?: boolean;
    createdAt?: boolean;
    salesOrder?: boolean | Prisma.AuditLog$salesOrderArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectScalar = {
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    action?: boolean;
    previousState?: boolean;
    currentState?: boolean;
    salesOrderId?: boolean;
    createdAt?: boolean;
};
export type AuditLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "entityType" | "entityId" | "action" | "previousState" | "currentState" | "salesOrderId" | "createdAt", ExtArgs["result"]["auditLog"]>;
export type AuditLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.AuditLog$salesOrderArgs<ExtArgs>;
};
export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.AuditLog$salesOrderArgs<ExtArgs>;
};
export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.AuditLog$salesOrderArgs<ExtArgs>;
};
export type $AuditLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuditLog";
    objects: {
        salesOrder: Prisma.$SalesOrderPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        entityType: string;
        entityId: string;
        action: string;
        previousState: runtime.JsonValue | null;
        currentState: runtime.JsonValue | null;
        salesOrderId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["auditLog"]>;
    composites: {};
};
export type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditLogPayload, S>;
export type AuditLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditLogCountAggregateInputType | true;
};
export interface AuditLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'];
        meta: {
            name: 'AuditLog';
        };
    };
    findUnique<T extends AuditLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditLogFindManyArgs>(args?: Prisma.SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditLogCreateArgs>(args: Prisma.SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditLogDeleteArgs>(args: Prisma.SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditLogUpdateArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditLogUpsertArgs>(args: Prisma.SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditLogCountArgs>(args?: Prisma.Subset<T, AuditLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditLogCountAggregateOutputType> : number>;
    aggregate<T extends AuditLogAggregateArgs>(args: Prisma.Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>;
    groupBy<T extends AuditLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditLogGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditLogFieldRefs;
}
export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    salesOrder<T extends Prisma.AuditLog$salesOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuditLog$salesOrderArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditLogFieldRefs {
    readonly id: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly entityType: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly entityId: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly action: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly previousState: Prisma.FieldRef<"AuditLog", 'Json'>;
    readonly currentState: Prisma.FieldRef<"AuditLog", 'Json'>;
    readonly salesOrderId: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AuditLog", 'DateTime'>;
}
export type AuditLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogCreateInput, Prisma.AuditLogUncheckedCreateInput>;
};
export type AuditLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditLogCreateManyInput | Prisma.AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    data: Prisma.AuditLogCreateManyInput | Prisma.AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogUpdateInput, Prisma.AuditLogUncheckedUpdateInput>;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyInput>;
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
};
export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyInput>;
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
    include?: Prisma.AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogCreateInput, Prisma.AuditLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditLogUpdateInput, Prisma.AuditLogUncheckedUpdateInput>;
};
export type AuditLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
};
export type AuditLog$salesOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderInclude<ExtArgs> | null;
    where?: Prisma.SalesOrderWhereInput;
};
export type AuditLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
};
