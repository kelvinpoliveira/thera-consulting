import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Customer: "Customer";
    readonly TransportType: "TransportType";
    readonly CustomerTransportType: "CustomerTransportType";
    readonly Item: "Item";
    readonly SalesOrder: "SalesOrder";
    readonly SalesOrderItem: "SalesOrderItem";
    readonly Schedule: "Schedule";
    readonly AuditLog: "AuditLog";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly document: "document";
    readonly email: "email";
    readonly phone: "phone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const TransportTypeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TransportTypeScalarFieldEnum = (typeof TransportTypeScalarFieldEnum)[keyof typeof TransportTypeScalarFieldEnum];
export declare const CustomerTransportTypeScalarFieldEnum: {
    readonly customerId: "customerId";
    readonly transportTypeId: "transportTypeId";
};
export type CustomerTransportTypeScalarFieldEnum = (typeof CustomerTransportTypeScalarFieldEnum)[keyof typeof CustomerTransportTypeScalarFieldEnum];
export declare const ItemScalarFieldEnum: {
    readonly id: "id";
    readonly sku: "sku";
    readonly name: "name";
    readonly description: "description";
    readonly unitPrice: "unitPrice";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum];
export declare const SalesOrderScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly transportTypeId: "transportTypeId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SalesOrderScalarFieldEnum = (typeof SalesOrderScalarFieldEnum)[keyof typeof SalesOrderScalarFieldEnum];
export declare const SalesOrderItemScalarFieldEnum: {
    readonly salesOrderId: "salesOrderId";
    readonly itemId: "itemId";
    readonly quantity: "quantity";
};
export type SalesOrderItemScalarFieldEnum = (typeof SalesOrderItemScalarFieldEnum)[keyof typeof SalesOrderItemScalarFieldEnum];
export declare const ScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly salesOrderId: "salesOrderId";
    readonly deliveryDate: "deliveryDate";
    readonly windowStart: "windowStart";
    readonly windowEnd: "windowEnd";
    readonly confirmed: "confirmed";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly action: "action";
    readonly previousState: "previousState";
    readonly currentState: "currentState";
    readonly salesOrderId: "salesOrderId";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
