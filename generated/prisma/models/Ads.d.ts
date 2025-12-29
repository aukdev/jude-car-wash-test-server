import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Ads
 *
 */
export type AdsModel = runtime.Types.Result.DefaultSelection<Prisma.$AdsPayload>;
export type AggregateAds = {
    _count: AdsCountAggregateOutputType | null;
    _avg: AdsAvgAggregateOutputType | null;
    _sum: AdsSumAggregateOutputType | null;
    _min: AdsMinAggregateOutputType | null;
    _max: AdsMaxAggregateOutputType | null;
};
export type AdsAvgAggregateOutputType = {
    id: number | null;
};
export type AdsSumAggregateOutputType = {
    id: number | null;
};
export type AdsMinAggregateOutputType = {
    id: number | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdsMaxAggregateOutputType = {
    id: number | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdsCountAggregateOutputType = {
    id: number;
    image: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AdsAvgAggregateInputType = {
    id?: true;
};
export type AdsSumAggregateInputType = {
    id?: true;
};
export type AdsMinAggregateInputType = {
    id?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdsMaxAggregateInputType = {
    id?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdsCountAggregateInputType = {
    id?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AdsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Ads to aggregate.
     */
    where?: Prisma.AdsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ads to fetch.
     */
    orderBy?: Prisma.AdsOrderByWithRelationInput | Prisma.AdsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Ads
    **/
    _count?: true | AdsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AdsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AdsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdsMaxAggregateInputType;
};
export type GetAdsAggregateType<T extends AdsAggregateArgs> = {
    [P in keyof T & keyof AggregateAds]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAds[P]> : Prisma.GetScalarType<T[P], AggregateAds[P]>;
};
export type AdsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdsWhereInput;
    orderBy?: Prisma.AdsOrderByWithAggregationInput | Prisma.AdsOrderByWithAggregationInput[];
    by: Prisma.AdsScalarFieldEnum[] | Prisma.AdsScalarFieldEnum;
    having?: Prisma.AdsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdsCountAggregateInputType | true;
    _avg?: AdsAvgAggregateInputType;
    _sum?: AdsSumAggregateInputType;
    _min?: AdsMinAggregateInputType;
    _max?: AdsMaxAggregateInputType;
};
export type AdsGroupByOutputType = {
    id: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AdsCountAggregateOutputType | null;
    _avg: AdsAvgAggregateOutputType | null;
    _sum: AdsSumAggregateOutputType | null;
    _min: AdsMinAggregateOutputType | null;
    _max: AdsMaxAggregateOutputType | null;
};
type GetAdsGroupByPayload<T extends AdsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdsGroupByOutputType[P]>;
}>>;
export type AdsWhereInput = {
    AND?: Prisma.AdsWhereInput | Prisma.AdsWhereInput[];
    OR?: Prisma.AdsWhereInput[];
    NOT?: Prisma.AdsWhereInput | Prisma.AdsWhereInput[];
    id?: Prisma.IntFilter<"Ads"> | number;
    image?: Prisma.StringFilter<"Ads"> | string;
    createdAt?: Prisma.DateTimeFilter<"Ads"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ads"> | Date | string;
};
export type AdsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.AdsOrderByRelevanceInput;
};
export type AdsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AdsWhereInput | Prisma.AdsWhereInput[];
    OR?: Prisma.AdsWhereInput[];
    NOT?: Prisma.AdsWhereInput | Prisma.AdsWhereInput[];
    image?: Prisma.StringFilter<"Ads"> | string;
    createdAt?: Prisma.DateTimeFilter<"Ads"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ads"> | Date | string;
}, "id">;
export type AdsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AdsCountOrderByAggregateInput;
    _avg?: Prisma.AdsAvgOrderByAggregateInput;
    _max?: Prisma.AdsMaxOrderByAggregateInput;
    _min?: Prisma.AdsMinOrderByAggregateInput;
    _sum?: Prisma.AdsSumOrderByAggregateInput;
};
export type AdsScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdsScalarWhereWithAggregatesInput | Prisma.AdsScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdsScalarWhereWithAggregatesInput | Prisma.AdsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Ads"> | number;
    image?: Prisma.StringWithAggregatesFilter<"Ads"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ads"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Ads"> | Date | string;
};
export type AdsCreateInput = {
    image: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdsUncheckedCreateInput = {
    id?: number;
    image: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdsUpdateInput = {
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdsCreateManyInput = {
    id?: number;
    image: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdsUpdateManyMutationInput = {
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdsOrderByRelevanceInput = {
    fields: Prisma.AdsOrderByRelevanceFieldEnum | Prisma.AdsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AdsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ads"]>;
export type AdsSelectScalar = {
    id?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AdsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["ads"]>;
export type $AdsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ads";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["ads"]>;
    composites: {};
};
export type AdsGetPayload<S extends boolean | null | undefined | AdsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdsPayload, S>;
export type AdsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdsCountAggregateInputType | true;
};
export interface AdsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ads'];
        meta: {
            name: 'Ads';
        };
    };
    /**
     * Find zero or one Ads that matches the filter.
     * @param {AdsFindUniqueArgs} args - Arguments to find a Ads
     * @example
     * // Get one Ads
     * const ads = await prisma.ads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdsFindUniqueArgs>(args: Prisma.SelectSubset<T, AdsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdsClient<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdsFindUniqueOrThrowArgs} args - Arguments to find a Ads
     * @example
     * // Get one Ads
     * const ads = await prisma.ads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdsClient<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdsFindFirstArgs} args - Arguments to find a Ads
     * @example
     * // Get one Ads
     * const ads = await prisma.ads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdsFindFirstArgs>(args?: Prisma.SelectSubset<T, AdsFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdsClient<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdsFindFirstOrThrowArgs} args - Arguments to find a Ads
     * @example
     * // Get one Ads
     * const ads = await prisma.ads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdsClient<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ads
     * const ads = await prisma.ads.findMany()
     *
     * // Get first 10 Ads
     * const ads = await prisma.ads.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adsWithIdOnly = await prisma.ads.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdsFindManyArgs>(args?: Prisma.SelectSubset<T, AdsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ads.
     * @param {AdsCreateArgs} args - Arguments to create a Ads.
     * @example
     * // Create one Ads
     * const Ads = await prisma.ads.create({
     *   data: {
     *     // ... data to create a Ads
     *   }
     * })
     *
     */
    create<T extends AdsCreateArgs>(args: Prisma.SelectSubset<T, AdsCreateArgs<ExtArgs>>): Prisma.Prisma__AdsClient<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ads.
     * @param {AdsCreateManyArgs} args - Arguments to create many Ads.
     * @example
     * // Create many Ads
     * const ads = await prisma.ads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdsCreateManyArgs>(args?: Prisma.SelectSubset<T, AdsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Ads.
     * @param {AdsDeleteArgs} args - Arguments to delete one Ads.
     * @example
     * // Delete one Ads
     * const Ads = await prisma.ads.delete({
     *   where: {
     *     // ... filter to delete one Ads
     *   }
     * })
     *
     */
    delete<T extends AdsDeleteArgs>(args: Prisma.SelectSubset<T, AdsDeleteArgs<ExtArgs>>): Prisma.Prisma__AdsClient<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ads.
     * @param {AdsUpdateArgs} args - Arguments to update one Ads.
     * @example
     * // Update one Ads
     * const ads = await prisma.ads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdsUpdateArgs>(args: Prisma.SelectSubset<T, AdsUpdateArgs<ExtArgs>>): Prisma.Prisma__AdsClient<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ads.
     * @param {AdsDeleteManyArgs} args - Arguments to filter Ads to delete.
     * @example
     * // Delete a few Ads
     * const { count } = await prisma.ads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdsDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ads
     * const ads = await prisma.ads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdsUpdateManyArgs>(args: Prisma.SelectSubset<T, AdsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Ads.
     * @param {AdsUpsertArgs} args - Arguments to update or create a Ads.
     * @example
     * // Update or create a Ads
     * const ads = await prisma.ads.upsert({
     *   create: {
     *     // ... data to create a Ads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ads we want to update
     *   }
     * })
     */
    upsert<T extends AdsUpsertArgs>(args: Prisma.SelectSubset<T, AdsUpsertArgs<ExtArgs>>): Prisma.Prisma__AdsClient<runtime.Types.Result.GetResult<Prisma.$AdsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdsCountArgs} args - Arguments to filter Ads to count.
     * @example
     * // Count the number of Ads
     * const count = await prisma.ads.count({
     *   where: {
     *     // ... the filter for the Ads we want to count
     *   }
     * })
    **/
    count<T extends AdsCountArgs>(args?: Prisma.Subset<T, AdsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdsAggregateArgs>(args: Prisma.Subset<T, AdsAggregateArgs>): Prisma.PrismaPromise<GetAdsAggregateType<T>>;
    /**
     * Group by Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AdsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdsGroupByArgs['orderBy'];
    } : {
        orderBy?: AdsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Ads model
     */
    readonly fields: AdsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Ads.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the Ads model
 */
export interface AdsFieldRefs {
    readonly id: Prisma.FieldRef<"Ads", 'Int'>;
    readonly image: Prisma.FieldRef<"Ads", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Ads", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Ads", 'DateTime'>;
}
/**
 * Ads findUnique
 */
export type AdsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * Filter, which Ads to fetch.
     */
    where: Prisma.AdsWhereUniqueInput;
};
/**
 * Ads findUniqueOrThrow
 */
export type AdsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * Filter, which Ads to fetch.
     */
    where: Prisma.AdsWhereUniqueInput;
};
/**
 * Ads findFirst
 */
export type AdsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * Filter, which Ads to fetch.
     */
    where?: Prisma.AdsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ads to fetch.
     */
    orderBy?: Prisma.AdsOrderByWithRelationInput | Prisma.AdsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ads.
     */
    cursor?: Prisma.AdsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ads.
     */
    distinct?: Prisma.AdsScalarFieldEnum | Prisma.AdsScalarFieldEnum[];
};
/**
 * Ads findFirstOrThrow
 */
export type AdsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * Filter, which Ads to fetch.
     */
    where?: Prisma.AdsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ads to fetch.
     */
    orderBy?: Prisma.AdsOrderByWithRelationInput | Prisma.AdsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ads.
     */
    cursor?: Prisma.AdsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ads.
     */
    distinct?: Prisma.AdsScalarFieldEnum | Prisma.AdsScalarFieldEnum[];
};
/**
 * Ads findMany
 */
export type AdsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * Filter, which Ads to fetch.
     */
    where?: Prisma.AdsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ads to fetch.
     */
    orderBy?: Prisma.AdsOrderByWithRelationInput | Prisma.AdsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Ads.
     */
    cursor?: Prisma.AdsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ads.
     */
    skip?: number;
    distinct?: Prisma.AdsScalarFieldEnum | Prisma.AdsScalarFieldEnum[];
};
/**
 * Ads create
 */
export type AdsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * The data needed to create a Ads.
     */
    data: Prisma.XOR<Prisma.AdsCreateInput, Prisma.AdsUncheckedCreateInput>;
};
/**
 * Ads createMany
 */
