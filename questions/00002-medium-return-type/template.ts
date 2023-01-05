type MyReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any[]) => infer Type
    ? Type
    : 'please provide a function type'
