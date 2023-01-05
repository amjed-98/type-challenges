type MyOmit<T, K extends keyof T> = {
    [key in keyof T as Exclude<key, K>]: T[key]
}

interface Todo {
    title: string
    description: string
    completed: boolean
}

type error = MyOmit<Todo, 'description'>
