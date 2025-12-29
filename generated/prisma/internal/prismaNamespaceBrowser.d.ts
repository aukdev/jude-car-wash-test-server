import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map