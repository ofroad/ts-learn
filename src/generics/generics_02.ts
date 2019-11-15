//泛型约束
//在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}

//上例中，泛型 T 不一定包含属性 length，所以编译的时候报错了。

//这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：
interface Lengthwise {
    length: number;
}

function loggingIdentity01<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
//上例中，我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
//此时如果调用 loggingIdentity 的时候，传入的 arg 不包含 length，那么在编译阶段就会报错了
loggingIdentity01(7);

//多个类型参数之间也可以互相约束：
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
//上例中，我们使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。