type GetReadonlyKeys<T> = T extends `${infer B}` ? B : '3'
interface Todo1 {
    readonly title: string
    description: string
    completed: boolean
}
type a = GetReadonlyKeys<Todo1>
