import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.2.0
 * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly ServiceType: "ServiceType";
    readonly Service: "Service";
    readonly Booking: "Booking";
    readonly MultiBooking: "MultiBooking";
    readonly Invoice: "Invoice";
    readonly MainPDF: "MainPDF";
    readonly Product: "Product";
    readonly Order: "Order";
    readonly Advance: "Advance";
    readonly Complaint: "Complaint";
    readonly Ads: "Ads";
    readonly Team: "Team";
    readonly Client: "Client";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "serviceType" | "service" | "booking" | "multiBooking" | "invoice" | "mainPDF" | "product" | "order" | "advance" | "complaint" | "ads" | "team" | "client";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        ServiceType: {
            payload: Prisma.$ServiceTypePayload<ExtArgs>;
            fields: Prisma.ServiceTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServiceTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServiceTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload>;
                };
                findFirst: {
                    args: Prisma.ServiceTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServiceTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload>;
                };
                findMany: {
                    args: Prisma.ServiceTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload>[];
                };
                create: {
                    args: Prisma.ServiceTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload>;
                };
                createMany: {
                    args: Prisma.ServiceTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ServiceTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload>;
                };
                update: {
                    args: Prisma.ServiceTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload>;
                };
                deleteMany: {
                    args: Prisma.ServiceTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServiceTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ServiceTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceTypePayload>;
                };
                aggregate: {
                    args: Prisma.ServiceTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateServiceType>;
                };
                groupBy: {
                    args: Prisma.ServiceTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServiceTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceTypeCountAggregateOutputType> | number;
                };
            };
        };
        Service: {
            payload: Prisma.$ServicePayload<ExtArgs>;
            fields: Prisma.ServiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findFirst: {
                    args: Prisma.ServiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findMany: {
                    args: Prisma.ServiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                create: {
                    args: Prisma.ServiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                createMany: {
                    args: Prisma.ServiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ServiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                update: {
                    args: Prisma.ServiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                deleteMany: {
                    args: Prisma.ServiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ServiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                aggregate: {
                    args: Prisma.ServiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateService>;
                };
                groupBy: {
                    args: Prisma.ServiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceCountAggregateOutputType> | number;
                };
            };
        };
        Booking: {
            payload: Prisma.$BookingPayload<ExtArgs>;
            fields: Prisma.BookingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload>;
                };
                findFirst: {
                    args: Prisma.BookingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload>;
                };
                findMany: {
                    args: Prisma.BookingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload>[];
                };
                create: {
                    args: Prisma.BookingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload>;
                };
                createMany: {
                    args: Prisma.BookingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BookingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload>;
                };
                update: {
                    args: Prisma.BookingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload>;
                };
                deleteMany: {
                    args: Prisma.BookingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BookingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookingPayload>;
                };
                aggregate: {
                    args: Prisma.BookingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBooking>;
                };
                groupBy: {
                    args: Prisma.BookingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookingCountAggregateOutputType> | number;
                };
            };
        };
        MultiBooking: {
            payload: Prisma.$MultiBookingPayload<ExtArgs>;
            fields: Prisma.MultiBookingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MultiBookingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MultiBookingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload>;
                };
                findFirst: {
                    args: Prisma.MultiBookingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MultiBookingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload>;
                };
                findMany: {
                    args: Prisma.MultiBookingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload>[];
                };
                create: {
                    args: Prisma.MultiBookingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload>;
                };
                createMany: {
                    args: Prisma.MultiBookingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MultiBookingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload>;
                };
                update: {
                    args: Prisma.MultiBookingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload>;
                };
                deleteMany: {
                    args: Prisma.MultiBookingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MultiBookingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MultiBookingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MultiBookingPayload>;
                };
                aggregate: {
                    args: Prisma.MultiBookingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMultiBooking>;
                };
                groupBy: {
                    args: Prisma.MultiBookingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MultiBookingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MultiBookingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MultiBookingCountAggregateOutputType> | number;
                };
            };
        };
        Invoice: {
            payload: Prisma.$InvoicePayload<ExtArgs>;
            fields: Prisma.InvoiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvoiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                findFirst: {
                    args: Prisma.InvoiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                findMany: {
                    args: Prisma.InvoiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>[];
                };
                create: {
                    args: Prisma.InvoiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                createMany: {
                    args: Prisma.InvoiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.InvoiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                update: {
                    args: Prisma.InvoiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                deleteMany: {
                    args: Prisma.InvoiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvoiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.InvoiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvoicePayload>;
                };
                aggregate: {
                    args: Prisma.InvoiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvoice>;
                };
                groupBy: {
                    args: Prisma.InvoiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvoiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoiceCountAggregateOutputType> | number;
                };
            };
        };
        MainPDF: {
            payload: Prisma.$MainPDFPayload<ExtArgs>;
            fields: Prisma.MainPDFFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MainPDFFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MainPDFFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload>;
                };
                findFirst: {
                    args: Prisma.MainPDFFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MainPDFFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload>;
                };
                findMany: {
                    args: Prisma.MainPDFFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload>[];
                };
                create: {
                    args: Prisma.MainPDFCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload>;
                };
                createMany: {
                    args: Prisma.MainPDFCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MainPDFDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload>;
                };
                update: {
                    args: Prisma.MainPDFUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload>;
                };
                deleteMany: {
                    args: Prisma.MainPDFDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MainPDFUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MainPDFUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MainPDFPayload>;
                };
                aggregate: {
                    args: Prisma.MainPDFAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMainPDF>;
                };
                groupBy: {
                    args: Prisma.MainPDFGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MainPDFGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MainPDFCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MainPDFCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        Advance: {
            payload: Prisma.$AdvancePayload<ExtArgs>;
            fields: Prisma.AdvanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdvanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdvanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload>;
                };
                findFirst: {
                    args: Prisma.AdvanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdvanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload>;
                };
                findMany: {
                    args: Prisma.AdvanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload>[];
                };
                create: {
                    args: Prisma.AdvanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload>;
                };
                createMany: {
                    args: Prisma.AdvanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AdvanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload>;
                };
                update: {
                    args: Prisma.AdvanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload>;
                };
                deleteMany: {
                    args: Prisma.AdvanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdvanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AdvanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvancePayload>;
                };
                aggregate: {
                    args: Prisma.AdvanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdvance>;
                };
                groupBy: {
                    args: Prisma.AdvanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdvanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdvanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdvanceCountAggregateOutputType> | number;
                };
            };
        };
        Complaint: {
            payload: Prisma.$ComplaintPayload<ExtArgs>;
            fields: Prisma.ComplaintFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ComplaintFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ComplaintFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                findFirst: {
                    args: Prisma.ComplaintFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ComplaintFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                findMany: {
                    args: Prisma.ComplaintFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>[];
                };
                create: {
                    args: Prisma.ComplaintCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                createMany: {
                    args: Prisma.ComplaintCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ComplaintDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                update: {
                    args: Prisma.ComplaintUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                deleteMany: {
                    args: Prisma.ComplaintDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ComplaintUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ComplaintUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                aggregate: {
                    args: Prisma.ComplaintAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComplaint>;
                };
                groupBy: {
                    args: Prisma.ComplaintGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComplaintGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ComplaintCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComplaintCountAggregateOutputType> | number;
                };
            };
        };
        Ads: {
            payload: Prisma.$AdsPayload<ExtArgs>;
            fields: Prisma.AdsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload>;
                };
                findFirst: {
                    args: Prisma.AdsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload>;
                };
                findMany: {
                    args: Prisma.AdsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload>[];
                };
                create: {
                    args: Prisma.AdsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload>;
                };
                createMany: {
                    args: Prisma.AdsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AdsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload>;
                };
                update: {
                    args: Prisma.AdsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload>;
                };
                deleteMany: {
                    args: Prisma.AdsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AdsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdsPayload>;
                };
                aggregate: {
                    args: Prisma.AdsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAds>;
                };
                groupBy: {
                    args: Prisma.AdsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdsCountAggregateOutputType> | number;
                };
            };
        };
        Team: {
            payload: Prisma.$TeamPayload<ExtArgs>;
            fields: Prisma.TeamFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeamFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                findFirst: {
                    args: Prisma.TeamFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                findMany: {
                    args: Prisma.TeamFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>[];
                };
                create: {
                    args: Prisma.TeamCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                createMany: {
                    args: Prisma.TeamCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.TeamDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                update: {
                    args: Prisma.TeamUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                deleteMany: {
                    args: Prisma.TeamDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeamUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.TeamUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeamPayload>;
                };
                aggregate: {
                    args: Prisma.TeamAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeam>;
                };
                groupBy: {
                    args: Prisma.TeamGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeamCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeamCountAggregateOutputType> | number;
                };
            };
        };
        Client: {
            payload: Prisma.$ClientPayload<ExtArgs>;
            fields: Prisma.ClientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                findFirst: {
                    args: Prisma.ClientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                findMany: {
                    args: Prisma.ClientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                create: {
                    args: Prisma.ClientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                createMany: {
                    args: Prisma.ClientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ClientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                update: {
                    args: Prisma.ClientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                deleteMany: {
                    args: Prisma.ClientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ClientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                aggregate: {
                    args: Prisma.ClientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClient>;
                };
                groupBy: {
                    args: Prisma.ClientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ServiceTypeScalarFieldEnum: {
    readonly id: "id";
    readonly Type: "Type";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceTypeScalarFieldEnum = (typeof ServiceTypeScalarFieldEnum)[keyof typeof ServiceTypeScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly Title: "Title";
    readonly Time: "Time";
    readonly Price: "Price";
    readonly ServiceTypeId: "ServiceTypeId";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const BookingScalarFieldEnum: {
    readonly id: "id";
    readonly Date: "Date";
    readonly ExpireTime: "ExpireTime";
    readonly ClientId: "ClientId";
    readonly StartTime: "StartTime";
    readonly EndTime: "EndTime";
    readonly Address: "Address";
    readonly Contact: "Contact";
    readonly BookingPrice: "BookingPrice";
    readonly NumberOfCars: "NumberOfCars";
    readonly AvailableTimes: "AvailableTimes";
    readonly ServiceType: "ServiceType";
    readonly ServiceDetails: "ServiceDetails";
    readonly ServiceId: "ServiceId";
    readonly BookingStatus: "BookingStatus";
    readonly BookingType: "BookingType";
    readonly MultiBookingId: "MultiBookingId";
    readonly TeamId: "TeamId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];
export declare const MultiBookingScalarFieldEnum: {
    readonly id: "id";
    readonly ClientId: "ClientId";
    readonly StartTime: "StartTime";
    readonly EndTime: "EndTime";
    readonly Address: "Address";
    readonly Contact: "Contact";
    readonly BookingPrice: "BookingPrice";
    readonly NumberOfCars: "NumberOfCars";
    readonly AvailableTimes: "AvailableTimes";
    readonly ServiceType: "ServiceType";
    readonly ServiceDetails: "ServiceDetails";
    readonly BookingType: "BookingType";
    readonly ServiceId: "ServiceId";
    readonly Status: "Status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MultiBookingScalarFieldEnum = (typeof MultiBookingScalarFieldEnum)[keyof typeof MultiBookingScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceId: "invoiceId";
    readonly ClientId: "ClientId";
    readonly BookId: "BookId";
    readonly MultiBookingId: "MultiBookingId";
    readonly InvoiceType: "InvoiceType";
    readonly InvoiceDetails: "InvoiceDetails";
    readonly StartTime: "StartTime";
    readonly EndTime: "EndTime";
    readonly NumberOfCars: "NumberOfCars";
    readonly VehicalNoPlates: "VehicalNoPlates";
    readonly ServicePrice: "ServicePrice";
    readonly InvoiceAmount: "InvoiceAmount";
    readonly Discount: "Discount";
    readonly DiscountAmount: "DiscountAmount";
    readonly PaymentMethod: "PaymentMethod";
    readonly PaymentSlip: "PaymentSlip";
    readonly PaymentStatus: "PaymentStatus";
    readonly Remarks: "Remarks";
    readonly CustomerSignature: "CustomerSignature";
    readonly IssureImage1: "IssureImage1";
    readonly IssureImage2: "IssureImage2";
    readonly IssureImage3: "IssureImage3";
    readonly IssureImage4: "IssureImage4";
    readonly IssureImage5: "IssureImage5";
    readonly IssureImage6: "IssureImage6";
    readonly InvoicePDF: "InvoicePDF";
    readonly StartingPoint: "StartingPoint";
    readonly Date: "Date";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const MainPDFScalarFieldEnum: {
    readonly id: "id";
    readonly File: "File";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MainPDFScalarFieldEnum = (typeof MainPDFScalarFieldEnum)[keyof typeof MainPDFScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly image: "image";
    readonly title: "title";
    readonly price: "price";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly image: "image";
    readonly title: "title";
    readonly price: "price";
    readonly address: "address";
    readonly quantity: "quantity";
    readonly clientId: "clientId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const AdvanceScalarFieldEnum: {
    readonly id: "id";
    readonly amount: "amount";
    readonly type: "type";
    readonly months: "months";
    readonly clientId: "clientId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdvanceScalarFieldEnum = (typeof AdvanceScalarFieldEnum)[keyof typeof AdvanceScalarFieldEnum];
export declare const ComplaintScalarFieldEnum: {
    readonly id: "id";
    readonly message: "message";
    readonly image: "image";
    readonly clientId: "clientId";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ComplaintScalarFieldEnum = (typeof ComplaintScalarFieldEnum)[keyof typeof ComplaintScalarFieldEnum];
export declare const AdsScalarFieldEnum: {
    readonly id: "id";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdsScalarFieldEnum = (typeof AdsScalarFieldEnum)[keyof typeof AdsScalarFieldEnum];
export declare const TeamScalarFieldEnum: {
    readonly id: "id";
    readonly TeamName: "TeamName";
    readonly Leader: "Leader";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];
export declare const ClientScalarFieldEnum: {
    readonly id: "id";
    readonly Name: "Name";
    readonly Username: "Username";
    readonly Password: "Password";
    readonly Position: "Position";
    readonly Role: "Role";
    readonly Phone: "Phone";
    readonly Email: "Email";
    readonly Address: "Address";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const ServiceTypeOrderByRelevanceFieldEnum: {
    readonly Type: "Type";
};
export type ServiceTypeOrderByRelevanceFieldEnum = (typeof ServiceTypeOrderByRelevanceFieldEnum)[keyof typeof ServiceTypeOrderByRelevanceFieldEnum];
export declare const ServiceOrderByRelevanceFieldEnum: {
    readonly Title: "Title";
};
export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum];
export declare const BookingOrderByRelevanceFieldEnum: {
    readonly StartTime: "StartTime";
    readonly EndTime: "EndTime";
    readonly Address: "Address";
    readonly Contact: "Contact";
    readonly AvailableTimes: "AvailableTimes";
    readonly ServiceType: "ServiceType";
    readonly ServiceDetails: "ServiceDetails";
    readonly BookingStatus: "BookingStatus";
    readonly BookingType: "BookingType";
};
export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum];
export declare const MultiBookingOrderByRelevanceFieldEnum: {
    readonly StartTime: "StartTime";
    readonly EndTime: "EndTime";
    readonly Address: "Address";
    readonly Contact: "Contact";
    readonly AvailableTimes: "AvailableTimes";
    readonly ServiceType: "ServiceType";
    readonly ServiceDetails: "ServiceDetails";
    readonly BookingType: "BookingType";
    readonly Status: "Status";
};
export type MultiBookingOrderByRelevanceFieldEnum = (typeof MultiBookingOrderByRelevanceFieldEnum)[keyof typeof MultiBookingOrderByRelevanceFieldEnum];
export declare const InvoiceOrderByRelevanceFieldEnum: {
    readonly InvoiceType: "InvoiceType";
    readonly InvoiceDetails: "InvoiceDetails";
    readonly StartTime: "StartTime";
    readonly EndTime: "EndTime";
    readonly VehicalNoPlates: "VehicalNoPlates";
    readonly PaymentMethod: "PaymentMethod";
    readonly PaymentSlip: "PaymentSlip";
    readonly PaymentStatus: "PaymentStatus";
    readonly Remarks: "Remarks";
    readonly CustomerSignature: "CustomerSignature";
    readonly IssureImage1: "IssureImage1";
    readonly IssureImage2: "IssureImage2";
    readonly IssureImage3: "IssureImage3";
    readonly IssureImage4: "IssureImage4";
    readonly IssureImage5: "IssureImage5";
    readonly IssureImage6: "IssureImage6";
    readonly InvoicePDF: "InvoicePDF";
};
export type InvoiceOrderByRelevanceFieldEnum = (typeof InvoiceOrderByRelevanceFieldEnum)[keyof typeof InvoiceOrderByRelevanceFieldEnum];
export declare const MainPDFOrderByRelevanceFieldEnum: {
    readonly File: "File";
};
export type MainPDFOrderByRelevanceFieldEnum = (typeof MainPDFOrderByRelevanceFieldEnum)[keyof typeof MainPDFOrderByRelevanceFieldEnum];
export declare const ProductOrderByRelevanceFieldEnum: {
    readonly image: "image";
    readonly title: "title";
};
export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum];
export declare const OrderOrderByRelevanceFieldEnum: {
    readonly image: "image";
    readonly title: "title";
    readonly address: "address";
};
export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum];
export declare const AdvanceOrderByRelevanceFieldEnum: {
    readonly type: "type";
};
export type AdvanceOrderByRelevanceFieldEnum = (typeof AdvanceOrderByRelevanceFieldEnum)[keyof typeof AdvanceOrderByRelevanceFieldEnum];
export declare const ComplaintOrderByRelevanceFieldEnum: {
    readonly message: "message";
    readonly image: "image";
};
export type ComplaintOrderByRelevanceFieldEnum = (typeof ComplaintOrderByRelevanceFieldEnum)[keyof typeof ComplaintOrderByRelevanceFieldEnum];
export declare const AdsOrderByRelevanceFieldEnum: {
    readonly image: "image";
};
export type AdsOrderByRelevanceFieldEnum = (typeof AdsOrderByRelevanceFieldEnum)[keyof typeof AdsOrderByRelevanceFieldEnum];
export declare const TeamOrderByRelevanceFieldEnum: {
    readonly TeamName: "TeamName";
};
export type TeamOrderByRelevanceFieldEnum = (typeof TeamOrderByRelevanceFieldEnum)[keyof typeof TeamOrderByRelevanceFieldEnum];
export declare const ClientOrderByRelevanceFieldEnum: {
    readonly Name: "Name";
    readonly Username: "Username";
    readonly Password: "Password";
    readonly Phone: "Phone";
    readonly Email: "Email";
    readonly Address: "Address";
};
export type ClientOrderByRelevanceFieldEnum = (typeof ClientOrderByRelevanceFieldEnum)[keyof typeof ClientOrderByRelevanceFieldEnum];
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'OrderStatus'
 */
export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>;
/**
 * Reference to a field of type 'AdvanceStatus'
 */
export type EnumAdvanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdvanceStatus'>;
/**
 * Reference to a field of type 'UserPosition'
 */
export type EnumUserPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPosition'>;
/**
 * Reference to a field of type 'UserRole'
 */
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    serviceType?: Prisma.ServiceTypeOmit;
    service?: Prisma.ServiceOmit;
    booking?: Prisma.BookingOmit;
    multiBooking?: Prisma.MultiBookingOmit;
    invoice?: Prisma.InvoiceOmit;
    mainPDF?: Prisma.MainPDFOmit;
    product?: Prisma.ProductOmit;
    order?: Prisma.OrderOmit;
    advance?: Prisma.AdvanceOmit;
    complaint?: Prisma.ComplaintOmit;
    ads?: Prisma.AdsOmit;
    team?: Prisma.TeamOmit;
    client?: Prisma.ClientOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map