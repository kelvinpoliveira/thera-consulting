import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SalesOrderItemModel = runtime.Types.Result.DefaultSelection<Prisma.$SalesOrderItemPayload>;
export type AggregateSalesOrderItem = {
    _count: SalesOrderItemCountAggregateOutputType | null;
    _avg: SalesOrderItemAvgAggregateOutputType | null;
    _sum: SalesOrderItemSumAggregateOutputType | null;
    _min: SalesOrderItemMinAggregateOutputType | null;
    _max: SalesOrderItemMaxAggregateOutputType | null;
};
export type SalesOrderItemAvgAggregateOutputType = {
    quantity: number | null;
};
export type SalesOrderItemSumAggregateOutputType = {
    quantity: number | null;
};
export type SalesOrderItemMinAggregateOutputType = {
    salesOrderId: string | null;
    itemId: string | null;
    quantity: number | null;
};
export type SalesOrderItemMaxAggregateOutputType = {
    salesOrderId: string | null;
    itemId: string | null;
    quantity: number | null;
};
export type SalesOrderItemCountAggregateOutputType = {
    salesOrderId: number;
    itemId: number;
    quantity: number;
    _all: number;
};
export type SalesOrderItemAvgAggregateInputType = {
    quantity?: true;
};
export type SalesOrderItemSumAggregateInputType = {
    quantity?: true;
};
export type SalesOrderItemMinAggregateInputType = {
    salesOrderId?: true;
    itemId?: true;
    quantity?: true;
};
export type SalesOrderItemMaxAggregateInputType = {
    salesOrderId?: true;
    itemId?: true;
    quantity?: true;
};
export type SalesOrderItemCountAggregateInputType = {
    salesOrderId?: true;
    itemId?: true;
    quantity?: true;
    _all?: true;
};
export type SalesOrderItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderItemWhereInput;
    orderBy?: Prisma.SalesOrderItemOrderByWithRelationInput | Prisma.SalesOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.SalesOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SalesOrderItemCountAggregateInputType;
    _avg?: SalesOrderItemAvgAggregateInputType;
    _sum?: SalesOrderItemSumAggregateInputType;
    _min?: SalesOrderItemMinAggregateInputType;
    _max?: SalesOrderItemMaxAggregateInputType;
};
export type GetSalesOrderItemAggregateType<T extends SalesOrderItemAggregateArgs> = {
    [P in keyof T & keyof AggregateSalesOrderItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalesOrderItem[P]> : Prisma.GetScalarType<T[P], AggregateSalesOrderItem[P]>;
};
export type SalesOrderItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderItemWhereInput;
    orderBy?: Prisma.SalesOrderItemOrderByWithAggregationInput | Prisma.SalesOrderItemOrderByWithAggregationInput[];
    by: Prisma.SalesOrderItemScalarFieldEnum[] | Prisma.SalesOrderItemScalarFieldEnum;
    having?: Prisma.SalesOrderItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalesOrderItemCountAggregateInputType | true;
    _avg?: SalesOrderItemAvgAggregateInputType;
    _sum?: SalesOrderItemSumAggregateInputType;
    _min?: SalesOrderItemMinAggregateInputType;
    _max?: SalesOrderItemMaxAggregateInputType;
};
export type SalesOrderItemGroupByOutputType = {
    salesOrderId: string;
    itemId: string;
    quantity: number;
    _count: SalesOrderItemCountAggregateOutputType | null;
    _avg: SalesOrderItemAvgAggregateOutputType | null;
    _sum: SalesOrderItemSumAggregateOutputType | null;
    _min: SalesOrderItemMinAggregateOutputType | null;
    _max: SalesOrderItemMaxAggregateOutputType | null;
};
export type GetSalesOrderItemGroupByPayload<T extends SalesOrderItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalesOrderItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalesOrderItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalesOrderItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalesOrderItemGroupByOutputType[P]>;
}>>;
export type SalesOrderItemWhereInput = {
    AND?: Prisma.SalesOrderItemWhereInput | Prisma.SalesOrderItemWhereInput[];
    OR?: Prisma.SalesOrderItemWhereInput[];
    NOT?: Prisma.SalesOrderItemWhereInput | Prisma.SalesOrderItemWhereInput[];
    salesOrderId?: Prisma.StringFilter<"SalesOrderItem"> | string;
    itemId?: Prisma.StringFilter<"SalesOrderItem"> | string;
    quantity?: Prisma.IntFilter<"SalesOrderItem"> | number;
    salesOrder?: Prisma.XOR<Prisma.SalesOrderScalarRelationFilter, Prisma.SalesOrderWhereInput>;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
};
export type SalesOrderItemOrderByWithRelationInput = {
    salesOrderId?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    salesOrder?: Prisma.SalesOrderOrderByWithRelationInput;
    item?: Prisma.ItemOrderByWithRelationInput;
};
export type SalesOrderItemWhereUniqueInput = Prisma.AtLeast<{
    salesOrderId_itemId?: Prisma.SalesOrderItemSalesOrderIdItemIdCompoundUniqueInput;
    AND?: Prisma.SalesOrderItemWhereInput | Prisma.SalesOrderItemWhereInput[];
    OR?: Prisma.SalesOrderItemWhereInput[];
    NOT?: Prisma.SalesOrderItemWhereInput | Prisma.SalesOrderItemWhereInput[];
    salesOrderId?: Prisma.StringFilter<"SalesOrderItem"> | string;
    itemId?: Prisma.StringFilter<"SalesOrderItem"> | string;
    quantity?: Prisma.IntFilter<"SalesOrderItem"> | number;
    salesOrder?: Prisma.XOR<Prisma.SalesOrderScalarRelationFilter, Prisma.SalesOrderWhereInput>;
    item?: Prisma.XOR<Prisma.ItemScalarRelationFilter, Prisma.ItemWhereInput>;
}, "salesOrderId_itemId">;
export type SalesOrderItemOrderByWithAggregationInput = {
    salesOrderId?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    _count?: Prisma.SalesOrderItemCountOrderByAggregateInput;
    _avg?: Prisma.SalesOrderItemAvgOrderByAggregateInput;
    _max?: Prisma.SalesOrderItemMaxOrderByAggregateInput;
    _min?: Prisma.SalesOrderItemMinOrderByAggregateInput;
    _sum?: Prisma.SalesOrderItemSumOrderByAggregateInput;
};
export type SalesOrderItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalesOrderItemScalarWhereWithAggregatesInput | Prisma.SalesOrderItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalesOrderItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalesOrderItemScalarWhereWithAggregatesInput | Prisma.SalesOrderItemScalarWhereWithAggregatesInput[];
    salesOrderId?: Prisma.StringWithAggregatesFilter<"SalesOrderItem"> | string;
    itemId?: Prisma.StringWithAggregatesFilter<"SalesOrderItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"SalesOrderItem"> | number;
};
export type SalesOrderItemCreateInput = {
    quantity: number;
    salesOrder: Prisma.SalesOrderCreateNestedOneWithoutItemsInput;
    item: Prisma.ItemCreateNestedOneWithoutOrderItemsInput;
};
export type SalesOrderItemUncheckedCreateInput = {
    salesOrderId: string;
    itemId: string;
    quantity: number;
};
export type SalesOrderItemUpdateInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesOrder?: Prisma.SalesOrderUpdateOneRequiredWithoutItemsNestedInput;
    item?: Prisma.ItemUpdateOneRequiredWithoutOrderItemsNestedInput;
};
export type SalesOrderItemUncheckedUpdateInput = {
    salesOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SalesOrderItemCreateManyInput = {
    salesOrderId: string;
    itemId: string;
    quantity: number;
};
export type SalesOrderItemUpdateManyMutationInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SalesOrderItemUncheckedUpdateManyInput = {
    salesOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SalesOrderItemListRelationFilter = {
    every?: Prisma.SalesOrderItemWhereInput;
    some?: Prisma.SalesOrderItemWhereInput;
    none?: Prisma.SalesOrderItemWhereInput;
};
export type SalesOrderItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SalesOrderItemSalesOrderIdItemIdCompoundUniqueInput = {
    salesOrderId: string;
    itemId: string;
};
export type SalesOrderItemCountOrderByAggregateInput = {
    salesOrderId?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type SalesOrderItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type SalesOrderItemMaxOrderByAggregateInput = {
    salesOrderId?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type SalesOrderItemMinOrderByAggregateInput = {
    salesOrderId?: Prisma.SortOrder;
    itemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type SalesOrderItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type SalesOrderItemCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutItemInput, Prisma.SalesOrderItemUncheckedCreateWithoutItemInput> | Prisma.SalesOrderItemCreateWithoutItemInput[] | Prisma.SalesOrderItemUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.SalesOrderItemCreateOrConnectWithoutItemInput | Prisma.SalesOrderItemCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.SalesOrderItemCreateManyItemInputEnvelope;
    connect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
};
export type SalesOrderItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutItemInput, Prisma.SalesOrderItemUncheckedCreateWithoutItemInput> | Prisma.SalesOrderItemCreateWithoutItemInput[] | Prisma.SalesOrderItemUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.SalesOrderItemCreateOrConnectWithoutItemInput | Prisma.SalesOrderItemCreateOrConnectWithoutItemInput[];
    createMany?: Prisma.SalesOrderItemCreateManyItemInputEnvelope;
    connect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
};
export type SalesOrderItemUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutItemInput, Prisma.SalesOrderItemUncheckedCreateWithoutItemInput> | Prisma.SalesOrderItemCreateWithoutItemInput[] | Prisma.SalesOrderItemUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.SalesOrderItemCreateOrConnectWithoutItemInput | Prisma.SalesOrderItemCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.SalesOrderItemUpsertWithWhereUniqueWithoutItemInput | Prisma.SalesOrderItemUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.SalesOrderItemCreateManyItemInputEnvelope;
    set?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    disconnect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    delete?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    connect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    update?: Prisma.SalesOrderItemUpdateWithWhereUniqueWithoutItemInput | Prisma.SalesOrderItemUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.SalesOrderItemUpdateManyWithWhereWithoutItemInput | Prisma.SalesOrderItemUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.SalesOrderItemScalarWhereInput | Prisma.SalesOrderItemScalarWhereInput[];
};
export type SalesOrderItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutItemInput, Prisma.SalesOrderItemUncheckedCreateWithoutItemInput> | Prisma.SalesOrderItemCreateWithoutItemInput[] | Prisma.SalesOrderItemUncheckedCreateWithoutItemInput[];
    connectOrCreate?: Prisma.SalesOrderItemCreateOrConnectWithoutItemInput | Prisma.SalesOrderItemCreateOrConnectWithoutItemInput[];
    upsert?: Prisma.SalesOrderItemUpsertWithWhereUniqueWithoutItemInput | Prisma.SalesOrderItemUpsertWithWhereUniqueWithoutItemInput[];
    createMany?: Prisma.SalesOrderItemCreateManyItemInputEnvelope;
    set?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    disconnect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    delete?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    connect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    update?: Prisma.SalesOrderItemUpdateWithWhereUniqueWithoutItemInput | Prisma.SalesOrderItemUpdateWithWhereUniqueWithoutItemInput[];
    updateMany?: Prisma.SalesOrderItemUpdateManyWithWhereWithoutItemInput | Prisma.SalesOrderItemUpdateManyWithWhereWithoutItemInput[];
    deleteMany?: Prisma.SalesOrderItemScalarWhereInput | Prisma.SalesOrderItemScalarWhereInput[];
};
export type SalesOrderItemCreateNestedManyWithoutSalesOrderInput = {
    create?: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutSalesOrderInput, Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput> | Prisma.SalesOrderItemCreateWithoutSalesOrderInput[] | Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput[];
    connectOrCreate?: Prisma.SalesOrderItemCreateOrConnectWithoutSalesOrderInput | Prisma.SalesOrderItemCreateOrConnectWithoutSalesOrderInput[];
    createMany?: Prisma.SalesOrderItemCreateManySalesOrderInputEnvelope;
    connect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
};
export type SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput = {
    create?: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutSalesOrderInput, Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput> | Prisma.SalesOrderItemCreateWithoutSalesOrderInput[] | Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput[];
    connectOrCreate?: Prisma.SalesOrderItemCreateOrConnectWithoutSalesOrderInput | Prisma.SalesOrderItemCreateOrConnectWithoutSalesOrderInput[];
    createMany?: Prisma.SalesOrderItemCreateManySalesOrderInputEnvelope;
    connect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
};
export type SalesOrderItemUpdateManyWithoutSalesOrderNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutSalesOrderInput, Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput> | Prisma.SalesOrderItemCreateWithoutSalesOrderInput[] | Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput[];
    connectOrCreate?: Prisma.SalesOrderItemCreateOrConnectWithoutSalesOrderInput | Prisma.SalesOrderItemCreateOrConnectWithoutSalesOrderInput[];
    upsert?: Prisma.SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput | Prisma.SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput[];
    createMany?: Prisma.SalesOrderItemCreateManySalesOrderInputEnvelope;
    set?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    disconnect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    delete?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    connect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    update?: Prisma.SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput | Prisma.SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput[];
    updateMany?: Prisma.SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput | Prisma.SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput[];
    deleteMany?: Prisma.SalesOrderItemScalarWhereInput | Prisma.SalesOrderItemScalarWhereInput[];
};
export type SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput = {
    create?: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutSalesOrderInput, Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput> | Prisma.SalesOrderItemCreateWithoutSalesOrderInput[] | Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput[];
    connectOrCreate?: Prisma.SalesOrderItemCreateOrConnectWithoutSalesOrderInput | Prisma.SalesOrderItemCreateOrConnectWithoutSalesOrderInput[];
    upsert?: Prisma.SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput | Prisma.SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput[];
    createMany?: Prisma.SalesOrderItemCreateManySalesOrderInputEnvelope;
    set?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    disconnect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    delete?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    connect?: Prisma.SalesOrderItemWhereUniqueInput | Prisma.SalesOrderItemWhereUniqueInput[];
    update?: Prisma.SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput | Prisma.SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput[];
    updateMany?: Prisma.SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput | Prisma.SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput[];
    deleteMany?: Prisma.SalesOrderItemScalarWhereInput | Prisma.SalesOrderItemScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SalesOrderItemCreateWithoutItemInput = {
    quantity: number;
    salesOrder: Prisma.SalesOrderCreateNestedOneWithoutItemsInput;
};
export type SalesOrderItemUncheckedCreateWithoutItemInput = {
    salesOrderId: string;
    quantity: number;
};
export type SalesOrderItemCreateOrConnectWithoutItemInput = {
    where: Prisma.SalesOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutItemInput, Prisma.SalesOrderItemUncheckedCreateWithoutItemInput>;
};
export type SalesOrderItemCreateManyItemInputEnvelope = {
    data: Prisma.SalesOrderItemCreateManyItemInput | Prisma.SalesOrderItemCreateManyItemInput[];
    skipDuplicates?: boolean;
};
export type SalesOrderItemUpsertWithWhereUniqueWithoutItemInput = {
    where: Prisma.SalesOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalesOrderItemUpdateWithoutItemInput, Prisma.SalesOrderItemUncheckedUpdateWithoutItemInput>;
    create: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutItemInput, Prisma.SalesOrderItemUncheckedCreateWithoutItemInput>;
};
export type SalesOrderItemUpdateWithWhereUniqueWithoutItemInput = {
    where: Prisma.SalesOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalesOrderItemUpdateWithoutItemInput, Prisma.SalesOrderItemUncheckedUpdateWithoutItemInput>;
};
export type SalesOrderItemUpdateManyWithWhereWithoutItemInput = {
    where: Prisma.SalesOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.SalesOrderItemUpdateManyMutationInput, Prisma.SalesOrderItemUncheckedUpdateManyWithoutItemInput>;
};
export type SalesOrderItemScalarWhereInput = {
    AND?: Prisma.SalesOrderItemScalarWhereInput | Prisma.SalesOrderItemScalarWhereInput[];
    OR?: Prisma.SalesOrderItemScalarWhereInput[];
    NOT?: Prisma.SalesOrderItemScalarWhereInput | Prisma.SalesOrderItemScalarWhereInput[];
    salesOrderId?: Prisma.StringFilter<"SalesOrderItem"> | string;
    itemId?: Prisma.StringFilter<"SalesOrderItem"> | string;
    quantity?: Prisma.IntFilter<"SalesOrderItem"> | number;
};
export type SalesOrderItemCreateWithoutSalesOrderInput = {
    quantity: number;
    item: Prisma.ItemCreateNestedOneWithoutOrderItemsInput;
};
export type SalesOrderItemUncheckedCreateWithoutSalesOrderInput = {
    itemId: string;
    quantity: number;
};
export type SalesOrderItemCreateOrConnectWithoutSalesOrderInput = {
    where: Prisma.SalesOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutSalesOrderInput, Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput>;
};
export type SalesOrderItemCreateManySalesOrderInputEnvelope = {
    data: Prisma.SalesOrderItemCreateManySalesOrderInput | Prisma.SalesOrderItemCreateManySalesOrderInput[];
    skipDuplicates?: boolean;
};
export type SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput = {
    where: Prisma.SalesOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalesOrderItemUpdateWithoutSalesOrderInput, Prisma.SalesOrderItemUncheckedUpdateWithoutSalesOrderInput>;
    create: Prisma.XOR<Prisma.SalesOrderItemCreateWithoutSalesOrderInput, Prisma.SalesOrderItemUncheckedCreateWithoutSalesOrderInput>;
};
export type SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput = {
    where: Prisma.SalesOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalesOrderItemUpdateWithoutSalesOrderInput, Prisma.SalesOrderItemUncheckedUpdateWithoutSalesOrderInput>;
};
export type SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput = {
    where: Prisma.SalesOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.SalesOrderItemUpdateManyMutationInput, Prisma.SalesOrderItemUncheckedUpdateManyWithoutSalesOrderInput>;
};
export type SalesOrderItemCreateManyItemInput = {
    salesOrderId: string;
    quantity: number;
};
export type SalesOrderItemUpdateWithoutItemInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    salesOrder?: Prisma.SalesOrderUpdateOneRequiredWithoutItemsNestedInput;
};
export type SalesOrderItemUncheckedUpdateWithoutItemInput = {
    salesOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SalesOrderItemUncheckedUpdateManyWithoutItemInput = {
    salesOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SalesOrderItemCreateManySalesOrderInput = {
    itemId: string;
    quantity: number;
};
export type SalesOrderItemUpdateWithoutSalesOrderInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    item?: Prisma.ItemUpdateOneRequiredWithoutOrderItemsNestedInput;
};
export type SalesOrderItemUncheckedUpdateWithoutSalesOrderInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SalesOrderItemUncheckedUpdateManyWithoutSalesOrderInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SalesOrderItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    salesOrderId?: boolean;
    itemId?: boolean;
    quantity?: boolean;
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salesOrderItem"]>;
export type SalesOrderItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    salesOrderId?: boolean;
    itemId?: boolean;
    quantity?: boolean;
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salesOrderItem"]>;
export type SalesOrderItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    salesOrderId?: boolean;
    itemId?: boolean;
    quantity?: boolean;
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salesOrderItem"]>;
export type SalesOrderItemSelectScalar = {
    salesOrderId?: boolean;
    itemId?: boolean;
    quantity?: boolean;
};
export type SalesOrderItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"salesOrderId" | "itemId" | "quantity", ExtArgs["result"]["salesOrderItem"]>;
export type SalesOrderItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
};
export type SalesOrderItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
};
export type SalesOrderItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    salesOrder?: boolean | Prisma.SalesOrderDefaultArgs<ExtArgs>;
    item?: boolean | Prisma.ItemDefaultArgs<ExtArgs>;
};
export type $SalesOrderItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalesOrderItem";
    objects: {
        salesOrder: Prisma.$SalesOrderPayload<ExtArgs>;
        item: Prisma.$ItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        salesOrderId: string;
        itemId: string;
        quantity: number;
    }, ExtArgs["result"]["salesOrderItem"]>;
    composites: {};
};
export type SalesOrderItemGetPayload<S extends boolean | null | undefined | SalesOrderItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload, S>;
export type SalesOrderItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalesOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalesOrderItemCountAggregateInputType | true;
};
export interface SalesOrderItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalesOrderItem'];
        meta: {
            name: 'SalesOrderItem';
        };
    };
    findUnique<T extends SalesOrderItemFindUniqueArgs>(args: Prisma.SelectSubset<T, SalesOrderItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalesOrderItemClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SalesOrderItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalesOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesOrderItemClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SalesOrderItemFindFirstArgs>(args?: Prisma.SelectSubset<T, SalesOrderItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalesOrderItemClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SalesOrderItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalesOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesOrderItemClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SalesOrderItemFindManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SalesOrderItemCreateArgs>(args: Prisma.SelectSubset<T, SalesOrderItemCreateArgs<ExtArgs>>): Prisma.Prisma__SalesOrderItemClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SalesOrderItemCreateManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SalesOrderItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalesOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SalesOrderItemDeleteArgs>(args: Prisma.SelectSubset<T, SalesOrderItemDeleteArgs<ExtArgs>>): Prisma.Prisma__SalesOrderItemClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SalesOrderItemUpdateArgs>(args: Prisma.SelectSubset<T, SalesOrderItemUpdateArgs<ExtArgs>>): Prisma.Prisma__SalesOrderItemClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SalesOrderItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalesOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SalesOrderItemUpdateManyArgs>(args: Prisma.SelectSubset<T, SalesOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SalesOrderItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalesOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SalesOrderItemUpsertArgs>(args: Prisma.SelectSubset<T, SalesOrderItemUpsertArgs<ExtArgs>>): Prisma.Prisma__SalesOrderItemClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SalesOrderItemCountArgs>(args?: Prisma.Subset<T, SalesOrderItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalesOrderItemCountAggregateOutputType> : number>;
    aggregate<T extends SalesOrderItemAggregateArgs>(args: Prisma.Subset<T, SalesOrderItemAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderItemAggregateType<T>>;
    groupBy<T extends SalesOrderItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalesOrderItemGroupByArgs['orderBy'];
    } : {
        orderBy?: SalesOrderItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalesOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SalesOrderItemFieldRefs;
}
export interface Prisma__SalesOrderItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    salesOrder<T extends Prisma.SalesOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__SalesOrderClient<runtime.Types.Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    item<T extends Prisma.ItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ItemDefaultArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SalesOrderItemFieldRefs {
    readonly salesOrderId: Prisma.FieldRef<"SalesOrderItem", 'String'>;
    readonly itemId: Prisma.FieldRef<"SalesOrderItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"SalesOrderItem", 'Int'>;
}
export type SalesOrderItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderItemInclude<ExtArgs> | null;
    where: Prisma.SalesOrderItemWhereUniqueInput;
};
export type SalesOrderItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderItemInclude<ExtArgs> | null;
    where: Prisma.SalesOrderItemWhereUniqueInput;
};
export type SalesOrderItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SalesOrderItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SalesOrderItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SalesOrderItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalesOrderItemCreateInput, Prisma.SalesOrderItemUncheckedCreateInput>;
};
export type SalesOrderItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SalesOrderItemCreateManyInput | Prisma.SalesOrderItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SalesOrderItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    data: Prisma.SalesOrderItemCreateManyInput | Prisma.SalesOrderItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SalesOrderItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SalesOrderItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalesOrderItemUpdateInput, Prisma.SalesOrderItemUncheckedUpdateInput>;
    where: Prisma.SalesOrderItemWhereUniqueInput;
};
export type SalesOrderItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SalesOrderItemUpdateManyMutationInput, Prisma.SalesOrderItemUncheckedUpdateManyInput>;
    where?: Prisma.SalesOrderItemWhereInput;
    limit?: number;
};
export type SalesOrderItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SalesOrderItemUpdateManyMutationInput, Prisma.SalesOrderItemUncheckedUpdateManyInput>;
    where?: Prisma.SalesOrderItemWhereInput;
    limit?: number;
    include?: Prisma.SalesOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SalesOrderItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderItemInclude<ExtArgs> | null;
    where: Prisma.SalesOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesOrderItemCreateInput, Prisma.SalesOrderItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SalesOrderItemUpdateInput, Prisma.SalesOrderItemUncheckedUpdateInput>;
};
export type SalesOrderItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderItemInclude<ExtArgs> | null;
    where: Prisma.SalesOrderItemWhereUniqueInput;
};
export type SalesOrderItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesOrderItemWhereInput;
    limit?: number;
};
export type SalesOrderItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SalesOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.SalesOrderItemOmit<ExtArgs> | null;
    include?: Prisma.SalesOrderItemInclude<ExtArgs> | null;
};
