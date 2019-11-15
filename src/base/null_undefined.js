//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
var u = undefined;
var n = null;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
// 这样不会报错
var num = undefined;
// 这样也不会报错
var u1;
var num1 = u1;
//而 void 类型的变量不能赋值给 number 类型的变量
// let u2: void;
// let num2: number = u2;
