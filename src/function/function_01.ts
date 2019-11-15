//在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};

//一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单
//sum10的返回值为number
function sum10(x: number, y: number): number {
    return x + y;
}

//输入多余的（或者少于要求的）参数，是不被允许的
sum10(1, 2, 3);
sum10(1);