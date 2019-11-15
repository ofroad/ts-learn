//数组的类型
//正确的做法
let fibonacci000: number[] = [1, 1, 2, 3, 5];
let fibonacci001: Array<number> = [1, 1, 2, 3, 5];

//用接口表示数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci002: NumberArray = [1, 1, 2, 3, 5];

//any 在数组中的应用
let list001: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

//类数组
//常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function sum() {
    let args: IArguments = arguments;
}

//错误的做法
// 数组的项中不允许出现其他的类型：
let fibonacci003: number[] = [1, '1', 2, 3, 5];

// push 方法只允许传入 number 类型的参数，但是却传了一个 string 类型的参数，所以报错了。
let fibonacci004: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8');

// 类数组（Array-like Object）不是数组类型，比如 arguments
function sum() {
    let args: number[] = arguments;
}
