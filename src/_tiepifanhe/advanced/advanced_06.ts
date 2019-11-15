//索引类型(keyof)
//js中的Object.keys大家肯定都用过, 获取对象的键值, ts中的keyof和他类似, 可以用来获取对象类型的键值:
type A060 = keyof {a:1,b:'123'} // 'a'|'b'
type B060 = keyof [1,2] // '0'|'1'|'push'... , 获取到内容的同时, 还得到了Array原型上的方法和属性(实战中暂时没遇到这种需求, 了解即可)

//可以获得键值, 也可以获取对象类型的值的类型:
interface A {a:1,b:'123'}
type C = A['a'] // 等于type C = 1;
let c050:C = 2 // 错误, 值只能是1


//映射类型(Readonly, Pick, Record等...)
//映射类型比较像修改类型的工具函数, 比如Readonly可以把每个属性都变成只读:
interface A061 {a:number, b:string}
type A062 = Readonly<A061> // {readonly a: number;readonly b: string;}

//打开node_modules/typescript/lib文件夹可以找到lib.es5.d.ts, 在这我们能找到Readonly的定义:
type Readonly123<T> = {
    readonly [P in keyof T]: T[P];
};
/** 
 * (1)定义一个支持泛型的类型别名, 传入类型参数T
 * (2)通过keyof获取T上的键值集合
 * (3)用in表示循环keyof获取的键值
 * (4)添加readonly标记.
*/

//Partial<T>, 让属性都变成可选的
interface A063 {a:number, b:string}
type A1063 = Partial<A063> // { a?: number; b?: string;}

//Required<T>, 让属性都变成必选
interface A065 {a?:number, b?:string}
type A1064 = Required<A065> // { a: number; b: string;}
let asdfa:A1064={a:123,b:"yi"};
//报错，b是必须的
let asdfa123:A1064={a:123};

//Pick<T,K>, 只保留自己选择的属性, U代表属性集合
interface A066 {a:number, b:string}
type A1066 = Pick<A066, 'a'> //  {a:number}
type A1067 = Pick<A066, 'a'|'b'> //  {a:number, b:string}
let asdfa2:A1066={a:123};
//报错，没有b
let asdfa21:A1066={a:123,b:"yi"};

//Omit<T,K> 实现排除已选的属性
interface A067 {a:number, b:string}
type A10067 = Omit<A067, 'a'> // {b:string}
type A10068 = Omit<A067, 'a'|'b'> // {}

//Record<K,T>, 创建一个类型,K代表键值的类型, T代表值的类型
type A1069 = Record<string, string> // 等价{[k:string]:string}
let bbyt:A1069={age:"123","name":"jack"};

//Exclude<T,U>, 过滤T中和U相同(或兼容)的类型
interface A0681 {a:number, b:string}
type A1068 = Exclude<number|string, string|number[]> // number

// 兼容
type A2068 = Exclude<number|string, any|number[]> // never , 因为any兼容number, 所以number被过滤掉


//NonNullable, 剔除T中的undefined和null
type A1070 = NonNullable<number|string|null|undefined> // number|string

//ReturnType, 获取T的返回值的类型
type A10690= ReturnType<()=>number> // number

//InstanceType, 返回T的实例类型
//ts中类有2种类型, 静态部分的类型和实例的类型, 所以T如果是构造函数类型, 那么InstanceType可以返回他的实例类型:
interface A10691{
    a:HTMLElement;
}

interface AConstructor{
    new():A10691;
}

function create (AClass:AConstructor):InstanceType<AConstructor>{
    return new AClass();
}

//Parameters 获取函数参数类型===返回类型为元祖, 元素顺序同参数顺序.
interface Aqee{
    (a:number, b:string):string[];
}

type A10692 = Parameters<Aqee> // [number, string]

//ConstructorParameters 获取构造函数的参数类型,和Parameters类似, 只是T这里是构造函数类型.
interface AConstructor101{
    new(a:number):string[];
}

type A1069311 = ConstructorParameters<AConstructor101> // [number]
let adfv10:A1069311=[777];
//以下报错
let adfv1w1:A1069311=[1,2,6345];
let adfv1fsf2:A1069311=[1,"ww"];


























