type TupleToObject<T extends readonly PropertyKey[]> = {
    [Input in T[number]]: Input
}
