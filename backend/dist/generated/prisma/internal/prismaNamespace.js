import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Customer: 'Customer',
    TransportType: 'TransportType',
    CustomerTransportType: 'CustomerTransportType',
    Item: 'Item',
    SalesOrder: 'SalesOrder',
    SalesOrderItem: 'SalesOrderItem',
    Schedule: 'Schedule',
    AuditLog: 'AuditLog',
    User: 'User'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const CustomerScalarFieldEnum = {
    id: 'id',
    name: 'name',
    document: 'document',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const TransportTypeScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CustomerTransportTypeScalarFieldEnum = {
    customerId: 'customerId',
    transportTypeId: 'transportTypeId'
};
export const ItemScalarFieldEnum = {
    id: 'id',
    sku: 'sku',
    name: 'name',
    description: 'description',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SalesOrderScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    transportTypeId: 'transportTypeId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SalesOrderItemScalarFieldEnum = {
    salesOrderId: 'salesOrderId',
    itemId: 'itemId',
    quantity: 'quantity'
};
export const ScheduleScalarFieldEnum = {
    id: 'id',
    salesOrderId: 'salesOrderId',
    deliveryDate: 'deliveryDate',
    windowStart: 'windowStart',
    windowEnd: 'windowEnd',
    confirmed: 'confirmed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    previousState: 'previousState',
    currentState: 'currentState',
    salesOrderId: 'salesOrderId',
    createdAt: 'createdAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map