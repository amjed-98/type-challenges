type DeepReadonly<T extends object> = any

type X = {
    a: () => 22
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: 'string'
                }
                k: 'hello'
            }
            l: [
                'hi',
                {
                    m: ['hey']
                },
            ]
        }
    }
}
type y = DeepReadonly<X>
