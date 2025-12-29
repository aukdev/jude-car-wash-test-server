import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MainPDF
 *
 */
export type MainPDFModel = runtime.Types.Result.DefaultSelection<Prisma.$MainPDFPayload>;
export type AggregateMainPDF = {
    _count: MainPDFCountAggregateOutputType | null;
    _avg: MainPDFAvgAggregateOutputType | null;
    _sum: MainPDFSumAggregateOutputType | null;
    _min: MainPDFMinAggregateOutputType | null;
    _max: MainPDFMaxAggregateOutputType | null;
};
export type MainPDFAvgAggregateOutputType = {
    id: number | null;
};
export type MainPDFSumAggregateOutputType = {
    id: number | null;
};
export type MainPDFMinAggregateOutputType = {
    id: number | null;
    File: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MainPDFMaxAggregateOutputType = {
    id: number | null;
    File: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MainPDFCountAggregateOutputType = {
    id: number;
    File: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MainPDFAvgAggregateInputType = {
    id?: true;
};
export type MainPDFSumAggregateInputType = {
    id?: true;
};
export type MainPDFMinAggregateInputType = {
    id?: true;
    File?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MainPDFMaxAggregateInputType = {
    id?: true;
    File?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MainPDFCountAggregateInputType = {
    id?: true;
    File?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MainPDFAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MainPDF to aggregate.
     */
    where?: Prisma.MainPDFWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MainPDFS to fetch.
     */
    orderBy?: Prisma.MainPDFOrderByWithRelationInput | Prisma.MainPDFOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MainPDFWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MainPDFS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MainPDFS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MainPDFS
    **/
    _count?: true | MainPDFCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MainPDFAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MainPDFSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MainPDFMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MainPDFMaxAggregateInputType;
};
export type GetMainPDFAggregateType<T extends MainPDFAggregateArgs> = {
    [P in keyof T & keyof AggregateMainPDF]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMainPDF[P]> : Prisma.GetScalarType<T[P], AggregateMainPDF[P]>;
};
export type MainPDFGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MainPDFWhereInput;
    orderBy?: Prisma.MainPDFOrderByWithAggregationInput | Prisma.MainPDFOrderByWithAggregationInput[];
    by: Prisma.MainPDFScalarFieldEnum[] | Prisma.MainPDFScalarFieldEnum;
    having?: Prisma.MainPDFScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MainPDFCountAggregateInputType | true;
    _avg?: MainPDFAvgAggregateInputType;
    _sum?: MainPDFSumAggregateInputType;
    _min?: MainPDFMinAggregateInputType;
    _max?: MainPDFMaxAggregateInputType;
};
export type MainPDFGroupByOutputType = {
    id: number;
    File: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MainPDFCountAggregateOutputType | null;
    _avg: MainPDFAvgAggregateOutputType | null;
    _sum: MainPDFSumAggregateOutputType | null;
    _min: MainPDFMinAggregateOutputType | null;
    _max: MainPDFMaxAggregateOutputType | null;
};
type GetMainPDFGroupByPayload<T extends MainPDFGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MainPDFGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MainPDFGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MainPDFGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MainPDFGroupByOutputType[P]>;
}>>;
export type MainPDFWhereInput = {
    AND?: Prisma.MainPDFWhereInput | Prisma.MainPDFWhereInput[];
    OR?: Prisma.MainPDFWhereInput[];
    NOT?: Prisma.MainPDFWhereInput | Prisma.MainPDFWhereInput[];
    id?: Prisma.IntFilter<"MainPDF"> | number;
    File?: Prisma.StringFilter<"MainPDF"> | string;
    createdAt?: Prisma.DateTimeFilter<"MainPDF"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MainPDF"> | Date | string;
};
export type MainPDFOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    File?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.MainPDFOrderByRelevanceInput;
};
export type MainPDFWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MainPDFWhereInput | Prisma.MainPDFWhereInput[];
    OR?: Prisma.MainPDFWhereInput[];
    NOT?: Prisma.MainPDFWhereInput | Prisma.MainPDFWhereInput[];
    File?: Prisma.StringFilter<"MainPDF"> | string;
    createdAt?: Prisma.DateTimeFilter<"MainPDF"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MainPDF"> | Date | string;
}, "id">;
export type MainPDFOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    File?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MainPDFCountOrderByAggregateInput;
    _avg?: Prisma.MainPDFAvgOrderByAggregateInput;
    _max?: Prisma.MainPDFMaxOrderByAggregateInput;
    _min?: Prisma.MainPDFMinOrderByAggregateInput;
    _sum?: Prisma.MainPDFSumOrderByAggregateInput;
};
export type MainPDFScalarWhereWithAggregatesInput = {
    AND?: Prisma.MainPDFScalarWhereWithAggregatesInput | Prisma.MainPDFScalarWhereWithAggregatesInput[];
    OR?: Prisma.MainPDFScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MainPDFScalarWhereWithAggregatesInput | Prisma.MainPDFScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MainPDF"> | number;
    File?: Prisma.StringWithAggregatesFilter<"MainPDF"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MainPDF"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MainPDF"> | Date | string;
};
export type MainPDFCreateInput = {
    File: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MainPDFUncheckedCreateInput = {
    id?: number;
    File: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MainPDFUpdateInput = {
    File?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MainPDFUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    File?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MainPDFCreateManyInput = {
    id?: number;
    File: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MainPDFUpdateManyMutationInput = {
    File?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MainPDFUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    File?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MainPDFOrderByRelevanceInput = {
    fields: Prisma.MainPDFOrderByRelevanceFieldEnum | Prisma.MainPDFOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type MainPDFCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    File?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MainPDFAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MainPDFMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    File?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MainPDFMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    File?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MainPDFSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MainPDFSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    File?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["mainPDF"]>;
export type MainPDFSelectScalar = {
    id?: boolean;
    File?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MainPDFOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "File" | "createdAt" | "updatedAt", ExtArgs["result"]["mainPDF"]>;
export type $MainPDFPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MainPDF";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        File: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mainPDF"]>;
    composites: {};
};
export type MainPDFGetPayload<S extends boolean | null | undefined | MainPDFDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MainPDFPayload, S>;
export type MainPDFCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MainPDFFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MainPDFCountAggregateInputType | true;
};
export interface MainPDFDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MainPDF'];
        meta: {
            name: 'MainPDF';
        };
    };
    /**
     * Find zero or one MainPDF that matches the filter.
     * @param {MainPDFFindUniqueArgs} args - Arguments to find a MainPDF
     * @example
     * // Get one MainPDF
     * const mainPDF = await prisma.mainPDF.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MainPDFFindUniqueArgs>(args: Prisma.SelectSubset<T, MainPDFFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MainPDFClient<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MainPDF that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MainPDFFindUniqueOrThrowArgs} args - Arguments to find a MainPDF
     * @example
     * // Get one MainPDF
     * const mainPDF = await prisma.mainPDF.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MainPDFFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MainPDFFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MainPDFClient<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MainPDF that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainPDFFindFirstArgs} args - Arguments to find a MainPDF
     * @example
     * // Get one MainPDF
     * const mainPDF = await prisma.mainPDF.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MainPDFFindFirstArgs>(args?: Prisma.SelectSubset<T, MainPDFFindFirstArgs<ExtArgs>>): Prisma.Prisma__MainPDFClient<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MainPDF that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainPDFFindFirstOrThrowArgs} args - Arguments to find a MainPDF
     * @example
     * // Get one MainPDF
     * const mainPDF = await prisma.mainPDF.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MainPDFFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MainPDFFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MainPDFClient<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MainPDFS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainPDFFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainPDFS
     * const mainPDFS = await prisma.mainPDF.findMany()
     *
     * // Get first 10 MainPDFS
     * const mainPDFS = await prisma.mainPDF.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mainPDFWithIdOnly = await prisma.mainPDF.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MainPDFFindManyArgs>(args?: Prisma.SelectSubset<T, MainPDFFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MainPDF.
     * @param {MainPDFCreateArgs} args - Arguments to create a MainPDF.
     * @example
     * // Create one MainPDF
     * const MainPDF = await prisma.mainPDF.create({
     *   data: {
     *     // ... data to create a MainPDF
     *   }
     * })
     *
     */
    create<T extends MainPDFCreateArgs>(args: Prisma.SelectSubset<T, MainPDFCreateArgs<ExtArgs>>): Prisma.Prisma__MainPDFClient<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MainPDFS.
     * @param {MainPDFCreateManyArgs} args - Arguments to create many MainPDFS.
     * @example
     * // Create many MainPDFS
     * const mainPDF = await prisma.mainPDF.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MainPDFCreateManyArgs>(args?: Prisma.SelectSubset<T, MainPDFCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a MainPDF.
     * @param {MainPDFDeleteArgs} args - Arguments to delete one MainPDF.
     * @example
     * // Delete one MainPDF
     * const MainPDF = await prisma.mainPDF.delete({
     *   where: {
     *     // ... filter to delete one MainPDF
     *   }
     * })
     *
     */
    delete<T extends MainPDFDeleteArgs>(args: Prisma.SelectSubset<T, MainPDFDeleteArgs<ExtArgs>>): Prisma.Prisma__MainPDFClient<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MainPDF.
     * @param {MainPDFUpdateArgs} args - Arguments to update one MainPDF.
     * @example
     * // Update one MainPDF
     * const mainPDF = await prisma.mainPDF.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MainPDFUpdateArgs>(args: Prisma.SelectSubset<T, MainPDFUpdateArgs<ExtArgs>>): Prisma.Prisma__MainPDFClient<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MainPDFS.
     * @param {MainPDFDeleteManyArgs} args - Arguments to filter MainPDFS to delete.
     * @example
     * // Delete a few MainPDFS
     * const { count } = await prisma.mainPDF.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MainPDFDeleteManyArgs>(args?: Prisma.SelectSubset<T, MainPDFDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MainPDFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainPDFUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainPDFS
     * const mainPDF = await prisma.mainPDF.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MainPDFUpdateManyArgs>(args: Prisma.SelectSubset<T, MainPDFUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one MainPDF.
     * @param {MainPDFUpsertArgs} args - Arguments to update or create a MainPDF.
     * @example
     * // Update or create a MainPDF
     * const mainPDF = await prisma.mainPDF.upsert({
     *   create: {
     *     // ... data to create a MainPDF
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainPDF we want to update
     *   }
     * })
     */
    upsert<T extends MainPDFUpsertArgs>(args: Prisma.SelectSubset<T, MainPDFUpsertArgs<ExtArgs>>): Prisma.Prisma__MainPDFClient<runtime.Types.Result.GetResult<Prisma.$MainPDFPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MainPDFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainPDFCountArgs} args - Arguments to filter MainPDFS to count.
     * @example
     * // Count the number of MainPDFS
     * const count = await prisma.mainPDF.count({
     *   where: {
     *     // ... the filter for the MainPDFS we want to count
     *   }
     * })
    **/
    count<T extends MainPDFCountArgs>(args?: Prisma.Subset<T, MainPDFCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MainPDFCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MainPDF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainPDFAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MainPDFAggregateArgs>(args: Prisma.Subset<T, MainPDFAggregateArgs>): Prisma.PrismaPromise<GetMainPDFAggregateType<T>>;
    /**
     * Group by MainPDF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainPDFGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MainPDFGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MainPDFGroupByArgs['orderBy'];
    } : {
        orderBy?: MainPDFGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MainPDFGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainPDFGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MainPDF model
     */
    readonly fields: MainPDFFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MainPDF.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MainPDFClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the MainPDF model
 */
export interface MainPDFFieldRefs {
    readonly id: Prisma.FieldRef<"MainPDF", 'Int'>;
    readonly File: Prisma.FieldRef<"MainPDF", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MainPDF", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MainPDF", 'DateTime'>;
}
/**
 * MainPDF findUnique
 */
export type MainPDFFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * Filter, which MainPDF to fetch.
     */
    where: Prisma.MainPDFWhereUniqueInput;
};
/**
 * MainPDF findUniqueOrThrow
 */
export type MainPDFFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * Filter, which MainPDF to fetch.
     */
    where: Prisma.MainPDFWhereUniqueInput;
};
/**
 * MainPDF findFirst
 */
export type MainPDFFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * Filter, which MainPDF to fetch.
     */
    where?: Prisma.MainPDFWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MainPDFS to fetch.
     */
    orderBy?: Prisma.MainPDFOrderByWithRelationInput | Prisma.MainPDFOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MainPDFS.
     */
    cursor?: Prisma.MainPDFWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MainPDFS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MainPDFS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MainPDFS.
     */
    distinct?: Prisma.MainPDFScalarFieldEnum | Prisma.MainPDFScalarFieldEnum[];
};
/**
 * MainPDF findFirstOrThrow
 */
export type MainPDFFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * Filter, which MainPDF to fetch.
     */
    where?: Prisma.MainPDFWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MainPDFS to fetch.
     */
    orderBy?: Prisma.MainPDFOrderByWithRelationInput | Prisma.MainPDFOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MainPDFS.
     */
    cursor?: Prisma.MainPDFWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MainPDFS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MainPDFS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MainPDFS.
     */
    distinct?: Prisma.MainPDFScalarFieldEnum | Prisma.MainPDFScalarFieldEnum[];
};
/**
 * MainPDF findMany
 */
export type MainPDFFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * Filter, which MainPDFS to fetch.
     */
    where?: Prisma.MainPDFWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MainPDFS to fetch.
     */
    orderBy?: Prisma.MainPDFOrderByWithRelationInput | Prisma.MainPDFOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MainPDFS.
     */
    cursor?: Prisma.MainPDFWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MainPDFS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MainPDFS.
     */
    skip?: number;
    distinct?: Prisma.MainPDFScalarFieldEnum | Prisma.MainPDFScalarFieldEnum[];
};
/**
 * MainPDF create
 */
export type MainPDFCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * The data needed to create a MainPDF.
     */
    data: Prisma.XOR<Prisma.MainPDFCreateInput, Prisma.MainPDFUncheckedCreateInput>;
};
/**
 * MainPDF createMany
 */
