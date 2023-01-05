type TupleToUnion<T extends [...any]> = T[number]

// type TupleToUnion<T extends [...any]> = T extends [infer FirstEl, ...infer RestEl]
//     ? FirstEl | TupleToUnion<RestEl>
//     : never
