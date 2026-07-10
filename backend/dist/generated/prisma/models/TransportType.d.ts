import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TransportTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$TransportTypePayload>;
export type AggregateTransportType = {
    _count: TransportTypeCountAggregateOutputType | null;
    _min: TransportTypeMinAggregateOutputType | null;
    _max: TransportTypeMaxAggregateOutputType | null;
};
export type TransportTypeMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TransportTypeMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TransportTypeCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TransportTypeMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TransportTypeMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TransportTypeCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TransportTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransportTypeWhereInput;
    orderBy?: Prisma.TransportTypeOrderByWithRelationInput | Prisma.TransportTypeOrderByWithRelationInput[];
    cursor?: Prisma.TransportTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransportTypeCountAggregateInputType;
    _min?: TransportTypeMinAggregateInputType;
    _max?: TransportTypeMaxAggregateInputType;
};
export type GetTransportTypeAggregateType<T extends TransportTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateTransportType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransportType[P]> : Prisma.GetScalarType<T[P], AggregateTransportType[P]>;
};
export type TransportTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransportTypeWhereInput;
    orderBy?: Prisma.TransportTypeOrderByWithAggregationInput | Prisma.TransportTypeOrderByWithAggregationInput[];
    by: Prisma.TransportTypeScalarFieldEnum[] | Prisma.TransportTypeScalarFieldEnum;
    having?: Prisma.TransportTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransportTypeCountAggregateInputType | true;
    _min?: TransportTypeMinAggregateInputType;
    _max?: TransportTypeMaxAggregateInputType;
};
export type TransportTypeGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TransportTypeCountAggregateOutputType | null;
    _min: TransportTypeMinAggregateOutputType | null;
    _max: TransportTypeMaxAggregateOutputType | null;
};
export type GetTransportTypeGroupByPayload<T extends TransportTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransportTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransportTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransportTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransportTypeGroupByOutputType[P]>;
}>>;
export type TransportTypeWhereInput = {
    AND?: Prisma.TransportTypeWhereInput | Prisma.TransportTypeWhereInput[];
    OR?: Prisma.TransportTypeWhereInput[];
    NOT?: Prisma.TransportTypeWhereInput | Prisma.TransportTypeWhereInput[];
    id?: Prisma.StringFilter<"TransportType"> | string;
    name?: Prisma.StringFilter<"TransportType"> | string;
    description?: Prisma.StringNullableFilter<"TransportType"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TransportType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TransportType"> | Date | string;
    customers?: Prisma.CustomerTransportTypeListRelationFilter;
    salesOrders?: Prisma.SalesOrderListRelationFilter;
};
export type TransportTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customers?: Prisma.CustomerTransportTypeOrderByRelationAggregateInput;
    salesOrders?: Prisma.SalesOrderOrderByRelationAggregateInput;
};
export type TransportTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.TransportTypeWhereInput | Prisma.TransportTypeWhereInput[];
    OR?: Prisma.TransportTypeWhereInput[];
    NOT?: Prisma.TransportTypeWhereInput | Prisma.TransportTypeWhereInput[];
    description?: Prisma.StringNullableFilter<"TransportType"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TransportType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TransportType"> | Date | string;
    customers?: Prisma.CustomerTransportTypeListRelationFilter;
    salesOrders?: Prisma.SalesOrderListRelationFilter;
}, "id" | "name">;
export type TransportTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TransportTypeCountOrderByAggregateInput;
    _max?: Prisma.TransportTypeMaxOrderByAggregateInput;
    _min?: Prisma.TransportTypeMinOrderByAggregateInput;
};
export type TransportTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransportTypeScalarWhereWithAggregatesInput | Prisma.TransportTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransportTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransportTypeScalarWhereWithAggregatesInput | Prisma.TransportTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TransportType"> | string;
    name?: Prisma.StringWithAggregatesFilter<"TransportType"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"TransportType"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TransportType"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TransportType"> | Date | string;
};
export type TransportTypeCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customers?: Prisma.CustomerTransportTypeCreateNestedManyWithoutTransportTypeInput;
    salesOrders?: Prisma.SalesOrderCreateNestedManyWithoutTransportTypeInput;
};
export type TransportTypeUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customers?: Prisma.CustomerTransportTypeUncheckedCreateNestedManyWithoutTransportTypeInput;
    salesOrders?: Prisma.SalesOrderUncheckedCreateNestedManyWithoutTransportTypeInput;
};
export type TransportTypeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.CustomerTransportTypeUpdateManyWithoutTransportTypeNestedInput;
    salesOrders?: Prisma.SalesOrderUpdateManyWithoutTransportTypeNestedInput;
};
export type TransportTypeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.CustomerTransportTypeUncheckedUpdateManyWithoutTransportTypeNestedInput;
    salesOrders?: Prisma.SalesOrderUncheckedUpdateManyWithoutTransportTypeNestedInput;
};
export type TransportTypeCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransportTypeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransportTypeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransportTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransportTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransportTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransportTypeScalarRelationFilter = {
    is?: Prisma.TransportTypeWhereInput;
    isNot?: Prisma.TransportTypeWhereInput;
};
export type TransportTypeCreateNestedOneWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.TransportTypeCreateWithoutCustomersInput, Prisma.TransportTypeUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.TransportTypeCreateOrConnectWithoutCustomersInput;
    connect?: Prisma.TransportTypeWhereUniqueInput;
};
export type TransportTypeUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.TransportTypeCreateWithoutCustomersInput, Prisma.TransportTypeUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.TransportTypeCreateOrConnectWithoutCustomersInput;
    upsert?: Prisma.TransportTypeUpsertWithoutCustomersInput;
    connect?: Prisma.TransportTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransportTypeUpdateToOneWithWhereWithoutCustomersInput, Prisma.TransportTypeUpdateWithoutCustomersInput>, Prisma.TransportTypeUncheckedUpdateWithoutCustomersInput>;
};
export type TransportTypeCreateNestedOneWithoutSalesOrdersInput = {
    create?: Prisma.XOR<Prisma.TransportTypeCreateWithoutSalesOrdersInput, Prisma.TransportTypeUncheckedCreateWithoutSalesOrdersInput>;
    connectOrCreate?: Prisma.TransportTypeCreateOrConnectWithoutSalesOrdersInput;
    connect?: Prisma.TransportTypeWhereUniqueInput;
};
export type TransportTypeUpdateOneRequiredWithoutSalesOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.TransportTypeCreateWithoutSalesOrdersInput, Prisma.TransportTypeUncheckedCreateWithoutSalesOrdersInput>;
    connectOrCreate?: Prisma.TransportTypeCreateOrConnectWithoutSalesOrdersInput;
    upsert?: Prisma.TransportTypeUpsertWithoutSalesOrdersInput;
    connect?: Prisma.TransportTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TransportTypeUpdateToOneWithWhereWithoutSalesOrdersInput, Prisma.TransportTypeUpdateWithoutSalesOrdersInput>, Prisma.TransportTypeUncheckedUpdateWithoutSalesOrdersInput>;
};
export type TransportTypeCreateWithoutCustomersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salesOrders?: Prisma.SalesOrderCreateNestedManyWithoutTransportTypeInput;
};
export type TransportTypeUncheckedCreateWithoutCustomersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salesOrders?: Prisma.SalesOrderUncheckedCreateNestedManyWithoutTransportTypeInput;
};
export type TransportTypeCreateOrConnectWithoutCustomersInput = {
    where: Prisma.TransportTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransportTypeCreateWithoutCustomersInput, Prisma.TransportTypeUncheckedCreateWithoutCustomersInput>;
};
export type TransportTypeUpsertWithoutCustomersInput = {
    update: Prisma.XOR<Prisma.TransportTypeUpdateWithoutCustomersInput, Prisma.TransportTypeUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.TransportTypeCreateWithoutCustomersInput, Prisma.TransportTypeUncheckedCreateWithoutCustomersInput>;
    where?: Prisma.TransportTypeWhereInput;
};
export type TransportTypeUpdateToOneWithWhereWithoutCustomersInput = {
    where?: Prisma.TransportTypeWhereInput;
    data: Prisma.XOR<Prisma.TransportTypeUpdateWithoutCustomersInput, Prisma.TransportTypeUncheckedUpdateWithoutCustomersInput>;
};
export type TransportTypeUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salesOrders?: Prisma.SalesOrderUpdateManyWithoutTransportTypeNestedInput;
};
export type TransportTypeUncheckedUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salesOrders?: Prisma.SalesOrderUncheckedUpdateManyWithoutTransportTypeNestedInput;
};
export type TransportTypeCreateWithoutSalesOrdersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customers?: Prisma.CustomerTransportTypeCreateNestedManyWithoutTransportTypeInput;
};
export type TransportTypeUncheckedCreateWithoutSalesOrdersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customers?: Prisma.CustomerTransportTypeUncheckedCreateNestedManyWithoutTransportTypeInput;
};
export type TransportTypeCreateOrConnectWithoutSalesOrdersInput = {
    where: Prisma.TransportTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransportTypeCreateWithoutSalesOrdersInput, Prisma.TransportTypeUncheckedCreateWithoutSalesOrdersInput>;
};
export type TransportTypeUpsertWithoutSalesOrdersInput = {
    update: Prisma.XOR<Prisma.TransportTypeUpdateWithoutSalesOrdersInput, Prisma.TransportTypeUncheckedUpdateWithoutSalesOrdersInput>;
    create: Prisma.XOR<Prisma.TransportTypeCreateWithoutSalesOrdersInput, Prisma.TransportTypeUncheckedCreateWithoutSalesOrdersInput>;
    where?: Prisma.TransportTypeWhereInput;
};
export type TransportTypeUpdateToOneWithWhereWithoutSalesOrdersInput = {
    where?: Prisma.TransportTypeWhereInput;
    data: Prisma.XOR<Prisma.TransportTypeUpdateWithoutSalesOrdersInput, Prisma.TransportTypeUncheckedUpdateWithoutSalesOrdersInput>;
};
export type TransportTypeUpdateWithoutSalesOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.CustomerTransportTypeUpdateManyWithoutTransportTypeNestedInput;
};
export type TransportTypeUncheckedUpdateWithoutSalesOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.CustomerTransportTypeUncheckedUpdateManyWithoutTransportTypeNestedInput;
};
export type TransportTypeCountOutputType = {
    customers: number;
    salesOrders: number;
};
export type TransportTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | TransportTypeCountOutputTypeCountCustomersArgs;
    salesOrders?: boolean | TransportTypeCountOutputTypeCountSalesOrdersArgs;
};
export type TransportTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type TransportTypeCountOutputTypeCountCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerTransportTypeWhereInput;
};
export type TransportTypeCountOutputTypeCountSalesOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderWhereInput;
};
export type TransportTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customers?: boolean | Prisma.TransportType$customersArgs<ExtArgs>;
    salesOrders?: boolean | Prisma.TransportType$salesOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.TransportTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transportType"]>;
