//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
let u: undefined = undefined;
let n: null = null;

//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
// 这样不会报错==strictNullChecks设为false的情况下
let num: number = undefined;

// 这样也不会报错==strictNullChecks设为false的情况下
let u1: undefined;
let num1: number = u1;

//而 void 类型的变量不能赋值给 number 类型的变量
// let u2: void;
// let num2: number = u2;