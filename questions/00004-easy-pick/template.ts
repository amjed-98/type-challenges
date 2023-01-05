type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

// type MyPick<T, K extends keyof T> = {
//     [key in keyof T as Extract<key, K>]: T[key]
// }
