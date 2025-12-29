import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Invoice
 *
 */
export type InvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoicePayload>;
export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type InvoiceAvgAggregateOutputType = {
    id: number | null;
    invoiceId: number | null;
    ClientId: number | null;
    BookId: number | null;
    MultiBookingId: number | null;
    NumberOfCars: number | null;
    ServicePrice: runtime.Decimal | null;
    InvoiceAmount: runtime.Decimal | null;
    Discount: number | null;
    DiscountAmount: runtime.Decimal | null;
};
export type InvoiceSumAggregateOutputType = {
    id: number | null;
    invoiceId: number | null;
    ClientId: number | null;
    BookId: number | null;
    MultiBookingId: number | null;
    NumberOfCars: number | null;
    ServicePrice: runtime.Decimal | null;
    InvoiceAmount: runtime.Decimal | null;
    Discount: number | null;
    DiscountAmount: runtime.Decimal | null;
};
export type InvoiceMinAggregateOutputType = {
    id: number | null;
    invoiceId: number | null;
    ClientId: number | null;
    BookId: number | null;
    MultiBookingId: number | null;
    InvoiceType: string | null;
    InvoiceDetails: string | null;
    StartTime: string | null;
    EndTime: string | null;
    NumberOfCars: number | null;
    VehicalNoPlates: string | null;
    ServicePrice: runtime.Decimal | null;
    InvoiceAmount: runtime.Decimal | null;
    Discount: number | null;
    DiscountAmount: runtime.Decimal | null;
    PaymentMethod: string | null;
    PaymentSlip: string | null;
    PaymentStatus: string | null;
    Remarks: string | null;
    CustomerSignature: string | null;
    IssureImage1: string | null;
    IssureImage2: string | null;
    IssureImage3: string | null;
    IssureImage4: string | null;
    IssureImage5: string | null;
    IssureImage6: string | null;
    InvoicePDF: string | null;
    StartingPoint: boolean | null;
    Date: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InvoiceMaxAggregateOutputType = {
    id: number | null;
    invoiceId: number | null;
    ClientId: number | null;
    BookId: number | null;
    MultiBookingId: number | null;
    InvoiceType: string | null;
    InvoiceDetails: string | null;
    StartTime: string | null;
    EndTime: string | null;
    NumberOfCars: number | null;
    VehicalNoPlates: string | null;
    ServicePrice: runtime.Decimal | null;
    InvoiceAmount: runtime.Decimal | null;
    Discount: number | null;
    DiscountAmount: runtime.Decimal | null;
    PaymentMethod: string | null;
    PaymentSlip: string | null;
    PaymentStatus: string | null;
    Remarks: string | null;
    CustomerSignature: string | null;
    IssureImage1: string | null;
    IssureImage2: string | null;
    IssureImage3: string | null;
    IssureImage4: string | null;
    IssureImage5: string | null;
    IssureImage6: string | null;
    InvoicePDF: string | null;
    StartingPoint: boolean | null;
    Date: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InvoiceCountAggregateOutputType = {
    id: number;
    invoiceId: number;
    ClientId: number;
    BookId: number;
    MultiBookingId: number;
    InvoiceType: number;
    InvoiceDetails: number;
    StartTime: number;
    EndTime: number;
    NumberOfCars: number;
    VehicalNoPlates: number;
    ServicePrice: number;
    InvoiceAmount: number;
    Discount: number;
    DiscountAmount: number;
    PaymentMethod: number;
    PaymentSlip: number;
    PaymentStatus: number;
    Remarks: number;
    CustomerSignature: number;
    IssureImage1: number;
    IssureImage2: number;
    IssureImage3: number;
    IssureImage4: number;
    IssureImage5: number;
    IssureImage6: number;
    InvoicePDF: number;
    StartingPoint: number;
    Date: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InvoiceAvgAggregateInputType = {
    id?: true;
    invoiceId?: true;
    ClientId?: true;
    BookId?: true;
    MultiBookingId?: true;
    NumberOfCars?: true;
    ServicePrice?: true;
    InvoiceAmount?: true;
    Discount?: true;
    DiscountAmount?: true;
};
export type InvoiceSumAggregateInputType = {
    id?: true;
    invoiceId?: true;
    ClientId?: true;
    BookId?: true;
    MultiBookingId?: true;
    NumberOfCars?: true;
    ServicePrice?: true;
    InvoiceAmount?: true;
    Discount?: true;
    DiscountAmount?: true;
};
export type InvoiceMinAggregateInputType = {
    id?: true;
    invoiceId?: true;
    ClientId?: true;
    BookId?: true;
    MultiBookingId?: true;
    InvoiceType?: true;
    InvoiceDetails?: true;
    StartTime?: true;
    EndTime?: true;
    NumberOfCars?: true;
    VehicalNoPlates?: true;
    ServicePrice?: true;
    InvoiceAmount?: true;
    Discount?: true;
    DiscountAmount?: true;
    PaymentMethod?: true;
    PaymentSlip?: true;
    PaymentStatus?: true;
    Remarks?: true;
    CustomerSignature?: true;
    IssureImage1?: true;
    IssureImage2?: true;
    IssureImage3?: true;
    IssureImage4?: true;
    IssureImage5?: true;
    IssureImage6?: true;
    InvoicePDF?: true;
    StartingPoint?: true;
    Date?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InvoiceMaxAggregateInputType = {
    id?: true;
    invoiceId?: true;
    ClientId?: true;
    BookId?: true;
    MultiBookingId?: true;
    InvoiceType?: true;
    InvoiceDetails?: true;
    StartTime?: true;
    EndTime?: true;
    NumberOfCars?: true;
    VehicalNoPlates?: true;
    ServicePrice?: true;
    InvoiceAmount?: true;
    Discount?: true;
    DiscountAmount?: true;
    PaymentMethod?: true;
    PaymentSlip?: true;
    PaymentStatus?: true;
    Remarks?: true;
    CustomerSignature?: true;
    IssureImage1?: true;
    IssureImage2?: true;
    IssureImage3?: true;
    IssureImage4?: true;
    IssureImage5?: true;
    IssureImage6?: true;
    InvoicePDF?: true;
    StartingPoint?: true;
    Date?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InvoiceCountAggregateInputType = {
    id?: true;
    invoiceId?: true;
    ClientId?: true;
    BookId?: true;
    MultiBookingId?: true;
    InvoiceType?: true;
    InvoiceDetails?: true;
    StartTime?: true;
    EndTime?: true;
    NumberOfCars?: true;
    VehicalNoPlates?: true;
    ServicePrice?: true;
    InvoiceAmount?: true;
    Discount?: true;
    DiscountAmount?: true;
    PaymentMethod?: true;
    PaymentSlip?: true;
    PaymentStatus?: true;
    Remarks?: true;
    CustomerSignature?: true;
    IssureImage1?: true;
    IssureImage2?: true;
    IssureImage3?: true;
    IssureImage4?: true;
    IssureImage5?: true;
    IssureImage6?: true;
    InvoicePDF?: true;
    StartingPoint?: true;
    Date?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType;
};
export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoice[P]> : Prisma.GetScalarType<T[P], AggregateInvoice[P]>;
};
export type InvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithAggregationInput | Prisma.InvoiceOrderByWithAggregationInput[];
    by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum;
    having?: Prisma.InvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type InvoiceGroupByOutputType = {
    id: number;
    invoiceId: number | null;
    ClientId: number | null;
    BookId: number | null;
    MultiBookingId: number | null;
    InvoiceType: string | null;
    InvoiceDetails: string | null;
    StartTime: string | null;
    EndTime: string | null;
    NumberOfCars: number | null;
    VehicalNoPlates: string | null;
    ServicePrice: runtime.Decimal | null;
    InvoiceAmount: runtime.Decimal | null;
    Discount: number | null;
    DiscountAmount: runtime.Decimal | null;
    PaymentMethod: string | null;
    PaymentSlip: string | null;
    PaymentStatus: string;
    Remarks: string | null;
    CustomerSignature: string | null;
    IssureImage1: string | null;
    IssureImage2: string | null;
    IssureImage3: string | null;
    IssureImage4: string | null;
    IssureImage5: string | null;
    IssureImage6: string | null;
    InvoicePDF: string | null;
    StartingPoint: boolean;
    Date: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
}>>;
export type InvoiceWhereInput = {
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    id?: Prisma.IntFilter<"Invoice"> | number;
    invoiceId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    ClientId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    BookId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    MultiBookingId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    InvoiceType?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    InvoiceDetails?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    StartTime?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    EndTime?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    NumberOfCars?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    VehicalNoPlates?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    ServicePrice?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    DiscountAmount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    PaymentSlip?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    PaymentStatus?: Prisma.StringFilter<"Invoice"> | string;
    Remarks?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    CustomerSignature?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage1?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage2?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage3?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage4?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage5?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage6?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    InvoicePDF?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    StartingPoint?: Prisma.BoolFilter<"Invoice"> | boolean;
    Date?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    Client?: Prisma.XOR<Prisma.ClientNullableScalarRelationFilter, Prisma.ClientWhereInput> | null;
    Booking?: Prisma.XOR<Prisma.BookingNullableScalarRelationFilter, Prisma.BookingWhereInput> | null;
    MultiBooking?: Prisma.XOR<Prisma.MultiBookingNullableScalarRelationFilter, Prisma.MultiBookingWhereInput> | null;
};
export type InvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ClientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    BookId?: Prisma.SortOrderInput | Prisma.SortOrder;
    MultiBookingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    InvoiceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    InvoiceDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    StartTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    EndTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrderInput | Prisma.SortOrder;
    VehicalNoPlates?: Prisma.SortOrderInput | Prisma.SortOrder;
    ServicePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    InvoiceAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    Discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    DiscountAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    PaymentMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    PaymentSlip?: Prisma.SortOrderInput | Prisma.SortOrder;
    PaymentStatus?: Prisma.SortOrder;
    Remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    CustomerSignature?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage1?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage2?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage3?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage4?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage5?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage6?: Prisma.SortOrderInput | Prisma.SortOrder;
    InvoicePDF?: Prisma.SortOrderInput | Prisma.SortOrder;
    StartingPoint?: Prisma.SortOrder;
    Date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Client?: Prisma.ClientOrderByWithRelationInput;
    Booking?: Prisma.BookingOrderByWithRelationInput;
    MultiBooking?: Prisma.MultiBookingOrderByWithRelationInput;
    _relevance?: Prisma.InvoiceOrderByRelevanceInput;
};
export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    invoiceId?: number;
    BookId?: number;
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    ClientId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    MultiBookingId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    InvoiceType?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    InvoiceDetails?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    StartTime?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    EndTime?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    NumberOfCars?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    VehicalNoPlates?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    ServicePrice?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    DiscountAmount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    PaymentSlip?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    PaymentStatus?: Prisma.StringFilter<"Invoice"> | string;
    Remarks?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    CustomerSignature?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage1?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage2?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage3?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage4?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage5?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage6?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    InvoicePDF?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    StartingPoint?: Prisma.BoolFilter<"Invoice"> | boolean;
    Date?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    Client?: Prisma.XOR<Prisma.ClientNullableScalarRelationFilter, Prisma.ClientWhereInput> | null;
    Booking?: Prisma.XOR<Prisma.BookingNullableScalarRelationFilter, Prisma.BookingWhereInput> | null;
    MultiBooking?: Prisma.XOR<Prisma.MultiBookingNullableScalarRelationFilter, Prisma.MultiBookingWhereInput> | null;
}, "id" | "invoiceId" | "BookId">;
export type InvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ClientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    BookId?: Prisma.SortOrderInput | Prisma.SortOrder;
    MultiBookingId?: Prisma.SortOrderInput | Prisma.SortOrder;
    InvoiceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    InvoiceDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    StartTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    EndTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrderInput | Prisma.SortOrder;
    VehicalNoPlates?: Prisma.SortOrderInput | Prisma.SortOrder;
    ServicePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    InvoiceAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    Discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    DiscountAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    PaymentMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    PaymentSlip?: Prisma.SortOrderInput | Prisma.SortOrder;
    PaymentStatus?: Prisma.SortOrder;
    Remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    CustomerSignature?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage1?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage2?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage3?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage4?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage5?: Prisma.SortOrderInput | Prisma.SortOrder;
    IssureImage6?: Prisma.SortOrderInput | Prisma.SortOrder;
    InvoicePDF?: Prisma.SortOrderInput | Prisma.SortOrder;
    StartingPoint?: Prisma.SortOrder;
    Date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InvoiceCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceSumOrderByAggregateInput;
};
export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Invoice"> | number;
    invoiceId?: Prisma.IntNullableWithAggregatesFilter<"Invoice"> | number | null;
    ClientId?: Prisma.IntNullableWithAggregatesFilter<"Invoice"> | number | null;
    BookId?: Prisma.IntNullableWithAggregatesFilter<"Invoice"> | number | null;
    MultiBookingId?: Prisma.IntNullableWithAggregatesFilter<"Invoice"> | number | null;
    InvoiceType?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    InvoiceDetails?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    StartTime?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    EndTime?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    NumberOfCars?: Prisma.IntNullableWithAggregatesFilter<"Invoice"> | number | null;
    VehicalNoPlates?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    ServicePrice?: Prisma.DecimalNullableWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.IntNullableWithAggregatesFilter<"Invoice"> | number | null;
    DiscountAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    PaymentSlip?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    PaymentStatus?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    Remarks?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    CustomerSignature?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    IssureImage1?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    IssureImage2?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    IssureImage3?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    IssureImage4?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    IssureImage5?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    IssureImage6?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    InvoicePDF?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    StartingPoint?: Prisma.BoolWithAggregatesFilter<"Invoice"> | boolean;
    Date?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateInput = {
    invoiceId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Client?: Prisma.ClientCreateNestedOneWithoutInvoicesInput;
    Booking?: Prisma.BookingCreateNestedOneWithoutInvoiceInput;
    MultiBooking?: Prisma.MultiBookingCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateInput = {
    id?: number;
    invoiceId?: number | null;
    ClientId?: number | null;
    BookId?: number | null;
    MultiBookingId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateInput = {
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Client?: Prisma.ClientUpdateOneWithoutInvoicesNestedInput;
    Booking?: Prisma.BookingUpdateOneWithoutInvoiceNestedInput;
    MultiBooking?: Prisma.MultiBookingUpdateOneWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ClientId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    BookId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MultiBookingId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyInput = {
    id?: number;
    invoiceId?: number | null;
    ClientId?: number | null;
    BookId?: number | null;
    MultiBookingId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateManyMutationInput = {
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ClientId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    BookId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MultiBookingId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceNullableScalarRelationFilter = {
    is?: Prisma.InvoiceWhereInput | null;
    isNot?: Prisma.InvoiceWhereInput | null;
};
export type InvoiceListRelationFilter = {
    every?: Prisma.InvoiceWhereInput;
    some?: Prisma.InvoiceWhereInput;
    none?: Prisma.InvoiceWhereInput;
};
export type InvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceOrderByRelevanceInput = {
    fields: Prisma.InvoiceOrderByRelevanceFieldEnum | Prisma.InvoiceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type InvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    BookId?: Prisma.SortOrder;
    MultiBookingId?: Prisma.SortOrder;
    InvoiceType?: Prisma.SortOrder;
    InvoiceDetails?: Prisma.SortOrder;
    StartTime?: Prisma.SortOrder;
    EndTime?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    VehicalNoPlates?: Prisma.SortOrder;
    ServicePrice?: Prisma.SortOrder;
    InvoiceAmount?: Prisma.SortOrder;
    Discount?: Prisma.SortOrder;
    DiscountAmount?: Prisma.SortOrder;
    PaymentMethod?: Prisma.SortOrder;
    PaymentSlip?: Prisma.SortOrder;
    PaymentStatus?: Prisma.SortOrder;
    Remarks?: Prisma.SortOrder;
    CustomerSignature?: Prisma.SortOrder;
    IssureImage1?: Prisma.SortOrder;
    IssureImage2?: Prisma.SortOrder;
    IssureImage3?: Prisma.SortOrder;
    IssureImage4?: Prisma.SortOrder;
    IssureImage5?: Prisma.SortOrder;
    IssureImage6?: Prisma.SortOrder;
    InvoicePDF?: Prisma.SortOrder;
    StartingPoint?: Prisma.SortOrder;
    Date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    BookId?: Prisma.SortOrder;
    MultiBookingId?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    ServicePrice?: Prisma.SortOrder;
    InvoiceAmount?: Prisma.SortOrder;
    Discount?: Prisma.SortOrder;
    DiscountAmount?: Prisma.SortOrder;
};
export type InvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    BookId?: Prisma.SortOrder;
    MultiBookingId?: Prisma.SortOrder;
    InvoiceType?: Prisma.SortOrder;
    InvoiceDetails?: Prisma.SortOrder;
    StartTime?: Prisma.SortOrder;
    EndTime?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    VehicalNoPlates?: Prisma.SortOrder;
    ServicePrice?: Prisma.SortOrder;
    InvoiceAmount?: Prisma.SortOrder;
    Discount?: Prisma.SortOrder;
    DiscountAmount?: Prisma.SortOrder;
    PaymentMethod?: Prisma.SortOrder;
    PaymentSlip?: Prisma.SortOrder;
    PaymentStatus?: Prisma.SortOrder;
    Remarks?: Prisma.SortOrder;
    CustomerSignature?: Prisma.SortOrder;
    IssureImage1?: Prisma.SortOrder;
    IssureImage2?: Prisma.SortOrder;
    IssureImage3?: Prisma.SortOrder;
    IssureImage4?: Prisma.SortOrder;
    IssureImage5?: Prisma.SortOrder;
    IssureImage6?: Prisma.SortOrder;
    InvoicePDF?: Prisma.SortOrder;
    StartingPoint?: Prisma.SortOrder;
    Date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    BookId?: Prisma.SortOrder;
    MultiBookingId?: Prisma.SortOrder;
    InvoiceType?: Prisma.SortOrder;
    InvoiceDetails?: Prisma.SortOrder;
    StartTime?: Prisma.SortOrder;
    EndTime?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    VehicalNoPlates?: Prisma.SortOrder;
    ServicePrice?: Prisma.SortOrder;
    InvoiceAmount?: Prisma.SortOrder;
    Discount?: Prisma.SortOrder;
    DiscountAmount?: Prisma.SortOrder;
    PaymentMethod?: Prisma.SortOrder;
    PaymentSlip?: Prisma.SortOrder;
    PaymentStatus?: Prisma.SortOrder;
    Remarks?: Prisma.SortOrder;
    CustomerSignature?: Prisma.SortOrder;
    IssureImage1?: Prisma.SortOrder;
    IssureImage2?: Prisma.SortOrder;
    IssureImage3?: Prisma.SortOrder;
    IssureImage4?: Prisma.SortOrder;
    IssureImage5?: Prisma.SortOrder;
    IssureImage6?: Prisma.SortOrder;
    InvoicePDF?: Prisma.SortOrder;
    StartingPoint?: Prisma.SortOrder;
    Date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    BookId?: Prisma.SortOrder;
    MultiBookingId?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    ServicePrice?: Prisma.SortOrder;
    InvoiceAmount?: Prisma.SortOrder;
    Discount?: Prisma.SortOrder;
    DiscountAmount?: Prisma.SortOrder;
};
export type InvoiceCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutBookingInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUncheckedCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutBookingInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateOneWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.InvoiceUpsertWithoutBookingInput;
    disconnect?: Prisma.InvoiceWhereInput | boolean;
    delete?: Prisma.InvoiceWhereInput | boolean;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutBookingInput, Prisma.InvoiceUpdateWithoutBookingInput>, Prisma.InvoiceUncheckedUpdateWithoutBookingInput>;
};
export type InvoiceUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.InvoiceUpsertWithoutBookingInput;
    disconnect?: Prisma.InvoiceWhereInput | boolean;
    delete?: Prisma.InvoiceWhereInput | boolean;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutBookingInput, Prisma.InvoiceUpdateWithoutBookingInput>, Prisma.InvoiceUncheckedUpdateWithoutBookingInput>;
};
export type InvoiceCreateNestedManyWithoutMultiBookingInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutMultiBookingInput, Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput> | Prisma.InvoiceCreateWithoutMultiBookingInput[] | Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutMultiBookingInput | Prisma.InvoiceCreateOrConnectWithoutMultiBookingInput[];
    createMany?: Prisma.InvoiceCreateManyMultiBookingInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutMultiBookingInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutMultiBookingInput, Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput> | Prisma.InvoiceCreateWithoutMultiBookingInput[] | Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutMultiBookingInput | Prisma.InvoiceCreateOrConnectWithoutMultiBookingInput[];
    createMany?: Prisma.InvoiceCreateManyMultiBookingInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutMultiBookingNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutMultiBookingInput, Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput> | Prisma.InvoiceCreateWithoutMultiBookingInput[] | Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutMultiBookingInput | Prisma.InvoiceCreateOrConnectWithoutMultiBookingInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutMultiBookingInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutMultiBookingInput[];
    createMany?: Prisma.InvoiceCreateManyMultiBookingInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutMultiBookingInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutMultiBookingInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutMultiBookingInput | Prisma.InvoiceUpdateManyWithWhereWithoutMultiBookingInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutMultiBookingNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutMultiBookingInput, Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput> | Prisma.InvoiceCreateWithoutMultiBookingInput[] | Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutMultiBookingInput | Prisma.InvoiceCreateOrConnectWithoutMultiBookingInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutMultiBookingInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutMultiBookingInput[];
    createMany?: Prisma.InvoiceCreateManyMultiBookingInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutMultiBookingInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutMultiBookingInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutMultiBookingInput | Prisma.InvoiceUpdateManyWithWhereWithoutMultiBookingInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type InvoiceCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutClientInput, Prisma.InvoiceUncheckedCreateWithoutClientInput> | Prisma.InvoiceCreateWithoutClientInput[] | Prisma.InvoiceUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutClientInput | Prisma.InvoiceCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.InvoiceCreateManyClientInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutClientInput, Prisma.InvoiceUncheckedCreateWithoutClientInput> | Prisma.InvoiceCreateWithoutClientInput[] | Prisma.InvoiceUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutClientInput | Prisma.InvoiceCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.InvoiceCreateManyClientInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutClientInput, Prisma.InvoiceUncheckedCreateWithoutClientInput> | Prisma.InvoiceCreateWithoutClientInput[] | Prisma.InvoiceUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutClientInput | Prisma.InvoiceCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutClientInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.InvoiceCreateManyClientInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutClientInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutClientInput | Prisma.InvoiceUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutClientInput, Prisma.InvoiceUncheckedCreateWithoutClientInput> | Prisma.InvoiceCreateWithoutClientInput[] | Prisma.InvoiceUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutClientInput | Prisma.InvoiceCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutClientInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.InvoiceCreateManyClientInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutClientInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutClientInput | Prisma.InvoiceUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateWithoutBookingInput = {
    invoiceId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Client?: Prisma.ClientCreateNestedOneWithoutInvoicesInput;
    MultiBooking?: Prisma.MultiBookingCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateWithoutBookingInput = {
    id?: number;
    invoiceId?: number | null;
    ClientId?: number | null;
    MultiBookingId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutBookingInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
};
export type InvoiceUpsertWithoutBookingInput = {
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutBookingInput, Prisma.InvoiceUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutBookingInput, Prisma.InvoiceUncheckedCreateWithoutBookingInput>;
    where?: Prisma.InvoiceWhereInput;
};
export type InvoiceUpdateToOneWithWhereWithoutBookingInput = {
    where?: Prisma.InvoiceWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutBookingInput, Prisma.InvoiceUncheckedUpdateWithoutBookingInput>;
};
export type InvoiceUpdateWithoutBookingInput = {
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Client?: Prisma.ClientUpdateOneWithoutInvoicesNestedInput;
    MultiBooking?: Prisma.MultiBookingUpdateOneWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ClientId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MultiBookingId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateWithoutMultiBookingInput = {
    invoiceId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Client?: Prisma.ClientCreateNestedOneWithoutInvoicesInput;
    Booking?: Prisma.BookingCreateNestedOneWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutMultiBookingInput = {
    id?: number;
    invoiceId?: number | null;
    ClientId?: number | null;
    BookId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutMultiBookingInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutMultiBookingInput, Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput>;
};
export type InvoiceCreateManyMultiBookingInputEnvelope = {
    data: Prisma.InvoiceCreateManyMultiBookingInput | Prisma.InvoiceCreateManyMultiBookingInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutMultiBookingInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutMultiBookingInput, Prisma.InvoiceUncheckedUpdateWithoutMultiBookingInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutMultiBookingInput, Prisma.InvoiceUncheckedCreateWithoutMultiBookingInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutMultiBookingInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutMultiBookingInput, Prisma.InvoiceUncheckedUpdateWithoutMultiBookingInput>;
};
export type InvoiceUpdateManyWithWhereWithoutMultiBookingInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutMultiBookingInput>;
};
export type InvoiceScalarWhereInput = {
    AND?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    OR?: Prisma.InvoiceScalarWhereInput[];
    NOT?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    id?: Prisma.IntFilter<"Invoice"> | number;
    invoiceId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    ClientId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    BookId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    MultiBookingId?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    InvoiceType?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    InvoiceDetails?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    StartTime?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    EndTime?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    NumberOfCars?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    VehicalNoPlates?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    ServicePrice?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.IntNullableFilter<"Invoice"> | number | null;
    DiscountAmount?: Prisma.DecimalNullableFilter<"Invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    PaymentSlip?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    PaymentStatus?: Prisma.StringFilter<"Invoice"> | string;
    Remarks?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    CustomerSignature?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage1?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage2?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage3?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage4?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage5?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    IssureImage6?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    InvoicePDF?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    StartingPoint?: Prisma.BoolFilter<"Invoice"> | boolean;
    Date?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateWithoutClientInput = {
    invoiceId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Booking?: Prisma.BookingCreateNestedOneWithoutInvoiceInput;
    MultiBooking?: Prisma.MultiBookingCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateWithoutClientInput = {
    id?: number;
    invoiceId?: number | null;
    BookId?: number | null;
    MultiBookingId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutClientInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutClientInput, Prisma.InvoiceUncheckedCreateWithoutClientInput>;
};
export type InvoiceCreateManyClientInputEnvelope = {
    data: Prisma.InvoiceCreateManyClientInput | Prisma.InvoiceCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutClientInput, Prisma.InvoiceUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutClientInput, Prisma.InvoiceUncheckedCreateWithoutClientInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutClientInput, Prisma.InvoiceUncheckedUpdateWithoutClientInput>;
};
export type InvoiceUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutClientInput>;
};
export type InvoiceCreateManyMultiBookingInput = {
    id?: number;
    invoiceId?: number | null;
    ClientId?: number | null;
    BookId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutMultiBookingInput = {
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Client?: Prisma.ClientUpdateOneWithoutInvoicesNestedInput;
    Booking?: Prisma.BookingUpdateOneWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutMultiBookingInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ClientId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    BookId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyWithoutMultiBookingInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ClientId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    BookId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyClientInput = {
    id?: number;
    invoiceId?: number | null;
    BookId?: number | null;
    MultiBookingId?: number | null;
    InvoiceType?: string | null;
    InvoiceDetails?: string | null;
    StartTime?: string | null;
    EndTime?: string | null;
    NumberOfCars?: number | null;
    VehicalNoPlates?: string | null;
    ServicePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: number | null;
    DiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: string | null;
    PaymentSlip?: string | null;
    PaymentStatus?: string;
    Remarks?: string | null;
    CustomerSignature?: string | null;
    IssureImage1?: string | null;
    IssureImage2?: string | null;
    IssureImage3?: string | null;
    IssureImage4?: string | null;
    IssureImage5?: string | null;
    IssureImage6?: string | null;
    InvoicePDF?: string | null;
    StartingPoint?: boolean;
    Date?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutClientInput = {
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: Prisma.BookingUpdateOneWithoutInvoiceNestedInput;
    MultiBooking?: Prisma.MultiBookingUpdateOneWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateWithoutClientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    BookId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MultiBookingId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    BookId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MultiBookingId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    InvoiceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoiceDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    VehicalNoPlates?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServicePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    InvoiceAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    Discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DiscountAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    PaymentMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentSlip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PaymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    Remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CustomerSignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage3?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage4?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage5?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    IssureImage6?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    InvoicePDF?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    StartingPoint?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invoiceId?: boolean;
    ClientId?: boolean;
    BookId?: boolean;
    MultiBookingId?: boolean;
    InvoiceType?: boolean;
    InvoiceDetails?: boolean;
    StartTime?: boolean;
    EndTime?: boolean;
    NumberOfCars?: boolean;
    VehicalNoPlates?: boolean;
    ServicePrice?: boolean;
    InvoiceAmount?: boolean;
    Discount?: boolean;
    DiscountAmount?: boolean;
    PaymentMethod?: boolean;
    PaymentSlip?: boolean;
    PaymentStatus?: boolean;
    Remarks?: boolean;
    CustomerSignature?: boolean;
    IssureImage1?: boolean;
    IssureImage2?: boolean;
    IssureImage3?: boolean;
    IssureImage4?: boolean;
    IssureImage5?: boolean;
    IssureImage6?: boolean;
    InvoicePDF?: boolean;
    StartingPoint?: boolean;
    Date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Client?: boolean | Prisma.Invoice$ClientArgs<ExtArgs>;
    Booking?: boolean | Prisma.Invoice$BookingArgs<ExtArgs>;
    MultiBooking?: boolean | Prisma.Invoice$MultiBookingArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectScalar = {
    id?: boolean;
    invoiceId?: boolean;
    ClientId?: boolean;
    BookId?: boolean;
    MultiBookingId?: boolean;
    InvoiceType?: boolean;
    InvoiceDetails?: boolean;
    StartTime?: boolean;
    EndTime?: boolean;
    NumberOfCars?: boolean;
    VehicalNoPlates?: boolean;
    ServicePrice?: boolean;
    InvoiceAmount?: boolean;
    Discount?: boolean;
    DiscountAmount?: boolean;
    PaymentMethod?: boolean;
    PaymentSlip?: boolean;
    PaymentStatus?: boolean;
    Remarks?: boolean;
    CustomerSignature?: boolean;
    IssureImage1?: boolean;
    IssureImage2?: boolean;
    IssureImage3?: boolean;
    IssureImage4?: boolean;
    IssureImage5?: boolean;
    IssureImage6?: boolean;
    InvoicePDF?: boolean;
    StartingPoint?: boolean;
    Date?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type InvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "invoiceId" | "ClientId" | "BookId" | "MultiBookingId" | "InvoiceType" | "InvoiceDetails" | "StartTime" | "EndTime" | "NumberOfCars" | "VehicalNoPlates" | "ServicePrice" | "InvoiceAmount" | "Discount" | "DiscountAmount" | "PaymentMethod" | "PaymentSlip" | "PaymentStatus" | "Remarks" | "CustomerSignature" | "IssureImage1" | "IssureImage2" | "IssureImage3" | "IssureImage4" | "IssureImage5" | "IssureImage6" | "InvoicePDF" | "StartingPoint" | "Date" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>;
export type InvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Client?: boolean | Prisma.Invoice$ClientArgs<ExtArgs>;
    Booking?: boolean | Prisma.Invoice$BookingArgs<ExtArgs>;
    MultiBooking?: boolean | Prisma.Invoice$MultiBookingArgs<ExtArgs>;
};
export type $InvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invoice";
    objects: {
        Client: Prisma.$ClientPayload<ExtArgs> | null;
        Booking: Prisma.$BookingPayload<ExtArgs> | null;
        MultiBooking: Prisma.$MultiBookingPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        invoiceId: number | null;
        ClientId: number | null;
        BookId: number | null;
        MultiBookingId: number | null;
        InvoiceType: string | null;
        InvoiceDetails: string | null;
        StartTime: string | null;
        EndTime: string | null;
        NumberOfCars: number | null;
        VehicalNoPlates: string | null;
        ServicePrice: runtime.Decimal | null;
        InvoiceAmount: runtime.Decimal | null;
        Discount: number | null;
        DiscountAmount: runtime.Decimal | null;
        PaymentMethod: string | null;
        PaymentSlip: string | null;
        PaymentStatus: string;
        Remarks: string | null;
        CustomerSignature: string | null;
        IssureImage1: string | null;
        IssureImage2: string | null;
        IssureImage3: string | null;
        IssureImage4: string | null;
        IssureImage5: string | null;
        IssureImage6: string | null;
        InvoicePDF: string | null;
        StartingPoint: boolean;
        Date: Date;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["invoice"]>;
    composites: {};
};
export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoicePayload, S>;
export type InvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true;
};
export interface InvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invoice'];
        meta: {
            name: 'Invoice';
        };
    };
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     *
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     *
     */
    create<T extends InvoiceCreateArgs>(args: Prisma.SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     *
     */
    delete<T extends InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(args?: Prisma.Subset<T, InvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;
    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends InvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Invoice model
     */
    readonly fields: InvoiceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Invoice.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Client<T extends Prisma.Invoice$ClientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$ClientArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    Booking<T extends Prisma.Invoice$BookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$BookingArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    MultiBooking<T extends Prisma.Invoice$MultiBookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$MultiBookingArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Invoice model
 */
export interface InvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly invoiceId: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly ClientId: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly BookId: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly MultiBookingId: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly InvoiceType: Prisma.FieldRef<"Invoice", 'String'>;
    readonly InvoiceDetails: Prisma.FieldRef<"Invoice", 'String'>;
    readonly StartTime: Prisma.FieldRef<"Invoice", 'String'>;
    readonly EndTime: Prisma.FieldRef<"Invoice", 'String'>;
    readonly NumberOfCars: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly VehicalNoPlates: Prisma.FieldRef<"Invoice", 'String'>;
    readonly ServicePrice: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly InvoiceAmount: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly Discount: Prisma.FieldRef<"Invoice", 'Int'>;
    readonly DiscountAmount: Prisma.FieldRef<"Invoice", 'Decimal'>;
    readonly PaymentMethod: Prisma.FieldRef<"Invoice", 'String'>;
    readonly PaymentSlip: Prisma.FieldRef<"Invoice", 'String'>;
    readonly PaymentStatus: Prisma.FieldRef<"Invoice", 'String'>;
    readonly Remarks: Prisma.FieldRef<"Invoice", 'String'>;
    readonly CustomerSignature: Prisma.FieldRef<"Invoice", 'String'>;
    readonly IssureImage1: Prisma.FieldRef<"Invoice", 'String'>;
    readonly IssureImage2: Prisma.FieldRef<"Invoice", 'String'>;
    readonly IssureImage3: Prisma.FieldRef<"Invoice", 'String'>;
    readonly IssureImage4: Prisma.FieldRef<"Invoice", 'String'>;
    readonly IssureImage5: Prisma.FieldRef<"Invoice", 'String'>;
    readonly IssureImage6: Prisma.FieldRef<"Invoice", 'String'>;
    readonly InvoicePDF: Prisma.FieldRef<"Invoice", 'String'>;
    readonly StartingPoint: Prisma.FieldRef<"Invoice", 'Boolean'>;
    readonly Date: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
}
/**
 * Invoice findUnique
 */
export type InvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where: Prisma.InvoiceWhereUniqueInput;
};
/**
 * Invoice findUniqueOrThrow
 */
export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where: Prisma.InvoiceWhereUniqueInput;
};
/**
 * Invoice findFirst
 */
export type InvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invoices.
     */
    cursor?: Prisma.InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invoices.
     */
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
/**
 * Invoice findFirstOrThrow
 */
export type InvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invoices.
     */
    cursor?: Prisma.InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invoices.
     */
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
/**
 * Invoice findMany
 */
export type InvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoices to fetch.
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Invoices.
     */
    cursor?: Prisma.InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
/**
 * Invoice create
 */
export type InvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Invoice.
     */
    data: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
};
/**
 * Invoice createMany
 */
export type InvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Invoice update
 */
export type InvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Invoice.
     */
    data: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
    /**
     * Choose, which Invoice to update.
     */
    where: Prisma.InvoiceWhereUniqueInput;
};
/**
 * Invoice updateMany
 */
export type InvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    /**
     * Filter which Invoices to update
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * Limit how many Invoices to update.
     */
    limit?: number;
};
/**
 * Invoice upsert
 */
export type InvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: Prisma.InvoiceWhereUniqueInput;
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
};
/**
 * Invoice delete
 */
export type InvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    /**
     * Filter which Invoice to delete.
     */
    where: Prisma.InvoiceWhereUniqueInput;
};
/**
 * Invoice deleteMany
 */
export type InvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: Prisma.InvoiceWhereInput;
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number;
};
/**
 * Invoice.Client
 */
export type Invoice$ClientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: Prisma.ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
};
/**
 * Invoice.Booking
 */
export type Invoice$BookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: Prisma.BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
};
/**
 * Invoice.MultiBooking
 */
export type Invoice$MultiBookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiBooking
     */
    select?: Prisma.MultiBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MultiBooking
     */
    omit?: Prisma.MultiBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MultiBookingInclude<ExtArgs> | null;
    where?: Prisma.MultiBookingWhereInput;
};
/**
 * Invoice without action
 */
export type InvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Invoice.d.ts.map