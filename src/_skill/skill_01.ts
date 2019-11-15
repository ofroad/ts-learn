//注释的妙用
//可以通过/** */来注释TypeScript的类型，当我们在使用相关类型的时候就会有注释的提示，
//这个技巧在多人协作开发的时候十分有用，我们绝大部分情况下不用去花时间翻文档或者跳页去看注释。
interface User000 {
    /**
     * 这是注释哦
     * 年龄
     * 性别
     */
    age: number,
    sex: string
}

let user001:User000= {
    age:111,
    sex:"www"
}

//巧用类型推导
//TypeScript 能根据一些简单的规则推断（检查）变量的类型。
//比如一个简单的add函数,TypeScript就可以通过参数与return的运算符推导出函数的返回值
function add(a: number, b: number) {
    return a + b
}

//如果想获取函数整体的类型那么可以借助typeof,注意与JavaScript中的typeof区分开
type AddFn = typeof add;

//当然上述情况算是比较简单的情况，有时候我们的返回值类型其实比较复杂，这个时候借助类型推导和ReturnType就可以很轻松地获取返回值类型
type returnType = ReturnType<typeof add> // number



//巧用元组
//有时候我们可能需要批量的来获取参数，并且每一个参数的类型还不一样，我们可以声明一个元组如：
function query(...args:[string, number, boolean]) {
    const d: string = args[0];
    const n: number = args[1];
    const b: boolean = args[2];
}
query("1",2,true);
//报错
query(1,2,3);


//巧用Omit
//有时候我们需要复用一个类型，但是又不需要此类型内的全部属性，因此需要剔除某些属性，这个时候Omit就派上用场了。
//这个方法在React中经常用到，当父组件通过props向下传递数据的时候，通常需要复用父组件的props类型，但是又需要剔除一些无用的类型。
interface User001 {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}
//UserWithoutToken和User001相比，没有了token属性
type UserWithoutToken = Omit<User001, 'token'>;