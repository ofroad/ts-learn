//我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let fibonacci10: Array<number> = [1, 1, 2, 3, 5];

//接口也可以用来描述数组
/**
 * NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
 * 虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
 * 不过有一种情况例外，那就是它常用来表示类数组。
 */
interface NumberArray {
    [index: number]: number;
}
let fibonacci11: NumberArray = [1, 1, 2, 3, 5];

/**
 * 虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
 * 不过有一种情况例外，那就是它常用来表示类数组。
 */
//arguments 实际上是一个类数组，不能用普通的数组的方式来描述，
function sum() {
    let args: number[] = arguments;
}

//而应该用接口
function sum11() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

//事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
//其中 IArguments 是 TypeScript 中定义好了的类型
function sum12() {
    let args: IArguments = arguments;
}