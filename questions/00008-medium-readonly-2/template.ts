type MyReadonly2<T extends object, K extends keyof T = keyof T> = MyReadonly<MyPick<T, K>> &
    MyOmit<T, K>
