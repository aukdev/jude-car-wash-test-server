import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MultiBooking
 *
 */
export type MultiBookingModel = runtime.Types.Result.DefaultSelection<Prisma.$MultiBookingPayload>;
export type AggregateMultiBooking = {
    _count: MultiBookingCountAggregateOutputType | null;
    _avg: MultiBookingAvgAggregateOutputType | null;
    _sum: MultiBookingSumAggregateOutputType | null;
    _min: MultiBookingMinAggregateOutputType | null;
    _max: MultiBookingMaxAggregateOutputType | null;
};
export type MultiBookingAvgAggregateOutputType = {
    id: number | null;
    ClientId: number | null;
    BookingPrice: runtime.Decimal | null;
    NumberOfCars: number | null;
    ServiceId: number | null;
};
export type MultiBookingSumAggregateOutputType = {
    id: number | null;
    ClientId: number | null;
    BookingPrice: runtime.Decimal | null;
    NumberOfCars: number | null;
    ServiceId: number | null;
};
export type MultiBookingMinAggregateOutputType = {
    id: number | null;
    ClientId: number | null;
    StartTime: string | null;
    EndTime: string | null;
    Address: string | null;
    Contact: string | null;
    BookingPrice: runtime.Decimal | null;
    NumberOfCars: number | null;
    AvailableTimes: string | null;
    ServiceType: string | null;
    ServiceDetails: string | null;
    BookingType: string | null;
    ServiceId: number | null;
    Status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MultiBookingMaxAggregateOutputType = {
    id: number | null;
    ClientId: number | null;
    StartTime: string | null;
    EndTime: string | null;
    Address: string | null;
    Contact: string | null;
    BookingPrice: runtime.Decimal | null;
    NumberOfCars: number | null;
    AvailableTimes: string | null;
    ServiceType: string | null;
    ServiceDetails: string | null;
    BookingType: string | null;
    ServiceId: number | null;
    Status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MultiBookingCountAggregateOutputType = {
    id: number;
    ClientId: number;
    StartTime: number;
    EndTime: number;
    Address: number;
    Contact: number;
    BookingPrice: number;
    NumberOfCars: number;
    AvailableTimes: number;
    ServiceType: number;
    ServiceDetails: number;
    BookingType: number;
    ServiceId: number;
    Status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MultiBookingAvgAggregateInputType = {
    id?: true;
    ClientId?: true;
    BookingPrice?: true;
    NumberOfCars?: true;
    ServiceId?: true;
};
export type MultiBookingSumAggregateInputType = {
    id?: true;
    ClientId?: true;
    BookingPrice?: true;
    NumberOfCars?: true;
    ServiceId?: true;
};
export type MultiBookingMinAggregateInputType = {
    id?: true;
    ClientId?: true;
    StartTime?: true;
    EndTime?: true;
    Address?: true;
    Contact?: true;
    BookingPrice?: true;
    NumberOfCars?: true;
    AvailableTimes?: true;
    ServiceType?: true;
    ServiceDetails?: true;
    BookingType?: true;
    ServiceId?: true;
    Status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MultiBookingMaxAggregateInputType = {
    id?: true;
    ClientId?: true;
    StartTime?: true;
    EndTime?: true;
    Address?: true;
    Contact?: true;
    BookingPrice?: true;
    NumberOfCars?: true;
    AvailableTimes?: true;
    ServiceType?: true;
    ServiceDetails?: true;
    BookingType?: true;
    ServiceId?: true;
    Status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MultiBookingCountAggregateInputType = {
    id?: true;
    ClientId?: true;
    StartTime?: true;
    EndTime?: true;
    Address?: true;
    Contact?: true;
    BookingPrice?: true;
    NumberOfCars?: true;
    AvailableTimes?: true;
    ServiceType?: true;
    ServiceDetails?: true;
    BookingType?: true;
    ServiceId?: true;
    Status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MultiBookingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MultiBooking to aggregate.
     */
    where?: Prisma.MultiBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MultiBookings to fetch.
     */
    orderBy?: Prisma.MultiBookingOrderByWithRelationInput | Prisma.MultiBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MultiBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MultiBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MultiBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MultiBookings
    **/
    _count?: true | MultiBookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MultiBookingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MultiBookingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MultiBookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MultiBookingMaxAggregateInputType;
};
export type GetMultiBookingAggregateType<T extends MultiBookingAggregateArgs> = {
    [P in keyof T & keyof AggregateMultiBooking]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMultiBooking[P]> : Prisma.GetScalarType<T[P], AggregateMultiBooking[P]>;
};
export type MultiBookingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MultiBookingWhereInput;
    orderBy?: Prisma.MultiBookingOrderByWithAggregationInput | Prisma.MultiBookingOrderByWithAggregationInput[];
    by: Prisma.MultiBookingScalarFieldEnum[] | Prisma.MultiBookingScalarFieldEnum;
    having?: Prisma.MultiBookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MultiBookingCountAggregateInputType | true;
    _avg?: MultiBookingAvgAggregateInputType;
    _sum?: MultiBookingSumAggregateInputType;
    _min?: MultiBookingMinAggregateInputType;
    _max?: MultiBookingMaxAggregateInputType;
};
export type MultiBookingGroupByOutputType = {
    id: number;
    ClientId: number;
    StartTime: string | null;
    EndTime: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal;
    NumberOfCars: number | null;
    AvailableTimes: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    ServiceId: number;
    Status: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MultiBookingCountAggregateOutputType | null;
    _avg: MultiBookingAvgAggregateOutputType | null;
    _sum: MultiBookingSumAggregateOutputType | null;
    _min: MultiBookingMinAggregateOutputType | null;
    _max: MultiBookingMaxAggregateOutputType | null;
};
type GetMultiBookingGroupByPayload<T extends MultiBookingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MultiBookingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MultiBookingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MultiBookingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MultiBookingGroupByOutputType[P]>;
}>>;
export type MultiBookingWhereInput = {
    AND?: Prisma.MultiBookingWhereInput | Prisma.MultiBookingWhereInput[];
    OR?: Prisma.MultiBookingWhereInput[];
    NOT?: Prisma.MultiBookingWhereInput | Prisma.MultiBookingWhereInput[];
    id?: Prisma.IntFilter<"MultiBooking"> | number;
    ClientId?: Prisma.IntFilter<"MultiBooking"> | number;
    StartTime?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    EndTime?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    Address?: Prisma.StringFilter<"MultiBooking"> | string;
    Contact?: Prisma.StringFilter<"MultiBooking"> | string;
    BookingPrice?: Prisma.DecimalFilter<"MultiBooking"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.IntNullableFilter<"MultiBooking"> | number | null;
    AvailableTimes?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    ServiceType?: Prisma.StringFilter<"MultiBooking"> | string;
    ServiceDetails?: Prisma.StringFilter<"MultiBooking"> | string;
    BookingType?: Prisma.StringFilter<"MultiBooking"> | string;
    ServiceId?: Prisma.IntFilter<"MultiBooking"> | number;
    Status?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MultiBooking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MultiBooking"> | Date | string;
    Client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    Service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
    Booking?: Prisma.BookingListRelationFilter;
    Invoices?: Prisma.InvoiceListRelationFilter;
};
export type MultiBookingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    StartTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    EndTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    Address?: Prisma.SortOrder;
    Contact?: Prisma.SortOrder;
    BookingPrice?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrderInput | Prisma.SortOrder;
    AvailableTimes?: Prisma.SortOrderInput | Prisma.SortOrder;
    ServiceType?: Prisma.SortOrder;
    ServiceDetails?: Prisma.SortOrder;
    BookingType?: Prisma.SortOrder;
    ServiceId?: Prisma.SortOrder;
    Status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Client?: Prisma.ClientOrderByWithRelationInput;
    Service?: Prisma.ServiceOrderByWithRelationInput;
    Booking?: Prisma.BookingOrderByRelationAggregateInput;
    Invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
    _relevance?: Prisma.MultiBookingOrderByRelevanceInput;
};
export type MultiBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MultiBookingWhereInput | Prisma.MultiBookingWhereInput[];
    OR?: Prisma.MultiBookingWhereInput[];
    NOT?: Prisma.MultiBookingWhereInput | Prisma.MultiBookingWhereInput[];
    ClientId?: Prisma.IntFilter<"MultiBooking"> | number;
    StartTime?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    EndTime?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    Address?: Prisma.StringFilter<"MultiBooking"> | string;
    Contact?: Prisma.StringFilter<"MultiBooking"> | string;
    BookingPrice?: Prisma.DecimalFilter<"MultiBooking"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.IntNullableFilter<"MultiBooking"> | number | null;
    AvailableTimes?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    ServiceType?: Prisma.StringFilter<"MultiBooking"> | string;
    ServiceDetails?: Prisma.StringFilter<"MultiBooking"> | string;
    BookingType?: Prisma.StringFilter<"MultiBooking"> | string;
    ServiceId?: Prisma.IntFilter<"MultiBooking"> | number;
    Status?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MultiBooking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MultiBooking"> | Date | string;
    Client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    Service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
    Booking?: Prisma.BookingListRelationFilter;
    Invoices?: Prisma.InvoiceListRelationFilter;
}, "id">;
export type MultiBookingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    StartTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    EndTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    Address?: Prisma.SortOrder;
    Contact?: Prisma.SortOrder;
    BookingPrice?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrderInput | Prisma.SortOrder;
    AvailableTimes?: Prisma.SortOrderInput | Prisma.SortOrder;
    ServiceType?: Prisma.SortOrder;
    ServiceDetails?: Prisma.SortOrder;
    BookingType?: Prisma.SortOrder;
    ServiceId?: Prisma.SortOrder;
    Status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MultiBookingCountOrderByAggregateInput;
    _avg?: Prisma.MultiBookingAvgOrderByAggregateInput;
    _max?: Prisma.MultiBookingMaxOrderByAggregateInput;
    _min?: Prisma.MultiBookingMinOrderByAggregateInput;
    _sum?: Prisma.MultiBookingSumOrderByAggregateInput;
};
export type MultiBookingScalarWhereWithAggregatesInput = {
    AND?: Prisma.MultiBookingScalarWhereWithAggregatesInput | Prisma.MultiBookingScalarWhereWithAggregatesInput[];
    OR?: Prisma.MultiBookingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MultiBookingScalarWhereWithAggregatesInput | Prisma.MultiBookingScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MultiBooking"> | number;
    ClientId?: Prisma.IntWithAggregatesFilter<"MultiBooking"> | number;
    StartTime?: Prisma.StringNullableWithAggregatesFilter<"MultiBooking"> | string | null;
    EndTime?: Prisma.StringNullableWithAggregatesFilter<"MultiBooking"> | string | null;
    Address?: Prisma.StringWithAggregatesFilter<"MultiBooking"> | string;
    Contact?: Prisma.StringWithAggregatesFilter<"MultiBooking"> | string;
    BookingPrice?: Prisma.DecimalWithAggregatesFilter<"MultiBooking"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.IntNullableWithAggregatesFilter<"MultiBooking"> | number | null;
    AvailableTimes?: Prisma.StringNullableWithAggregatesFilter<"MultiBooking"> | string | null;
    ServiceType?: Prisma.StringWithAggregatesFilter<"MultiBooking"> | string;
    ServiceDetails?: Prisma.StringWithAggregatesFilter<"MultiBooking"> | string;
    BookingType?: Prisma.StringWithAggregatesFilter<"MultiBooking"> | string;
    ServiceId?: Prisma.IntWithAggregatesFilter<"MultiBooking"> | number;
    Status?: Prisma.StringNullableWithAggregatesFilter<"MultiBooking"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MultiBooking"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MultiBooking"> | Date | string;
};
export type MultiBookingCreateInput = {
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Client: Prisma.ClientCreateNestedOneWithoutMultiBookingInput;
    Service: Prisma.ServiceCreateNestedOneWithoutMultiBookingInput;
    Booking?: Prisma.BookingCreateNestedManyWithoutMultiBookingInput;
    Invoices?: Prisma.InvoiceCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingUncheckedCreateInput = {
    id?: number;
    ClientId: number;
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    ServiceId: number;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Booking?: Prisma.BookingUncheckedCreateNestedManyWithoutMultiBookingInput;
    Invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingUpdateInput = {
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Client?: Prisma.ClientUpdateOneRequiredWithoutMultiBookingNestedInput;
    Service?: Prisma.ServiceUpdateOneRequiredWithoutMultiBookingNestedInput;
    Booking?: Prisma.BookingUpdateManyWithoutMultiBookingNestedInput;
    Invoices?: Prisma.InvoiceUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ClientId?: Prisma.IntFieldUpdateOperationsInput | number;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceId?: Prisma.IntFieldUpdateOperationsInput | number;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: Prisma.BookingUncheckedUpdateManyWithoutMultiBookingNestedInput;
    Invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingCreateManyInput = {
    id?: number;
    ClientId: number;
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    ServiceId: number;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MultiBookingUpdateManyMutationInput = {
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MultiBookingUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ClientId?: Prisma.IntFieldUpdateOperationsInput | number;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceId?: Prisma.IntFieldUpdateOperationsInput | number;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MultiBookingListRelationFilter = {
    every?: Prisma.MultiBookingWhereInput;
    some?: Prisma.MultiBookingWhereInput;
    none?: Prisma.MultiBookingWhereInput;
};
export type MultiBookingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MultiBookingNullableScalarRelationFilter = {
    is?: Prisma.MultiBookingWhereInput | null;
    isNot?: Prisma.MultiBookingWhereInput | null;
};
export type MultiBookingOrderByRelevanceInput = {
    fields: Prisma.MultiBookingOrderByRelevanceFieldEnum | Prisma.MultiBookingOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type MultiBookingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    StartTime?: Prisma.SortOrder;
    EndTime?: Prisma.SortOrder;
    Address?: Prisma.SortOrder;
    Contact?: Prisma.SortOrder;
    BookingPrice?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    AvailableTimes?: Prisma.SortOrder;
    ServiceType?: Prisma.SortOrder;
    ServiceDetails?: Prisma.SortOrder;
    BookingType?: Prisma.SortOrder;
    ServiceId?: Prisma.SortOrder;
    Status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MultiBookingAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    BookingPrice?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    ServiceId?: Prisma.SortOrder;
};
export type MultiBookingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    StartTime?: Prisma.SortOrder;
    EndTime?: Prisma.SortOrder;
    Address?: Prisma.SortOrder;
    Contact?: Prisma.SortOrder;
    BookingPrice?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    AvailableTimes?: Prisma.SortOrder;
    ServiceType?: Prisma.SortOrder;
    ServiceDetails?: Prisma.SortOrder;
    BookingType?: Prisma.SortOrder;
    ServiceId?: Prisma.SortOrder;
    Status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MultiBookingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    StartTime?: Prisma.SortOrder;
    EndTime?: Prisma.SortOrder;
    Address?: Prisma.SortOrder;
    Contact?: Prisma.SortOrder;
    BookingPrice?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    AvailableTimes?: Prisma.SortOrder;
    ServiceType?: Prisma.SortOrder;
    ServiceDetails?: Prisma.SortOrder;
    BookingType?: Prisma.SortOrder;
    ServiceId?: Prisma.SortOrder;
    Status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MultiBookingSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ClientId?: Prisma.SortOrder;
    BookingPrice?: Prisma.SortOrder;
    NumberOfCars?: Prisma.SortOrder;
    ServiceId?: Prisma.SortOrder;
};
export type MultiBookingCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutServiceInput, Prisma.MultiBookingUncheckedCreateWithoutServiceInput> | Prisma.MultiBookingCreateWithoutServiceInput[] | Prisma.MultiBookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutServiceInput | Prisma.MultiBookingCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.MultiBookingCreateManyServiceInputEnvelope;
    connect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
};
export type MultiBookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutServiceInput, Prisma.MultiBookingUncheckedCreateWithoutServiceInput> | Prisma.MultiBookingCreateWithoutServiceInput[] | Prisma.MultiBookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutServiceInput | Prisma.MultiBookingCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.MultiBookingCreateManyServiceInputEnvelope;
    connect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
};
export type MultiBookingUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutServiceInput, Prisma.MultiBookingUncheckedCreateWithoutServiceInput> | Prisma.MultiBookingCreateWithoutServiceInput[] | Prisma.MultiBookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutServiceInput | Prisma.MultiBookingCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.MultiBookingUpsertWithWhereUniqueWithoutServiceInput | Prisma.MultiBookingUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.MultiBookingCreateManyServiceInputEnvelope;
    set?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    disconnect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    delete?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    connect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    update?: Prisma.MultiBookingUpdateWithWhereUniqueWithoutServiceInput | Prisma.MultiBookingUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.MultiBookingUpdateManyWithWhereWithoutServiceInput | Prisma.MultiBookingUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.MultiBookingScalarWhereInput | Prisma.MultiBookingScalarWhereInput[];
};
export type MultiBookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutServiceInput, Prisma.MultiBookingUncheckedCreateWithoutServiceInput> | Prisma.MultiBookingCreateWithoutServiceInput[] | Prisma.MultiBookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutServiceInput | Prisma.MultiBookingCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.MultiBookingUpsertWithWhereUniqueWithoutServiceInput | Prisma.MultiBookingUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.MultiBookingCreateManyServiceInputEnvelope;
    set?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    disconnect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    delete?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    connect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    update?: Prisma.MultiBookingUpdateWithWhereUniqueWithoutServiceInput | Prisma.MultiBookingUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.MultiBookingUpdateManyWithWhereWithoutServiceInput | Prisma.MultiBookingUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.MultiBookingScalarWhereInput | Prisma.MultiBookingScalarWhereInput[];
};
export type MultiBookingCreateNestedOneWithoutBookingInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutBookingInput, Prisma.MultiBookingUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutBookingInput;
    connect?: Prisma.MultiBookingWhereUniqueInput;
};
export type MultiBookingUpdateOneWithoutBookingNestedInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutBookingInput, Prisma.MultiBookingUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutBookingInput;
    upsert?: Prisma.MultiBookingUpsertWithoutBookingInput;
    disconnect?: Prisma.MultiBookingWhereInput | boolean;
    delete?: Prisma.MultiBookingWhereInput | boolean;
    connect?: Prisma.MultiBookingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MultiBookingUpdateToOneWithWhereWithoutBookingInput, Prisma.MultiBookingUpdateWithoutBookingInput>, Prisma.MultiBookingUncheckedUpdateWithoutBookingInput>;
};
export type MultiBookingCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutInvoicesInput, Prisma.MultiBookingUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.MultiBookingWhereUniqueInput;
};
export type MultiBookingUpdateOneWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutInvoicesInput, Prisma.MultiBookingUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.MultiBookingUpsertWithoutInvoicesInput;
    disconnect?: Prisma.MultiBookingWhereInput | boolean;
    delete?: Prisma.MultiBookingWhereInput | boolean;
    connect?: Prisma.MultiBookingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MultiBookingUpdateToOneWithWhereWithoutInvoicesInput, Prisma.MultiBookingUpdateWithoutInvoicesInput>, Prisma.MultiBookingUncheckedUpdateWithoutInvoicesInput>;
};
export type MultiBookingCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutClientInput, Prisma.MultiBookingUncheckedCreateWithoutClientInput> | Prisma.MultiBookingCreateWithoutClientInput[] | Prisma.MultiBookingUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutClientInput | Prisma.MultiBookingCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.MultiBookingCreateManyClientInputEnvelope;
    connect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
};
export type MultiBookingUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutClientInput, Prisma.MultiBookingUncheckedCreateWithoutClientInput> | Prisma.MultiBookingCreateWithoutClientInput[] | Prisma.MultiBookingUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutClientInput | Prisma.MultiBookingCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.MultiBookingCreateManyClientInputEnvelope;
    connect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
};
export type MultiBookingUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutClientInput, Prisma.MultiBookingUncheckedCreateWithoutClientInput> | Prisma.MultiBookingCreateWithoutClientInput[] | Prisma.MultiBookingUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutClientInput | Prisma.MultiBookingCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.MultiBookingUpsertWithWhereUniqueWithoutClientInput | Prisma.MultiBookingUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.MultiBookingCreateManyClientInputEnvelope;
    set?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    disconnect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    delete?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    connect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    update?: Prisma.MultiBookingUpdateWithWhereUniqueWithoutClientInput | Prisma.MultiBookingUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.MultiBookingUpdateManyWithWhereWithoutClientInput | Prisma.MultiBookingUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.MultiBookingScalarWhereInput | Prisma.MultiBookingScalarWhereInput[];
};
export type MultiBookingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.MultiBookingCreateWithoutClientInput, Prisma.MultiBookingUncheckedCreateWithoutClientInput> | Prisma.MultiBookingCreateWithoutClientInput[] | Prisma.MultiBookingUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.MultiBookingCreateOrConnectWithoutClientInput | Prisma.MultiBookingCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.MultiBookingUpsertWithWhereUniqueWithoutClientInput | Prisma.MultiBookingUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.MultiBookingCreateManyClientInputEnvelope;
    set?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    disconnect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    delete?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    connect?: Prisma.MultiBookingWhereUniqueInput | Prisma.MultiBookingWhereUniqueInput[];
    update?: Prisma.MultiBookingUpdateWithWhereUniqueWithoutClientInput | Prisma.MultiBookingUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.MultiBookingUpdateManyWithWhereWithoutClientInput | Prisma.MultiBookingUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.MultiBookingScalarWhereInput | Prisma.MultiBookingScalarWhereInput[];
};
export type MultiBookingCreateWithoutServiceInput = {
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Client: Prisma.ClientCreateNestedOneWithoutMultiBookingInput;
    Booking?: Prisma.BookingCreateNestedManyWithoutMultiBookingInput;
    Invoices?: Prisma.InvoiceCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingUncheckedCreateWithoutServiceInput = {
    id?: number;
    ClientId: number;
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Booking?: Prisma.BookingUncheckedCreateNestedManyWithoutMultiBookingInput;
    Invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingCreateOrConnectWithoutServiceInput = {
    where: Prisma.MultiBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MultiBookingCreateWithoutServiceInput, Prisma.MultiBookingUncheckedCreateWithoutServiceInput>;
};
export type MultiBookingCreateManyServiceInputEnvelope = {
    data: Prisma.MultiBookingCreateManyServiceInput | Prisma.MultiBookingCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type MultiBookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.MultiBookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.MultiBookingUpdateWithoutServiceInput, Prisma.MultiBookingUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.MultiBookingCreateWithoutServiceInput, Prisma.MultiBookingUncheckedCreateWithoutServiceInput>;
};
export type MultiBookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.MultiBookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.MultiBookingUpdateWithoutServiceInput, Prisma.MultiBookingUncheckedUpdateWithoutServiceInput>;
};
export type MultiBookingUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.MultiBookingScalarWhereInput;
    data: Prisma.XOR<Prisma.MultiBookingUpdateManyMutationInput, Prisma.MultiBookingUncheckedUpdateManyWithoutServiceInput>;
};
export type MultiBookingScalarWhereInput = {
    AND?: Prisma.MultiBookingScalarWhereInput | Prisma.MultiBookingScalarWhereInput[];
    OR?: Prisma.MultiBookingScalarWhereInput[];
    NOT?: Prisma.MultiBookingScalarWhereInput | Prisma.MultiBookingScalarWhereInput[];
    id?: Prisma.IntFilter<"MultiBooking"> | number;
    ClientId?: Prisma.IntFilter<"MultiBooking"> | number;
    StartTime?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    EndTime?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    Address?: Prisma.StringFilter<"MultiBooking"> | string;
    Contact?: Prisma.StringFilter<"MultiBooking"> | string;
    BookingPrice?: Prisma.DecimalFilter<"MultiBooking"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.IntNullableFilter<"MultiBooking"> | number | null;
    AvailableTimes?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    ServiceType?: Prisma.StringFilter<"MultiBooking"> | string;
    ServiceDetails?: Prisma.StringFilter<"MultiBooking"> | string;
    BookingType?: Prisma.StringFilter<"MultiBooking"> | string;
    ServiceId?: Prisma.IntFilter<"MultiBooking"> | number;
    Status?: Prisma.StringNullableFilter<"MultiBooking"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MultiBooking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MultiBooking"> | Date | string;
};
export type MultiBookingCreateWithoutBookingInput = {
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Client: Prisma.ClientCreateNestedOneWithoutMultiBookingInput;
    Service: Prisma.ServiceCreateNestedOneWithoutMultiBookingInput;
    Invoices?: Prisma.InvoiceCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingUncheckedCreateWithoutBookingInput = {
    id?: number;
    ClientId: number;
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    ServiceId: number;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingCreateOrConnectWithoutBookingInput = {
    where: Prisma.MultiBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MultiBookingCreateWithoutBookingInput, Prisma.MultiBookingUncheckedCreateWithoutBookingInput>;
};
export type MultiBookingUpsertWithoutBookingInput = {
    update: Prisma.XOR<Prisma.MultiBookingUpdateWithoutBookingInput, Prisma.MultiBookingUncheckedUpdateWithoutBookingInput>;
    create: Prisma.XOR<Prisma.MultiBookingCreateWithoutBookingInput, Prisma.MultiBookingUncheckedCreateWithoutBookingInput>;
    where?: Prisma.MultiBookingWhereInput;
};
export type MultiBookingUpdateToOneWithWhereWithoutBookingInput = {
    where?: Prisma.MultiBookingWhereInput;
    data: Prisma.XOR<Prisma.MultiBookingUpdateWithoutBookingInput, Prisma.MultiBookingUncheckedUpdateWithoutBookingInput>;
};
export type MultiBookingUpdateWithoutBookingInput = {
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Client?: Prisma.ClientUpdateOneRequiredWithoutMultiBookingNestedInput;
    Service?: Prisma.ServiceUpdateOneRequiredWithoutMultiBookingNestedInput;
    Invoices?: Prisma.InvoiceUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingUncheckedUpdateWithoutBookingInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ClientId?: Prisma.IntFieldUpdateOperationsInput | number;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceId?: Prisma.IntFieldUpdateOperationsInput | number;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingCreateWithoutInvoicesInput = {
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Client: Prisma.ClientCreateNestedOneWithoutMultiBookingInput;
    Service: Prisma.ServiceCreateNestedOneWithoutMultiBookingInput;
    Booking?: Prisma.BookingCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingUncheckedCreateWithoutInvoicesInput = {
    id?: number;
    ClientId: number;
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    ServiceId: number;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Booking?: Prisma.BookingUncheckedCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.MultiBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MultiBookingCreateWithoutInvoicesInput, Prisma.MultiBookingUncheckedCreateWithoutInvoicesInput>;
};
export type MultiBookingUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.MultiBookingUpdateWithoutInvoicesInput, Prisma.MultiBookingUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.MultiBookingCreateWithoutInvoicesInput, Prisma.MultiBookingUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.MultiBookingWhereInput;
};
export type MultiBookingUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.MultiBookingWhereInput;
    data: Prisma.XOR<Prisma.MultiBookingUpdateWithoutInvoicesInput, Prisma.MultiBookingUncheckedUpdateWithoutInvoicesInput>;
};
export type MultiBookingUpdateWithoutInvoicesInput = {
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Client?: Prisma.ClientUpdateOneRequiredWithoutMultiBookingNestedInput;
    Service?: Prisma.ServiceUpdateOneRequiredWithoutMultiBookingNestedInput;
    Booking?: Prisma.BookingUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ClientId?: Prisma.IntFieldUpdateOperationsInput | number;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceId?: Prisma.IntFieldUpdateOperationsInput | number;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: Prisma.BookingUncheckedUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingCreateWithoutClientInput = {
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Service: Prisma.ServiceCreateNestedOneWithoutMultiBookingInput;
    Booking?: Prisma.BookingCreateNestedManyWithoutMultiBookingInput;
    Invoices?: Prisma.InvoiceCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingUncheckedCreateWithoutClientInput = {
    id?: number;
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    ServiceId: number;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Booking?: Prisma.BookingUncheckedCreateNestedManyWithoutMultiBookingInput;
    Invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMultiBookingInput;
};
export type MultiBookingCreateOrConnectWithoutClientInput = {
    where: Prisma.MultiBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.MultiBookingCreateWithoutClientInput, Prisma.MultiBookingUncheckedCreateWithoutClientInput>;
};
export type MultiBookingCreateManyClientInputEnvelope = {
    data: Prisma.MultiBookingCreateManyClientInput | Prisma.MultiBookingCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type MultiBookingUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.MultiBookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.MultiBookingUpdateWithoutClientInput, Prisma.MultiBookingUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.MultiBookingCreateWithoutClientInput, Prisma.MultiBookingUncheckedCreateWithoutClientInput>;
};
export type MultiBookingUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.MultiBookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.MultiBookingUpdateWithoutClientInput, Prisma.MultiBookingUncheckedUpdateWithoutClientInput>;
};
export type MultiBookingUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.MultiBookingScalarWhereInput;
    data: Prisma.XOR<Prisma.MultiBookingUpdateManyMutationInput, Prisma.MultiBookingUncheckedUpdateManyWithoutClientInput>;
};
export type MultiBookingCreateManyServiceInput = {
    id?: number;
    ClientId: number;
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MultiBookingUpdateWithoutServiceInput = {
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Client?: Prisma.ClientUpdateOneRequiredWithoutMultiBookingNestedInput;
    Booking?: Prisma.BookingUpdateManyWithoutMultiBookingNestedInput;
    Invoices?: Prisma.InvoiceUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ClientId?: Prisma.IntFieldUpdateOperationsInput | number;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: Prisma.BookingUncheckedUpdateManyWithoutMultiBookingNestedInput;
    Invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ClientId?: Prisma.IntFieldUpdateOperationsInput | number;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MultiBookingCreateManyClientInput = {
    id?: number;
    StartTime?: string | null;
    EndTime?: string | null;
    Address: string;
    Contact: string;
    BookingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: number | null;
    AvailableTimes?: string | null;
    ServiceType: string;
    ServiceDetails: string;
    BookingType: string;
    ServiceId: number;
    Status?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MultiBookingUpdateWithoutClientInput = {
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Service?: Prisma.ServiceUpdateOneRequiredWithoutMultiBookingNestedInput;
    Booking?: Prisma.BookingUpdateManyWithoutMultiBookingNestedInput;
    Invoices?: Prisma.InvoiceUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingUncheckedUpdateWithoutClientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceId?: Prisma.IntFieldUpdateOperationsInput | number;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: Prisma.BookingUncheckedUpdateManyWithoutMultiBookingNestedInput;
    Invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMultiBookingNestedInput;
};
export type MultiBookingUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    StartTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EndTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    Address?: Prisma.StringFieldUpdateOperationsInput | string;
    Contact?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    NumberOfCars?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    AvailableTimes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ServiceType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceDetails?: Prisma.StringFieldUpdateOperationsInput | string;
    BookingType?: Prisma.StringFieldUpdateOperationsInput | string;
    ServiceId?: Prisma.IntFieldUpdateOperationsInput | number;
    Status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MultiBookingCountOutputType
 */
export type MultiBookingCountOutputType = {
    Booking: number;
    Invoices: number;
};
export type MultiBookingCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Booking?: boolean | MultiBookingCountOutputTypeCountBookingArgs;
    Invoices?: boolean | MultiBookingCountOutputTypeCountInvoicesArgs;
};
/**
 * MultiBookingCountOutputType without action
 */
export type MultiBookingCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiBookingCountOutputType
     */
    select?: Prisma.MultiBookingCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MultiBookingCountOutputType without action
 */
export type MultiBookingCountOutputTypeCountBookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
};
/**
 * MultiBookingCountOutputType without action
 */
export type MultiBookingCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type MultiBookingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ClientId?: boolean;
    StartTime?: boolean;
    EndTime?: boolean;
    Address?: boolean;
    Contact?: boolean;
    BookingPrice?: boolean;
    NumberOfCars?: boolean;
    AvailableTimes?: boolean;
    ServiceType?: boolean;
    ServiceDetails?: boolean;
    BookingType?: boolean;
    ServiceId?: boolean;
    Status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    Service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    Booking?: boolean | Prisma.MultiBooking$BookingArgs<ExtArgs>;
    Invoices?: boolean | Prisma.MultiBooking$InvoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.MultiBookingCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["multiBooking"]>;
export type MultiBookingSelectScalar = {
    id?: boolean;
    ClientId?: boolean;
    StartTime?: boolean;
    EndTime?: boolean;
    Address?: boolean;
    Contact?: boolean;
    BookingPrice?: boolean;
    NumberOfCars?: boolean;
    AvailableTimes?: boolean;
    ServiceType?: boolean;
    ServiceDetails?: boolean;
    BookingType?: boolean;
    ServiceId?: boolean;
    Status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MultiBookingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ClientId" | "StartTime" | "EndTime" | "Address" | "Contact" | "BookingPrice" | "NumberOfCars" | "AvailableTimes" | "ServiceType" | "ServiceDetails" | "BookingType" | "ServiceId" | "Status" | "createdAt" | "updatedAt", ExtArgs["result"]["multiBooking"]>;
export type MultiBookingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    Service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    Booking?: boolean | Prisma.MultiBooking$BookingArgs<ExtArgs>;
    Invoices?: boolean | Prisma.MultiBooking$InvoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.MultiBookingCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MultiBookingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MultiBooking";
    objects: {
        Client: Prisma.$ClientPayload<ExtArgs>;
        Service: Prisma.$ServicePayload<ExtArgs>;
        Booking: Prisma.$BookingPayload<ExtArgs>[];
        Invoices: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ClientId: number;
        StartTime: string | null;
        EndTime: string | null;
        Address: string;
        Contact: string;
        BookingPrice: runtime.Decimal;
        NumberOfCars: number | null;
        AvailableTimes: string | null;
        ServiceType: string;
        ServiceDetails: string;
        BookingType: string;
        ServiceId: number;
        Status: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["multiBooking"]>;
    composites: {};
};
export type MultiBookingGetPayload<S extends boolean | null | undefined | MultiBookingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload, S>;
export type MultiBookingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MultiBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MultiBookingCountAggregateInputType | true;
};
export interface MultiBookingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MultiBooking'];
        meta: {
            name: 'MultiBooking';
        };
    };
    /**
     * Find zero or one MultiBooking that matches the filter.
     * @param {MultiBookingFindUniqueArgs} args - Arguments to find a MultiBooking
     * @example
     * // Get one MultiBooking
     * const multiBooking = await prisma.multiBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MultiBookingFindUniqueArgs>(args: Prisma.SelectSubset<T, MultiBookingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MultiBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MultiBookingFindUniqueOrThrowArgs} args - Arguments to find a MultiBooking
     * @example
     * // Get one MultiBooking
     * const multiBooking = await prisma.multiBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MultiBookingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MultiBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MultiBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiBookingFindFirstArgs} args - Arguments to find a MultiBooking
     * @example
     * // Get one MultiBooking
     * const multiBooking = await prisma.multiBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MultiBookingFindFirstArgs>(args?: Prisma.SelectSubset<T, MultiBookingFindFirstArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MultiBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiBookingFindFirstOrThrowArgs} args - Arguments to find a MultiBooking
     * @example
     * // Get one MultiBooking
     * const multiBooking = await prisma.multiBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MultiBookingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MultiBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MultiBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MultiBookings
     * const multiBookings = await prisma.multiBooking.findMany()
     *
     * // Get first 10 MultiBookings
     * const multiBookings = await prisma.multiBooking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const multiBookingWithIdOnly = await prisma.multiBooking.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MultiBookingFindManyArgs>(args?: Prisma.SelectSubset<T, MultiBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MultiBooking.
     * @param {MultiBookingCreateArgs} args - Arguments to create a MultiBooking.
     * @example
     * // Create one MultiBooking
     * const MultiBooking = await prisma.multiBooking.create({
     *   data: {
     *     // ... data to create a MultiBooking
     *   }
     * })
     *
     */
    create<T extends MultiBookingCreateArgs>(args: Prisma.SelectSubset<T, MultiBookingCreateArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MultiBookings.
     * @param {MultiBookingCreateManyArgs} args - Arguments to create many MultiBookings.
     * @example
     * // Create many MultiBookings
     * const multiBooking = await prisma.multiBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MultiBookingCreateManyArgs>(args?: Prisma.SelectSubset<T, MultiBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a MultiBooking.
     * @param {MultiBookingDeleteArgs} args - Arguments to delete one MultiBooking.
     * @example
     * // Delete one MultiBooking
     * const MultiBooking = await prisma.multiBooking.delete({
     *   where: {
     *     // ... filter to delete one MultiBooking
     *   }
     * })
     *
     */
    delete<T extends MultiBookingDeleteArgs>(args: Prisma.SelectSubset<T, MultiBookingDeleteArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MultiBooking.
     * @param {MultiBookingUpdateArgs} args - Arguments to update one MultiBooking.
     * @example
     * // Update one MultiBooking
     * const multiBooking = await prisma.multiBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MultiBookingUpdateArgs>(args: Prisma.SelectSubset<T, MultiBookingUpdateArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MultiBookings.
     * @param {MultiBookingDeleteManyArgs} args - Arguments to filter MultiBookings to delete.
     * @example
     * // Delete a few MultiBookings
     * const { count } = await prisma.multiBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MultiBookingDeleteManyArgs>(args?: Prisma.SelectSubset<T, MultiBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MultiBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MultiBookings
     * const multiBooking = await prisma.multiBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MultiBookingUpdateManyArgs>(args: Prisma.SelectSubset<T, MultiBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one MultiBooking.
     * @param {MultiBookingUpsertArgs} args - Arguments to update or create a MultiBooking.
     * @example
     * // Update or create a MultiBooking
     * const multiBooking = await prisma.multiBooking.upsert({
     *   create: {
     *     // ... data to create a MultiBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MultiBooking we want to update
     *   }
     * })
     */
    upsert<T extends MultiBookingUpsertArgs>(args: Prisma.SelectSubset<T, MultiBookingUpsertArgs<ExtArgs>>): Prisma.Prisma__MultiBookingClient<runtime.Types.Result.GetResult<Prisma.$MultiBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MultiBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiBookingCountArgs} args - Arguments to filter MultiBookings to count.
     * @example
     * // Count the number of MultiBookings
     * const count = await prisma.multiBooking.count({
     *   where: {
     *     // ... the filter for the MultiBookings we want to count
     *   }
     * })
    **/
    count<T extends MultiBookingCountArgs>(args?: Prisma.Subset<T, MultiBookingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MultiBookingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MultiBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MultiBookingAggregateArgs>(args: Prisma.Subset<T, MultiBookingAggregateArgs>): Prisma.PrismaPromise<GetMultiBookingAggregateType<T>>;
    /**
     * Group by MultiBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiBookingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MultiBookingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MultiBookingGroupByArgs['orderBy'];
    } : {
        orderBy?: MultiBookingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MultiBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMultiBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MultiBooking model
     */
    readonly fields: MultiBookingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MultiBooking.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MultiBookingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Service<T extends Prisma.ServiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServiceDefaultArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Booking<T extends Prisma.MultiBooking$BookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MultiBooking$BookingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Invoices<T extends Prisma.MultiBooking$InvoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MultiBooking$InvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MultiBooking model
 */
export interface MultiBookingFieldRefs {
    readonly id: Prisma.FieldRef<"MultiBooking", 'Int'>;
    readonly ClientId: Prisma.FieldRef<"MultiBooking", 'Int'>;
    readonly StartTime: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly EndTime: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly Address: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly Contact: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly BookingPrice: Prisma.FieldRef<"MultiBooking", 'Decimal'>;
    readonly NumberOfCars: Prisma.FieldRef<"MultiBooking", 'Int'>;
    readonly AvailableTimes: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly ServiceType: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly ServiceDetails: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly BookingType: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly ServiceId: Prisma.FieldRef<"MultiBooking", 'Int'>;
    readonly Status: Prisma.FieldRef<"MultiBooking", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MultiBooking", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MultiBooking", 'DateTime'>;
}
/**
 * MultiBooking findUnique
 */
export type MultiBookingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MultiBooking to fetch.
     */
    where: Prisma.MultiBookingWhereUniqueInput;
};
/**
 * MultiBooking findUniqueOrThrow
 */
export type MultiBookingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MultiBooking to fetch.
     */
    where: Prisma.MultiBookingWhereUniqueInput;
};
/**
 * MultiBooking findFirst
 */
export type MultiBookingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MultiBooking to fetch.
     */
    where?: Prisma.MultiBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MultiBookings to fetch.
     */
    orderBy?: Prisma.MultiBookingOrderByWithRelationInput | Prisma.MultiBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MultiBookings.
     */
    cursor?: Prisma.MultiBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MultiBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MultiBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MultiBookings.
     */
    distinct?: Prisma.MultiBookingScalarFieldEnum | Prisma.MultiBookingScalarFieldEnum[];
};
/**
 * MultiBooking findFirstOrThrow
 */
export type MultiBookingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MultiBooking to fetch.
     */
    where?: Prisma.MultiBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MultiBookings to fetch.
     */
    orderBy?: Prisma.MultiBookingOrderByWithRelationInput | Prisma.MultiBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MultiBookings.
     */
    cursor?: Prisma.MultiBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MultiBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MultiBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MultiBookings.
     */
    distinct?: Prisma.MultiBookingScalarFieldEnum | Prisma.MultiBookingScalarFieldEnum[];
};
/**
 * MultiBooking findMany
 */
export type MultiBookingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MultiBookings to fetch.
     */
    where?: Prisma.MultiBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MultiBookings to fetch.
     */
    orderBy?: Prisma.MultiBookingOrderByWithRelationInput | Prisma.MultiBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MultiBookings.
     */
    cursor?: Prisma.MultiBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MultiBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MultiBookings.
     */
    skip?: number;
    distinct?: Prisma.MultiBookingScalarFieldEnum | Prisma.MultiBookingScalarFieldEnum[];
};
/**
 * MultiBooking create
 */
export type MultiBookingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a MultiBooking.
     */
    data: Prisma.XOR<Prisma.MultiBookingCreateInput, Prisma.MultiBookingUncheckedCreateInput>;
};
/**
 * MultiBooking createMany
 */
export type MultiBookingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MultiBookings.
     */
    data: Prisma.MultiBookingCreateManyInput | Prisma.MultiBookingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MultiBooking update
 */
export type MultiBookingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a MultiBooking.
     */
    data: Prisma.XOR<Prisma.MultiBookingUpdateInput, Prisma.MultiBookingUncheckedUpdateInput>;
    /**
     * Choose, which MultiBooking to update.
     */
    where: Prisma.MultiBookingWhereUniqueInput;
};
/**
 * MultiBooking updateMany
 */
export type MultiBookingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MultiBookings.
     */
    data: Prisma.XOR<Prisma.MultiBookingUpdateManyMutationInput, Prisma.MultiBookingUncheckedUpdateManyInput>;
    /**
     * Filter which MultiBookings to update
     */
    where?: Prisma.MultiBookingWhereInput;
    /**
     * Limit how many MultiBookings to update.
     */
    limit?: number;
};
/**
 * MultiBooking upsert
 */
export type MultiBookingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the MultiBooking to update in case it exists.
     */
    where: Prisma.MultiBookingWhereUniqueInput;
    /**
     * In case the MultiBooking found by the `where` argument doesn't exist, create a new MultiBooking with this data.
     */
    create: Prisma.XOR<Prisma.MultiBookingCreateInput, Prisma.MultiBookingUncheckedCreateInput>;
    /**
     * In case the MultiBooking was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MultiBookingUpdateInput, Prisma.MultiBookingUncheckedUpdateInput>;
};
/**
 * MultiBooking delete
 */
export type MultiBookingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which MultiBooking to delete.
     */
    where: Prisma.MultiBookingWhereUniqueInput;
};
/**
 * MultiBooking deleteMany
 */
export type MultiBookingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MultiBookings to delete
     */
    where?: Prisma.MultiBookingWhereInput;
    /**
     * Limit how many MultiBookings to delete.
     */
    limit?: number;
};
/**
 * MultiBooking.Booking
 */
export type MultiBooking$BookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
/**
 * MultiBooking.Invoices
 */
export type MultiBooking$InvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
/**
 * MultiBooking without action
 */
export type MultiBookingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=MultiBooking.d.ts.map