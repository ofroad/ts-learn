//运用Record
//Record允许从Union类型中创建新类型，Union类型中的值用作新类型的属性。

//举个简单的例子，比如我们要实现一个简单的汽车品牌年龄表，一下写法貌似没有问题。
type Car001 = 'Audi' | 'BMW' | 'MercedesBenz';

const cars = {
    Audi: { age: 119 },
    BMW: { age: 113 },
    MercedesBenz: { age: 133 }
}
//虽然这个写法没问题，但是有没有考虑过类型安全的问题？
//我们忘记写了一个汽车品牌，他会报错吗？
//我们拼写属性名错误了，它会报错吗？
//我们添加了一个非上述三个品牌的品牌进去，他会报错吗？
//我们更改了其中一个品牌的名字，他会有报错提醒吗？

//上述这种写法统统不会，这就需要Record的帮助。
//在实战项目中尽量多用Record，它会帮助你规避很多错误，在vue或者react中有很多场景选择Record是更优解。
type Car002 = 'Audi' | 'BMW' | 'MercedesBenz'
type CarList = Record<Car002, {age: number}>

const cars002: CarList = {
    Audi: { age: 119 },
    BMW: { age: 113 },
    MercedesBenz: { age: 133 }
}



//巧用类型约束
//在 .jsx 文件里，泛型可能会被当做 jsx 标签
const toArray = <T>(element: T) => [element]; // Error in .jsx file.

//加 extends 可破
const toArray000 = <T extends {}>(element: T) => [element]; // No errors.


//类型别名
//类型别名会给一个类型起个新名字，类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。

//类型别名可以是泛型
//type Container1111<T> = { value: T };
//下面的会被type-eslint自动优化为：
interface Container<T> { value: T }

//也可以使用类型别名来在属性里引用自己：
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Tree1<T> = {
    value: T;
    left: Tree1<T>;
    right: Tree1<T>;
}

//类型别名看起来跟interface非常像，那么应该如何区分两者？
//interface只能用于定义对象类型，而type的声明方式除了对象之外还可以定义交叉、联合、原始类型等，类型声明的方式适用范围显然更加广泛。

/**
 * 但是interface也有其特定的用处：
 * interface 方式可以实现接口的 extends 和 implemenjs
 * interface 可以实现接口合并声明
 */

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;


