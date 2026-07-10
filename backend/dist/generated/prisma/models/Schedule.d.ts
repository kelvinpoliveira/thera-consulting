import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$SchedulePayload>;
export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
};
export type ScheduleMinAggregateOutputType = {
    id: string | null;
    salesOrderId: string | null;
    deliveryDate: Date | null;
    windowStart: Date | null;
    windowEnd: Date | null;
    confirmed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ScheduleMaxAggregateOutputType = {
    id: string | null;
    salesOrderId: string | null;
    deliveryDate: Date | null;
    windowStart: Date | null;
    windowEnd: Date | null;
    confirmed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ScheduleCountAggregateOutputType = {
    id: number;
    salesOrderId: number;
    deliveryDate: number;
    windowStart: number;
    windowEnd: number;
    confirmed: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ScheduleMinAggregateInputType = {
    id?: true;
    salesOrderId?: true;
    deliveryDate?: true;
    windowStart?: true;
    windowEnd?: true;
    confirmed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ScheduleMaxAggregateInputType = {
    id?: true;
    salesOrderId?: true;
    deliveryDate?: true;
    windowStart?: true;
    windowEnd?: true;
    confirmed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ScheduleCountAggregateInputType = {
    id?: true;
    salesOrderId?: true;
    deliveryDate?: true;
    windowStart?: true;
    windowEnd?: true;
    confirmed?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScheduleCountAggregateInputType;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
};
export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchedule[P]> : Prisma.GetScalarType<T[P], AggregateSchedule[P]>;
};
export type ScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithAggregationInput | Prisma.ScheduleOrderByWithAggregationInput[];
    by: Prisma.ScheduleScalarFieldEnum[] | Prisma.ScheduleScalarFieldEnum;
    having?: Prisma.ScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
};
export type ScheduleGroupByOutputType = {
    id: string;
    salesOrderId: string;
    deliveryDate: Date;
    windowStart: Date;
    windowEnd: Date;
    confirmed: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
};
export type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
}>>;
export type ScheduleWhereInput = {
    AND?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    OR?: Prisma.ScheduleWhereInput[];
    NOT?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    id?: Prisma.StringFilter<"Schedule"> | string;
    salesOrderId?: Prisma.StringFilter<"Schedule"> | string;
    deliveryDate?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    windowStart?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    windowEnd?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    confirmed?: Prisma.BoolFilter<"Schedule"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    salesOrder?: Prisma.XOR<Prisma.SalesOrderScalarRelationFilter, Prisma.SalesOrderWhereInput>;
};
export type ScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    salesOrder?: Prisma.SalesOrderOrderByWithRelationInput;
};
export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    salesOrderId?: string;
    AND?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    OR?: Prisma.ScheduleWhereInput[];
    NOT?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    deliveryDate?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    windowStart?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    windowEnd?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    confirmed?: Prisma.BoolFilter<"Schedule"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Schedule"> | Date | string;
    salesOrder?: Prisma.XOR<Prisma.SalesOrderScalarRelationFilter, Prisma.SalesOrderWhereInput>;
}, "id" | "salesOrderId">;
export type ScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ScheduleCountOrderByAggregateInput;
    _max?: Prisma.ScheduleMaxOrderByAggregateInput;
    _min?: Prisma.ScheduleMinOrderByAggregateInput;
};
export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScheduleScalarWhereWithAggregatesInput | Prisma.ScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScheduleScalarWhereWithAggregatesInput | Prisma.ScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Schedule"> | string;
    salesOrderId?: Prisma.StringWithAggregatesFilter<"Schedule"> | string;
    deliveryDate?: Prisma.DateTimeWithAggregatesFilter<"Schedule"> | Date | string;
    windowStart?: Prisma.DateTimeWithAggregatesFilter<"Schedule"> | Date | string;
    windowEnd?: Prisma.DateTimeWithAggregatesFilter<"Schedule"> | Date | string;
    confirmed?: Prisma.BoolWithAggregatesFilter<"Schedule"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Schedule"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Schedule"> | Date | string;
};
export type ScheduleCreateInput = {
    id?: string;
    deliveryDate: Date | string;
    windowStart: Date | string;
    windowEnd: Date | string;
    confirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salesOrder: Prisma.SalesOrderCreateNestedOneWithoutScheduleInput;
};
export type ScheduleUncheckedCreateInput = {
    id?: string;
    salesOrderId: string;
    deliveryDate: Date | string;
    windowStart: Date | string;
    windowEnd: Date | string;
    confirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salesOrder?: Prisma.SalesOrderUpdateOneRequiredWithoutScheduleNestedInput;
};
export type ScheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    salesOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduleCreateManyInput = {
    id?: string;
    salesOrderId: string;
    deliveryDate: Date | string;
    windowStart: Date | string;
    windowEnd: Date | string;
    confirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    salesOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduleNullableScalarRelationFilter = {
    is?: Prisma.ScheduleWhereInput | null;
    isNot?: Prisma.ScheduleWhereInput | null;
};
export type ScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    salesOrderId?: Prisma.SortOrder;
    deliveryDate?: Prisma.SortOrder;
    windowStart?: Prisma.SortOrder;
    windowEnd?: Prisma.SortOrder;
    confirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScheduleCreateNestedOneWithoutSalesOrderInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutSalesOrderInput, Prisma.ScheduleUncheckedCreateWithoutSalesOrderInput>;
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutSalesOrderInput;
    connect?: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleUncheckedCreateNestedOneWithoutSalesOrderInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutSalesOrderInput, Prisma.ScheduleUncheckedCreateWithoutSalesOrderInput>;
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutSalesOrderInput;
    connect?: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleUpdateOneWithoutSalesOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutSalesOrderInput, Prisma.ScheduleUncheckedCreateWithoutSalesOrderInput>;
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutSalesOrderInput;
    upsert?: Prisma.ScheduleUpsertWithoutSalesOrderInput;
    disconnect?: Prisma.ScheduleWhereInput | boolean;
    delete?: Prisma.ScheduleWhereInput | boolean;
    connect?: Prisma.ScheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ScheduleUpdateToOneWithWhereWithoutSalesOrderInput, Prisma.ScheduleUpdateWithoutSalesOrderInput>, Prisma.ScheduleUncheckedUpdateWithoutSalesOrderInput>;
};
export type ScheduleUncheckedUpdateOneWithoutSalesOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutSalesOrderInput, Prisma.ScheduleUncheckedCreateWithoutSalesOrderInput>;
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutSalesOrderInput;
    upsert?: Prisma.ScheduleUpsertWithoutSalesOrderInput;
    disconnect?: Prisma.ScheduleWhereInput | boolean;
    delete?: Prisma.ScheduleWhereInput | boolean;
    connect?: Prisma.ScheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ScheduleUpdateToOneWithWhereWithoutSalesOrderInput, Prisma.ScheduleUpdateWithoutSalesOrderInput>, Prisma.ScheduleUncheckedUpdateWithoutSalesOrderInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ScheduleCreateWithoutSalesOrderInput = {
    id?: string;
    deliveryDate: Date | string;
    windowStart: Date | string;
    windowEnd: Date | string;
    confirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScheduleUncheckedCreateWithoutSalesOrderInput = {
    id?: string;
    deliveryDate: Date | string;
    windowStart: Date | string;
    windowEnd: Date | string;
    confirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScheduleCreateOrConnectWithoutSalesOrderInput = {
    where: Prisma.ScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduleCreateWithoutSalesOrderInput, Prisma.ScheduleUncheckedCreateWithoutSalesOrderInput>;
};
export type ScheduleUpsertWithoutSalesOrderInput = {
    update: Prisma.XOR<Prisma.ScheduleUpdateWithoutSalesOrderInput, Prisma.ScheduleUncheckedUpdateWithoutSalesOrderInput>;
    create: Prisma.XOR<Prisma.ScheduleCreateWithoutSalesOrderInput, Prisma.ScheduleUncheckedCreateWithoutSalesOrderInput>;
    where?: Prisma.ScheduleWhereInput;
};
export type ScheduleUpdateToOneWithWhereWithoutSalesOrderInput = {
    where?: Prisma.ScheduleWhereInput;
    data: Prisma.XOR<Prisma.ScheduleUpdateWithoutSalesOrderInput, Prisma.ScheduleUncheckedUpdateWithoutSalesOrderInput>;
};
export type ScheduleUpdateWithoutSalesOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduleUncheckedUpdateWithoutSalesOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    windowEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    salesOrderId?: boolean;
    deliveryDate?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    confirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    salesOrderId?: boolean;
    deliveryDate?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    confirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    salesOrderId?: boolean;
    deliveryDate?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    confirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectScalar = {
    id?: boolean;
    salesOrderId?: boolean;
    deliveryDate?: boolean;
    windowStart?: boolean;
    windowEnd?: boolean;
    confirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "salesOrderId" | "deliveryDate" | "windowStart" | "windowEnd" | "confirmed" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>;
export type ScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
};
export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
};
export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
};
export type $SchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Schedule";
    objects: {
        salesOrder: Prisma.$SalesOrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        salesOrderId: string;
        deliveryDate: Date;
        windowStart: Date;
        windowEnd: Date;
        confirmed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["schedule"]>;
    composites: {};
};
export type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchedulePayload, S>;
export type ScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScheduleCountAggregateInputType | true;
};
export interface ScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Schedule'];
        meta: {
            name: 'Schedule';
        };
    };
    findUnique<T extends ScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScheduleCreateArgs>(args: Prisma.SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScheduleDeleteArgs>(args: Prisma.SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScheduleUpdateArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScheduleUpsertArgs>(args: Prisma.SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScheduleCountArgs>(args?: Prisma.Subset<T, ScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScheduleCountAggregateOutputType> : number>;
    aggregate<T extends ScheduleAggregateArgs>(args: Prisma.Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;
    groupBy<T extends ScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: ScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScheduleFieldRefs;
}
export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    salesOrder<T extends Prisma.SalesOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"Schedule", 'String'>;
    readonly salesOrderId: Prisma.FieldRef<"Schedule", 'String'>;
    readonly deliveryDate: Prisma.FieldRef<"Schedule", 'DateTime'>;
    readonly windowStart: Prisma.FieldRef<"Schedule", 'DateTime'>;
    readonly windowEnd: Prisma.FieldRef<"Schedule", 'DateTime'>;
    readonly confirmed: Prisma.FieldRef<"Schedule", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Schedule", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Schedule", 'DateTime'>;
}
export type ScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleCreateInput, Prisma.ScheduleUncheckedCreateInput>;
};
export type ScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScheduleCreateManyInput | Prisma.ScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    data: Prisma.ScheduleCreateManyInput | Prisma.ScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleUpdateInput, Prisma.ScheduleUncheckedUpdateInput>;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScheduleUpdateManyMutationInput, Prisma.ScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
};
export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleUpdateManyMutationInput, Prisma.ScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
    include?: Prisma.ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduleCreateInput, Prisma.ScheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScheduleUpdateInput, Prisma.ScheduleUncheckedUpdateInput>;
};
export type ScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
};
export type ScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
};
