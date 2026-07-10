import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerTransportTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerTransportTypePayload>;
export type AggregateCustomerTransportType = {
    _count: CustomerTransportTypeCountAggregateOutputType | null;
    _min: CustomerTransportTypeMinAggregateOutputType | null;
    _max: CustomerTransportTypeMaxAggregateOutputType | null;
};
export type CustomerTransportTypeMinAggregateOutputType = {
    customerId: string | null;
    transportTypeId: string | null;
};
export type CustomerTransportTypeMaxAggregateOutputType = {
    customerId: string | null;
    transportTypeId: string | null;
};
export type CustomerTransportTypeCountAggregateOutputType = {
    customerId: number;
    transportTypeId: number;
    _all: number;
};
export type CustomerTransportTypeMinAggregateInputType = {
    customerId?: true;
    transportTypeId?: true;
};
export type CustomerTransportTypeMaxAggregateInputType = {
    customerId?: true;
    transportTypeId?: true;
};
export type CustomerTransportTypeCountAggregateInputType = {
    customerId?: true;
    transportTypeId?: true;
    _all?: true;
};
export type CustomerTransportTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerTransportTypeWhereInput;
    orderBy?: Prisma.CustomerTransportTypeOrderByWithRelationInput | Prisma.CustomerTransportTypeOrderByWithRelationInput[];
    cursor?: Prisma.CustomerTransportTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerTransportTypeCountAggregateInputType;
    _min?: CustomerTransportTypeMinAggregateInputType;
    _max?: CustomerTransportTypeMaxAggregateInputType;
};
export type GetCustomerTransportTypeAggregateType<T extends CustomerTransportTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomerTransportType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomerTransportType[P]> : Prisma.GetScalarType<T[P], AggregateCustomerTransportType[P]>;
};
export type CustomerTransportTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerTransportTypeWhereInput;
    orderBy?: Prisma.CustomerTransportTypeOrderByWithAggregationInput | Prisma.CustomerTransportTypeOrderByWithAggregationInput[];
    by: Prisma.CustomerTransportTypeScalarFieldEnum[] | Prisma.CustomerTransportTypeScalarFieldEnum;
    having?: Prisma.CustomerTransportTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerTransportTypeCountAggregateInputType | true;
    _min?: CustomerTransportTypeMinAggregateInputType;
    _max?: CustomerTransportTypeMaxAggregateInputType;
};
export type CustomerTransportTypeGroupByOutputType = {
    customerId: string;
    transportTypeId: string;
    _count: CustomerTransportTypeCountAggregateOutputType | null;
    _min: CustomerTransportTypeMinAggregateOutputType | null;
    _max: CustomerTransportTypeMaxAggregateOutputType | null;
};
export type GetCustomerTransportTypeGroupByPayload<T extends CustomerTransportTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerTransportTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerTransportTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerTransportTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerTransportTypeGroupByOutputType[P]>;
}>>;
export type CustomerTransportTypeWhereInput = {
    AND?: Prisma.CustomerTransportTypeWhereInput | Prisma.CustomerTransportTypeWhereInput[];
    OR?: Prisma.CustomerTransportTypeWhereInput[];
    NOT?: Prisma.CustomerTransportTypeWhereInput | Prisma.CustomerTransportTypeWhereInput[];
    customerId?: Prisma.StringFilter<"CustomerTransportType"> | string;
    transportTypeId?: Prisma.StringFilter<"CustomerTransportType"> | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    transportType?: Prisma.XOR<Prisma.TransportTypeScalarRelationFilter, Prisma.TransportTypeWhereInput>;
};
export type CustomerTransportTypeOrderByWithRelationInput = {
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    transportType?: Prisma.TransportTypeOrderByWithRelationInput;
};
export type CustomerTransportTypeWhereUniqueInput = Prisma.AtLeast<{
    customerId_transportTypeId?: Prisma.CustomerTransportTypeCustomerIdTransportTypeIdCompoundUniqueInput;
    AND?: Prisma.CustomerTransportTypeWhereInput | Prisma.CustomerTransportTypeWhereInput[];
    OR?: Prisma.CustomerTransportTypeWhereInput[];
    NOT?: Prisma.CustomerTransportTypeWhereInput | Prisma.CustomerTransportTypeWhereInput[];
    customerId?: Prisma.StringFilter<"CustomerTransportType"> | string;
    transportTypeId?: Prisma.StringFilter<"CustomerTransportType"> | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    transportType?: Prisma.XOR<Prisma.TransportTypeScalarRelationFilter, Prisma.TransportTypeWhereInput>;
}, "customerId_transportTypeId">;
export type CustomerTransportTypeOrderByWithAggregationInput = {
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
    _count?: Prisma.CustomerTransportTypeCountOrderByAggregateInput;
    _max?: Prisma.CustomerTransportTypeMaxOrderByAggregateInput;
    _min?: Prisma.CustomerTransportTypeMinOrderByAggregateInput;
};
export type CustomerTransportTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerTransportTypeScalarWhereWithAggregatesInput | Prisma.CustomerTransportTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerTransportTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerTransportTypeScalarWhereWithAggregatesInput | Prisma.CustomerTransportTypeScalarWhereWithAggregatesInput[];
    customerId?: Prisma.StringWithAggregatesFilter<"CustomerTransportType"> | string;
    transportTypeId?: Prisma.StringWithAggregatesFilter<"CustomerTransportType"> | string;
};
export type CustomerTransportTypeCreateInput = {
    customer: Prisma.CustomerCreateNestedOneWithoutTransportTypesInput;
    transportType: Prisma.TransportTypeCreateNestedOneWithoutCustomersInput;
};
export type CustomerTransportTypeUncheckedCreateInput = {
    customerId: string;
    transportTypeId: string;
};
export type CustomerTransportTypeUpdateInput = {
    customer?: Prisma.CustomerUpdateOneRequiredWithoutTransportTypesNestedInput;
    transportType?: Prisma.TransportTypeUpdateOneRequiredWithoutCustomersNestedInput;
};
export type CustomerTransportTypeUncheckedUpdateInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerTransportTypeCreateManyInput = {
    customerId: string;
    transportTypeId: string;
};
export type CustomerTransportTypeUpdateManyMutationInput = {};
export type CustomerTransportTypeUncheckedUpdateManyInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerTransportTypeListRelationFilter = {
    every?: Prisma.CustomerTransportTypeWhereInput;
    some?: Prisma.CustomerTransportTypeWhereInput;
    none?: Prisma.CustomerTransportTypeWhereInput;
};
export type CustomerTransportTypeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerTransportTypeCustomerIdTransportTypeIdCompoundUniqueInput = {
    customerId: string;
    transportTypeId: string;
};
export type CustomerTransportTypeCountOrderByAggregateInput = {
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
};
export type CustomerTransportTypeMaxOrderByAggregateInput = {
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
};
export type CustomerTransportTypeMinOrderByAggregateInput = {
    customerId?: Prisma.SortOrder;
    transportTypeId?: Prisma.SortOrder;
};
export type CustomerTransportTypeCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutCustomerInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput> | Prisma.CustomerTransportTypeCreateWithoutCustomerInput[] | Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerTransportTypeCreateOrConnectWithoutCustomerInput | Prisma.CustomerTransportTypeCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerTransportTypeCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
};
export type CustomerTransportTypeUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutCustomerInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput> | Prisma.CustomerTransportTypeCreateWithoutCustomerInput[] | Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerTransportTypeCreateOrConnectWithoutCustomerInput | Prisma.CustomerTransportTypeCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerTransportTypeCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
};
export type CustomerTransportTypeUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutCustomerInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput> | Prisma.CustomerTransportTypeCreateWithoutCustomerInput[] | Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerTransportTypeCreateOrConnectWithoutCustomerInput | Prisma.CustomerTransportTypeCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerTransportTypeUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerTransportTypeUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerTransportTypeCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    disconnect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    delete?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    connect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    update?: Prisma.CustomerTransportTypeUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerTransportTypeUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerTransportTypeUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerTransportTypeUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerTransportTypeScalarWhereInput | Prisma.CustomerTransportTypeScalarWhereInput[];
};
export type CustomerTransportTypeUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutCustomerInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput> | Prisma.CustomerTransportTypeCreateWithoutCustomerInput[] | Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerTransportTypeCreateOrConnectWithoutCustomerInput | Prisma.CustomerTransportTypeCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerTransportTypeUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerTransportTypeUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerTransportTypeCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    disconnect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    delete?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    connect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    update?: Prisma.CustomerTransportTypeUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerTransportTypeUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerTransportTypeUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerTransportTypeUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerTransportTypeScalarWhereInput | Prisma.CustomerTransportTypeScalarWhereInput[];
};
export type CustomerTransportTypeCreateNestedManyWithoutTransportTypeInput = {
    create?: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput> | Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput[] | Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput[];
    connectOrCreate?: Prisma.CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput | Prisma.CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput[];
    createMany?: Prisma.CustomerTransportTypeCreateManyTransportTypeInputEnvelope;
    connect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
};
export type CustomerTransportTypeUncheckedCreateNestedManyWithoutTransportTypeInput = {
    create?: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput> | Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput[] | Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput[];
    connectOrCreate?: Prisma.CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput | Prisma.CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput[];
    createMany?: Prisma.CustomerTransportTypeCreateManyTransportTypeInputEnvelope;
    connect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
};
export type CustomerTransportTypeUpdateManyWithoutTransportTypeNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput> | Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput[] | Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput[];
    connectOrCreate?: Prisma.CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput | Prisma.CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput[];
    upsert?: Prisma.CustomerTransportTypeUpsertWithWhereUniqueWithoutTransportTypeInput | Prisma.CustomerTransportTypeUpsertWithWhereUniqueWithoutTransportTypeInput[];
    createMany?: Prisma.CustomerTransportTypeCreateManyTransportTypeInputEnvelope;
    set?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    disconnect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    delete?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    connect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    update?: Prisma.CustomerTransportTypeUpdateWithWhereUniqueWithoutTransportTypeInput | Prisma.CustomerTransportTypeUpdateWithWhereUniqueWithoutTransportTypeInput[];
    updateMany?: Prisma.CustomerTransportTypeUpdateManyWithWhereWithoutTransportTypeInput | Prisma.CustomerTransportTypeUpdateManyWithWhereWithoutTransportTypeInput[];
    deleteMany?: Prisma.CustomerTransportTypeScalarWhereInput | Prisma.CustomerTransportTypeScalarWhereInput[];
};
export type CustomerTransportTypeUncheckedUpdateManyWithoutTransportTypeNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput> | Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput[] | Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput[];
    connectOrCreate?: Prisma.CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput | Prisma.CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput[];
    upsert?: Prisma.CustomerTransportTypeUpsertWithWhereUniqueWithoutTransportTypeInput | Prisma.CustomerTransportTypeUpsertWithWhereUniqueWithoutTransportTypeInput[];
    createMany?: Prisma.CustomerTransportTypeCreateManyTransportTypeInputEnvelope;
    set?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    disconnect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    delete?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    connect?: Prisma.CustomerTransportTypeWhereUniqueInput | Prisma.CustomerTransportTypeWhereUniqueInput[];
    update?: Prisma.CustomerTransportTypeUpdateWithWhereUniqueWithoutTransportTypeInput | Prisma.CustomerTransportTypeUpdateWithWhereUniqueWithoutTransportTypeInput[];
    updateMany?: Prisma.CustomerTransportTypeUpdateManyWithWhereWithoutTransportTypeInput | Prisma.CustomerTransportTypeUpdateManyWithWhereWithoutTransportTypeInput[];
    deleteMany?: Prisma.CustomerTransportTypeScalarWhereInput | Prisma.CustomerTransportTypeScalarWhereInput[];
};
export type CustomerTransportTypeCreateWithoutCustomerInput = {
    transportType: Prisma.TransportTypeCreateNestedOneWithoutCustomersInput;
};
export type CustomerTransportTypeUncheckedCreateWithoutCustomerInput = {
    transportTypeId: string;
};
export type CustomerTransportTypeCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutCustomerInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput>;
};
export type CustomerTransportTypeCreateManyCustomerInputEnvelope = {
    data: Prisma.CustomerTransportTypeCreateManyCustomerInput | Prisma.CustomerTransportTypeCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CustomerTransportTypeUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerTransportTypeUpdateWithoutCustomerInput, Prisma.CustomerTransportTypeUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutCustomerInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutCustomerInput>;
};
export type CustomerTransportTypeUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerTransportTypeUpdateWithoutCustomerInput, Prisma.CustomerTransportTypeUncheckedUpdateWithoutCustomerInput>;
};
export type CustomerTransportTypeUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CustomerTransportTypeScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerTransportTypeUpdateManyMutationInput, Prisma.CustomerTransportTypeUncheckedUpdateManyWithoutCustomerInput>;
};
export type CustomerTransportTypeScalarWhereInput = {
    AND?: Prisma.CustomerTransportTypeScalarWhereInput | Prisma.CustomerTransportTypeScalarWhereInput[];
    OR?: Prisma.CustomerTransportTypeScalarWhereInput[];
    NOT?: Prisma.CustomerTransportTypeScalarWhereInput | Prisma.CustomerTransportTypeScalarWhereInput[];
    customerId?: Prisma.StringFilter<"CustomerTransportType"> | string;
    transportTypeId?: Prisma.StringFilter<"CustomerTransportType"> | string;
};
export type CustomerTransportTypeCreateWithoutTransportTypeInput = {
    customer: Prisma.CustomerCreateNestedOneWithoutTransportTypesInput;
};
export type CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput = {
    customerId: string;
};
export type CustomerTransportTypeCreateOrConnectWithoutTransportTypeInput = {
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput>;
};
export type CustomerTransportTypeCreateManyTransportTypeInputEnvelope = {
    data: Prisma.CustomerTransportTypeCreateManyTransportTypeInput | Prisma.CustomerTransportTypeCreateManyTransportTypeInput[];
    skipDuplicates?: boolean;
};
export type CustomerTransportTypeUpsertWithWhereUniqueWithoutTransportTypeInput = {
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerTransportTypeUpdateWithoutTransportTypeInput, Prisma.CustomerTransportTypeUncheckedUpdateWithoutTransportTypeInput>;
    create: Prisma.XOR<Prisma.CustomerTransportTypeCreateWithoutTransportTypeInput, Prisma.CustomerTransportTypeUncheckedCreateWithoutTransportTypeInput>;
};
export type CustomerTransportTypeUpdateWithWhereUniqueWithoutTransportTypeInput = {
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerTransportTypeUpdateWithoutTransportTypeInput, Prisma.CustomerTransportTypeUncheckedUpdateWithoutTransportTypeInput>;
};
export type CustomerTransportTypeUpdateManyWithWhereWithoutTransportTypeInput = {
    where: Prisma.CustomerTransportTypeScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerTransportTypeUpdateManyMutationInput, Prisma.CustomerTransportTypeUncheckedUpdateManyWithoutTransportTypeInput>;
};
export type CustomerTransportTypeCreateManyCustomerInput = {
    transportTypeId: string;
};
export type CustomerTransportTypeUpdateWithoutCustomerInput = {
    transportType?: Prisma.TransportTypeUpdateOneRequiredWithoutCustomersNestedInput;
};
export type CustomerTransportTypeUncheckedUpdateWithoutCustomerInput = {
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerTransportTypeUncheckedUpdateManyWithoutCustomerInput = {
    transportTypeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerTransportTypeCreateManyTransportTypeInput = {
    customerId: string;
};
export type CustomerTransportTypeUpdateWithoutTransportTypeInput = {
    customer?: Prisma.CustomerUpdateOneRequiredWithoutTransportTypesNestedInput;
};
export type CustomerTransportTypeUncheckedUpdateWithoutTransportTypeInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerTransportTypeUncheckedUpdateManyWithoutTransportTypeInput = {
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CustomerTransportTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customerId?: boolean;
    transportTypeId?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerTransportType"]>;
export type CustomerTransportTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customerId?: boolean;
    transportTypeId?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerTransportType"]>;
export type CustomerTransportTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customerId?: boolean;
    transportTypeId?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerTransportType"]>;
export type CustomerTransportTypeSelectScalar = {
    customerId?: boolean;
    transportTypeId?: boolean;
};
export type CustomerTransportTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"customerId" | "transportTypeId", ExtArgs["result"]["customerTransportType"]>;
export type CustomerTransportTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
};
export type CustomerTransportTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
};
export type CustomerTransportTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    transportType?: boolean | Prisma.TransportTypeDefaultArgs<ExtArgs>;
};
export type $CustomerTransportTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomerTransportType";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        transportType: Prisma.$TransportTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        customerId: string;
        transportTypeId: string;
    }, ExtArgs["result"]["customerTransportType"]>;
    composites: {};
};
export type CustomerTransportTypeGetPayload<S extends boolean | null | undefined | CustomerTransportTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload, S>;
export type CustomerTransportTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerTransportTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerTransportTypeCountAggregateInputType | true;
};
export interface CustomerTransportTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomerTransportType'];
        meta: {
            name: 'CustomerTransportType';
        };
    };
    findUnique<T extends CustomerTransportTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerTransportTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerTransportTypeClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerTransportTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerTransportTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerTransportTypeClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerTransportTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerTransportTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerTransportTypeClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerTransportTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerTransportTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerTransportTypeClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerTransportTypeFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerTransportTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerTransportTypeCreateArgs>(args: Prisma.SelectSubset<T, CustomerTransportTypeCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerTransportTypeClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerTransportTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerTransportTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerTransportTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerTransportTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerTransportTypeDeleteArgs>(args: Prisma.SelectSubset<T, CustomerTransportTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerTransportTypeClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerTransportTypeUpdateArgs>(args: Prisma.SelectSubset<T, CustomerTransportTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerTransportTypeClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerTransportTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerTransportTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerTransportTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerTransportTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerTransportTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerTransportTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerTransportTypeUpsertArgs>(args: Prisma.SelectSubset<T, CustomerTransportTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerTransportTypeClient<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerTransportTypeCountArgs>(args?: Prisma.Subset<T, CustomerTransportTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerTransportTypeCountAggregateOutputType> : number>;
    aggregate<T extends CustomerTransportTypeAggregateArgs>(args: Prisma.Subset<T, CustomerTransportTypeAggregateArgs>): Prisma.PrismaPromise<GetCustomerTransportTypeAggregateType<T>>;
    groupBy<T extends CustomerTransportTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerTransportTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerTransportTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerTransportTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerTransportTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerTransportTypeFieldRefs;
}
export interface Prisma__CustomerTransportTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transportType<T extends Prisma.TransportTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TransportTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__TransportTypeClient<runtime.Types.Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerTransportTypeFieldRefs {
    readonly customerId: Prisma.FieldRef<"CustomerTransportType", 'String'>;
    readonly transportTypeId: Prisma.FieldRef<"CustomerTransportType", 'String'>;
}
export type CustomerTransportTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    include?: Prisma.CustomerTransportTypeInclude<ExtArgs> | null;
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
};
export type CustomerTransportTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    include?: Prisma.CustomerTransportTypeInclude<ExtArgs> | null;
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
};
export type CustomerTransportTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CustomerTransportTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CustomerTransportTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CustomerTransportTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    include?: Prisma.CustomerTransportTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerTransportTypeCreateInput, Prisma.CustomerTransportTypeUncheckedCreateInput>;
};
export type CustomerTransportTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerTransportTypeCreateManyInput | Prisma.CustomerTransportTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerTransportTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    data: Prisma.CustomerTransportTypeCreateManyInput | Prisma.CustomerTransportTypeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerTransportTypeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerTransportTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    include?: Prisma.CustomerTransportTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerTransportTypeUpdateInput, Prisma.CustomerTransportTypeUncheckedUpdateInput>;
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
};
export type CustomerTransportTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerTransportTypeUpdateManyMutationInput, Prisma.CustomerTransportTypeUncheckedUpdateManyInput>;
    where?: Prisma.CustomerTransportTypeWhereInput;
    limit?: number;
};
export type CustomerTransportTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerTransportTypeUpdateManyMutationInput, Prisma.CustomerTransportTypeUncheckedUpdateManyInput>;
    where?: Prisma.CustomerTransportTypeWhereInput;
    limit?: number;
    include?: Prisma.CustomerTransportTypeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerTransportTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    include?: Prisma.CustomerTransportTypeInclude<ExtArgs> | null;
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerTransportTypeCreateInput, Prisma.CustomerTransportTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerTransportTypeUpdateInput, Prisma.CustomerTransportTypeUncheckedUpdateInput>;
};
export type CustomerTransportTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    include?: Prisma.CustomerTransportTypeInclude<ExtArgs> | null;
    where: Prisma.CustomerTransportTypeWhereUniqueInput;
};
export type CustomerTransportTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerTransportTypeWhereInput;
    limit?: number;
};
export type CustomerTransportTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTransportTypeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTransportTypeOmit<ExtArgs> | null;
    include?: Prisma.CustomerTransportTypeInclude<ExtArgs> | null;
};