export type MainPDFCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MainPDFS.
     */
    data: Prisma.MainPDFCreateManyInput | Prisma.MainPDFCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MainPDF update
 */
export type MainPDFUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * The data needed to update a MainPDF.
     */
    data: Prisma.XOR<Prisma.MainPDFUpdateInput, Prisma.MainPDFUncheckedUpdateInput>;
    /**
     * Choose, which MainPDF to update.
     */
    where: Prisma.MainPDFWhereUniqueInput;
};
/**
 * MainPDF updateMany
 */
export type MainPDFUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MainPDFS.
     */
    data: Prisma.XOR<Prisma.MainPDFUpdateManyMutationInput, Prisma.MainPDFUncheckedUpdateManyInput>;
    /**
     * Filter which MainPDFS to update
     */
    where?: Prisma.MainPDFWhereInput;
    /**
     * Limit how many MainPDFS to update.
     */
    limit?: number;
};
/**
 * MainPDF upsert
 */
export type MainPDFUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * The filter to search for the MainPDF to update in case it exists.
     */
    where: Prisma.MainPDFWhereUniqueInput;
    /**
     * In case the MainPDF found by the `where` argument doesn't exist, create a new MainPDF with this data.
     */
    create: Prisma.XOR<Prisma.MainPDFCreateInput, Prisma.MainPDFUncheckedCreateInput>;
    /**
     * In case the MainPDF was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MainPDFUpdateInput, Prisma.MainPDFUncheckedUpdateInput>;
};
/**
 * MainPDF delete
 */
export type MainPDFDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
    /**
     * Filter which MainPDF to delete.
     */
    where: Prisma.MainPDFWhereUniqueInput;
};
/**
 * MainPDF deleteMany
 */
export type MainPDFDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MainPDFS to delete
     */
    where?: Prisma.MainPDFWhereInput;
    /**
     * Limit how many MainPDFS to delete.
     */
    limit?: number;
};
/**
 * MainPDF without action
 */
export type MainPDFDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainPDF
     */
    select?: Prisma.MainPDFSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MainPDF
     */
    omit?: Prisma.MainPDFOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=MainPDF.d.ts.map