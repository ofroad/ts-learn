//类型断言（Type Assertion）可以用来手动指定一个值的类型
//语法: <类型>值 或者 值 as 类型
//在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。
//获取 something.length 的时候会报错
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
//此时可以使用类型断言，将 something 断言成 string
function getLength11(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
function toBoolean(something) {
    return something;
}