export type TransportTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["transportType"]>;
export type TransportTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["transportType"]>;
export type TransportTypeSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TransportTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["transportType"]>;
export type TransportTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.TransportType$customersArgs<ExtArgs>;
    salesOrders?: boolean | Prisma.TransportType$salesOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.TransportTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TransportTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TransportTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TransportTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TransportType";
    objects: {
        customers: Prisma.$CustomerTransportTypePayload<ExtArgs>[];
        salesOrders: Prisma.$SalesOrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["transportType"]>;
    composites: {};
};
export type TransportTypeGetPayload<S extends boolean | null | undefined | TransportTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransportTypePayload, S>;
export type TransportTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransportTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransportTypeCountAggregateInputType | true;
};
export interface TransportTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TransportType'];
        meta: {
            name: 'TransportType';
        };
    };
    findUnique<T extends TransportTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, TransportTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransportTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransportTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransportTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, TransportTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransportTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransportTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransportTypeFindManyArgs>(args?: Prisma.SelectSubset<T, TransportTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransportTypeCreateArgs>(args: Prisma.SelectSubset<T, TransportTypeCreateArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransportTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, TransportTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransportTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransportTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransportTypeDeleteArgs>(args: Prisma.SelectSubset<T, TransportTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransportTypeUpdateArgs>(args: Prisma.SelectSubset<T, TransportTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransportTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransportTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransportTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, TransportTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransportTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransportTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransportTypeUpsertArgs>(args: Prisma.SelectSubset<T, TransportTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransportTypeCountArgs>(args?: Prisma.Subset<T, TransportTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransportTypeCountAggregateOutputType> : number>;
    aggregate<T extends TransportTypeAggregateArgs>(args: Prisma.Subset<T, TransportTypeAggregateArgs>): Prisma.PrismaPromise<GetTransportTypeAggregateType<T>>;
    groupBy<T extends TransportTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransportTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: TransportTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransportTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransportTypeFieldRefs;
}
export interface Prisma__TransportTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customers<T extends Prisma.TransportType$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransportType$customersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salesOrders<T extends Prisma.TransportType$salesOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransportType$salesOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransportTypeFieldRefs {
    readonly id: Prisma.FieldRef<"TransportType", 'String'>;
    readonly name: Prisma.FieldRef<"TransportType", 'String'>;
    readonly description: Prisma.FieldRef<"TransportType", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TransportType", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TransportType", 'DateTime'>;
}
export type TransportTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    where: Prisma.TransportTypeWhereUniqueInput;
};
export type TransportTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    where: Prisma.TransportTypeWhereUniqueInput;
};
export type TransportTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    where?: Prisma.TransportTypeWhereInput;
    orderBy?: Prisma.TransportTypeOrderByWithRelationInput | Prisma.TransportTypeOrderByWithRelationInput[];
    cursor?: Prisma.TransportTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransportTypeScalarFieldEnum | Prisma.TransportTypeScalarFieldEnum[];
};
export type TransportTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    where?: Prisma.TransportTypeWhereInput;
    orderBy?: Prisma.TransportTypeOrderByWithRelationInput | Prisma.TransportTypeOrderByWithRelationInput[];
    cursor?: Prisma.TransportTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransportTypeScalarFieldEnum | Prisma.TransportTypeScalarFieldEnum[];
};
export type TransportTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    where?: Prisma.TransportTypeWhereInput;
    orderBy?: Prisma.TransportTypeOrderByWithRelationInput | Prisma.TransportTypeOrderByWithRelationInput[];
    cursor?: Prisma.TransportTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransportTypeScalarFieldEnum | Prisma.TransportTypeScalarFieldEnum[];
};
export type TransportTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransportTypeCreateInput, Prisma.TransportTypeUncheckedCreateInput>;
};
export type TransportTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransportTypeCreateManyInput | Prisma.TransportTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransportTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    data: Prisma.TransportTypeCreateManyInput | Prisma.TransportTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransportTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransportTypeUpdateInput, Prisma.TransportTypeUncheckedUpdateInput>;
    where: Prisma.TransportTypeWhereUniqueInput;
};
export type TransportTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransportTypeUpdateManyMutationInput, Prisma.TransportTypeUncheckedUpdateManyInput>;
    where?: Prisma.TransportTypeWhereInput;
    limit?: number;
};
export type TransportTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransportTypeUpdateManyMutationInput, Prisma.TransportTypeUncheckedUpdateManyInput>;
    where?: Prisma.TransportTypeWhereInput;
    limit?: number;
};
export type TransportTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    where: Prisma.TransportTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransportTypeCreateInput, Prisma.TransportTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransportTypeUpdateInput, Prisma.TransportTypeUncheckedUpdateInput>;
};
export type TransportTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
    where: Prisma.TransportTypeWhereUniqueInput;
};
export type TransportTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransportTypeWhereInput;
    limit?: number;
};
export type TransportType$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    include?: Prisma.CustomerTransportTypeInclude<ExtArgs> | null;
    where?: Prisma.CustomerTransportTypeWhereInput;
    orderBy?: Prisma.CustomerTransportTypeOrderByWithRelationInput | Prisma.CustomerTransportTypeOrderByWithRelationInput[];
    cursor?: Prisma.CustomerTransportTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerTransportTypeScalarFieldEnum | Prisma.CustomerTransportTypeScalarFieldEnum[];
};
export type TransportType$salesOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TransportTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.TransportTypeOmit<ExtArgs> | null;
    include?: Prisma.TransportTypeInclude<ExtArgs> | null;
};