export type AdsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ads.
     */
    data: Prisma.AdsCreateManyInput | Prisma.AdsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Ads update
 */
export type AdsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * The data needed to update a Ads.
     */
    data: Prisma.XOR<Prisma.AdsUpdateInput, Prisma.AdsUncheckedUpdateInput>;
    /**
     * Choose, which Ads to update.
     */
    where: Prisma.AdsWhereUniqueInput;
};
/**
 * Ads updateMany
 */
export type AdsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Ads.
     */
    data: Prisma.XOR<Prisma.AdsUpdateManyMutationInput, Prisma.AdsUncheckedUpdateManyInput>;
    /**
     * Filter which Ads to update
     */
    where?: Prisma.AdsWhereInput;
    /**
     * Limit how many Ads to update.
     */
    limit?: number;
};
/**
 * Ads upsert
 */
export type AdsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * The filter to search for the Ads to update in case it exists.
     */
    where: Prisma.AdsWhereUniqueInput;
    /**
     * In case the Ads found by the `where` argument doesn't exist, create a new Ads with this data.
     */
    create: Prisma.XOR<Prisma.AdsCreateInput, Prisma.AdsUncheckedCreateInput>;
    /**
     * In case the Ads was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdsUpdateInput, Prisma.AdsUncheckedUpdateInput>;
};
/**
 * Ads delete
 */
export type AdsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
    /**
     * Filter which Ads to delete.
     */
    where: Prisma.AdsWhereUniqueInput;
};
/**
 * Ads deleteMany
 */
export type AdsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Ads to delete
     */
    where?: Prisma.AdsWhereInput;
    /**
     * Limit how many Ads to delete.
     */
    limit?: number;
};
/**
 * Ads without action
 */
export type AdsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ads
     */
    select?: Prisma.AdsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ads
     */
    omit?: Prisma.AdsOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Ads.d.ts.map