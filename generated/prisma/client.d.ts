import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ServiceTypes
 * const serviceTypes = await prisma.serviceType.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model ServiceType
 *
 */
export type ServiceType = Prisma.ServiceTypeModel;
/**
 * Model Service
 *
 */
export type Service = Prisma.ServiceModel;
/**
 * Model Booking
 *
 */
export type Booking = Prisma.BookingModel;
/**
 * Model MultiBooking
 *
 */
export type MultiBooking = Prisma.MultiBookingModel;
/**
 * Model Invoice
 *
 */
export type Invoice = Prisma.InvoiceModel;
/**
 * Model MainPDF
 *
 */
export type MainPDF = Prisma.MainPDFModel;
/**
 * Model Product
 *
 */
export type Product = Prisma.ProductModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model Advance
 *
 */
export type Advance = Prisma.AdvanceModel;
/**
 * Model Complaint
 *
 */
export type Complaint = Prisma.ComplaintModel;
/**
 * Model Ads
 *
 */
export type Ads = Prisma.AdsModel;
/**
 * Model Team
 *
 */
export type Team = Prisma.TeamModel;
/**
 * Model Client
 *
 */
export type Client = Prisma.ClientModel;
//# sourceMappingURL=client.d.ts.map