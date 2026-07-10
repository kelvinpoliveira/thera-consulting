import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerPayload>;
export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type CustomerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    document: string | null;
    email: string | null;
    phone: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    document: string | null;
    email: string | null;
    phone: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomerCountAggregateOutputType = {
    id: number;
    name: number;
    document: number;
    email: number;
    phone: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CustomerMinAggregateInputType = {
    id?: true;
    name?: true;
    document?: true;
    email?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomerMaxAggregateInputType = {
    id?: true;
    name?: true;
    document?: true;
    email?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomerCountAggregateInputType = {
    id?: true;
    name?: true;
    document?: true;
    email?: true;
    phone?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CustomerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerCountAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer[P]> : Prisma.GetScalarType<T[P], AggregateCustomer[P]>;
};
export type CustomerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithAggregationInput | Prisma.CustomerOrderByWithAggregationInput[];
    by: Prisma.CustomerScalarFieldEnum[] | Prisma.CustomerScalarFieldEnum;
    having?: Prisma.CustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type CustomerGroupByOutputType = {
    id: string;
    name: string;
    document: string;
    email: string | null;
    phone: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]>;
}>>;
export type CustomerWhereInput = {
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    id?: Prisma.StringFilter<"Customer"> | string;
    name?: Prisma.StringFilter<"Customer"> | string;
    document?: Prisma.StringFilter<"Customer"> | string;
    email?: Prisma.StringNullableFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    transportTypes?: Prisma.CustomerTransportTypeListRelationFilter;
    salesOrders?: Prisma.SalesOrderListRelationFilter;
};
export type CustomerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    transportTypes?: Prisma.CustomerTransportTypeOrderByRelationAggregateInput;
    salesOrders?: Prisma.SalesOrderOrderByRelationAggregateInput;
};
export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    document?: string;
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    name?: Prisma.StringFilter<"Customer"> | string;
    email?: Prisma.StringNullableFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    transportTypes?: Prisma.CustomerTransportTypeListRelationFilter;
    salesOrders?: Prisma.SalesOrderListRelationFilter;
}, "id" | "document">;
export type CustomerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerCountOrderByAggregateInput;
    _max?: Prisma.CustomerMaxOrderByAggregateInput;
    _min?: Prisma.CustomerMinOrderByAggregateInput;
};
export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    document?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
};
export type CustomerCreateInput = {
    id?: string;
    name: string;
    document: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transportTypes?: Prisma.CustomerTransportTypeCreateNestedManyWithoutCustomerInput;
    salesOrders?: Prisma.SalesOrderCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateInput = {
    id?: string;
    name: string;
    document: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transportTypes?: Prisma.CustomerTransportTypeUncheckedCreateNestedManyWithoutCustomerInput;
    salesOrders?: Prisma.SalesOrderUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    document?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transportTypes?: Prisma.CustomerTransportTypeUpdateManyWithoutCustomerNestedInput;
    salesOrders?: Prisma.SalesOrderUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    document?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transportTypes?: Prisma.CustomerTransportTypeUncheckedUpdateManyWithoutCustomerNestedInput;
    salesOrders?: Prisma.SalesOrderUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyInput = {
    id?: string;
    name: string;
    document: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    document?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    document?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput;
    isNot?: Prisma.CustomerWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type CustomerCreateNestedOneWithoutTransportTypesInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutTransportTypesInput, Prisma.CustomerUncheckedCreateWithoutTransportTypesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutTransportTypesInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutTransportTypesNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutTransportTypesInput, Prisma.CustomerUncheckedCreateWithoutTransportTypesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutTransportTypesInput;
    upsert?: Prisma.CustomerUpsertWithoutTransportTypesInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutTransportTypesInput, Prisma.CustomerUpdateWithoutTransportTypesInput>, Prisma.CustomerUncheckedUpdateWithoutTransportTypesInput>;
};
export type CustomerCreateNestedOneWithoutSalesOrdersInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutSalesOrdersInput, Prisma.CustomerUncheckedCreateWithoutSalesOrdersInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutSalesOrdersInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutSalesOrdersInput, Prisma.CustomerUncheckedCreateWithoutSalesOrdersInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutSalesOrdersInput;
    upsert?: Prisma.CustomerUpsertWithoutSalesOrdersInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutSalesOrdersInput, Prisma.CustomerUpdateWithoutSalesOrdersInput>, Prisma.CustomerUncheckedUpdateWithoutSalesOrdersInput>;
};
export type CustomerCreateWithoutTransportTypesInput = {
    id?: string;
    name: string;
    document: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salesOrders?: Prisma.SalesOrderCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutTransportTypesInput = {
    id?: string;
    name: string;
    document: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    salesOrders?: Prisma.SalesOrderUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutTransportTypesInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutTransportTypesInput, Prisma.CustomerUncheckedCreateWithoutTransportTypesInput>;
};
export type CustomerUpsertWithoutTransportTypesInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutTransportTypesInput, Prisma.CustomerUncheckedUpdateWithoutTransportTypesInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutTransportTypesInput, Prisma.CustomerUncheckedCreateWithoutTransportTypesInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutTransportTypesInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutTransportTypesInput, Prisma.CustomerUncheckedUpdateWithoutTransportTypesInput>;
};
export type CustomerUpdateWithoutTransportTypesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    document?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salesOrders?: Prisma.SalesOrderUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutTransportTypesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    document?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salesOrders?: Prisma.SalesOrderUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutSalesOrdersInput = {
    id?: string;
    name: string;
    document: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transportTypes?: Prisma.CustomerTransportTypeCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutSalesOrdersInput = {
    id?: string;
    name: string;
    document: string;
    email?: string | null;
    phone?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transportTypes?: Prisma.CustomerTransportTypeUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutSalesOrdersInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutSalesOrdersInput, Prisma.CustomerUncheckedCreateWithoutSalesOrdersInput>;
};
export type CustomerUpsertWithoutSalesOrdersInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutSalesOrdersInput, Prisma.CustomerUncheckedUpdateWithoutSalesOrdersInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutSalesOrdersInput, Prisma.CustomerUncheckedCreateWithoutSalesOrdersInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutSalesOrdersInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutSalesOrdersInput, Prisma.CustomerUncheckedUpdateWithoutSalesOrdersInput>;
};
export type CustomerUpdateWithoutSalesOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    document?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transportTypes?: Prisma.CustomerTransportTypeUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutSalesOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    document?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transportTypes?: Prisma.CustomerTransportTypeUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCountOutputType = {
    transportTypes: number;
    salesOrders: number;
};
export type CustomerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transportTypes?: boolean | CustomerCountOutputTypeCountTransportTypesArgs;
    salesOrders?: boolean | CustomerCountOutputTypeCountSalesOrdersArgs;
};
export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomerCountOutputTypeCountTransportTypesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerTransportTypeWhereInput;
};
export type CustomerCountOutputTypeCountSalesOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderWhereInput;
};
export type CustomerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    document?: boolean;
    email?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    transportTypes?: boolean | Prisma.Customer$transportTypesArgs<ExtArgs>;
    salesOrders?: boolean | Prisma.Customer$salesOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    document?: boolean;
    email?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    document?: boolean;
    email?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectScalar = {
    id?: boolean;
    name?: boolean;
    document?: boolean;
    email?: boolean;
    phone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CustomerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "document" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>;
export type CustomerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transportTypes?: boolean | Prisma.Customer$transportTypesArgs<ExtArgs>;
    salesOrders?: boolean | Prisma.Customer$salesOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CustomerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CustomerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Customer";
    objects: {
        transportTypes: Prisma.$CustomerTransportTypePayload<ExtArgs>[];
        salesOrders: Prisma.$SalesOrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        document: string;
        email: string | null;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["customer"]>;
    composites: {};
};
export type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerPayload, S>;
export type CustomerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
};
export interface CustomerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Customer'];
        meta: {
            name: 'Customer';
        };
    };
    findUnique<T extends CustomerFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerCreateArgs>(args: Prisma.SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerDeleteArgs>(args: Prisma.SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerUpdateArgs>(args: Prisma.SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerUpsertArgs>(args: Prisma.SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerCountArgs>(args?: Prisma.Subset<T, CustomerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAggregateArgs>(args: Prisma.Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;
    groupBy<T extends CustomerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerFieldRefs;
}
export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transportTypes<T extends Prisma.Customer$transportTypesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$transportTypesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTransportTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salesOrders<T extends Prisma.Customer$salesOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$salesOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerFieldRefs {
    readonly id: Prisma.FieldRef<"Customer", 'String'>;
    readonly name: Prisma.FieldRef<"Customer", 'String'>;
    readonly document: Prisma.FieldRef<"Customer", 'String'>;
    readonly email: Prisma.FieldRef<"Customer", 'String'>;
    readonly phone: Prisma.FieldRef<"Customer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Customer", 'DateTime'>;
}
export type CustomerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
};
export type CustomerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type CustomerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type CustomerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
};
export type CustomerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type Customer$transportTypesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Customer$salesOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CustomerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
};
