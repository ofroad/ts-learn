//在 TypeScript 中，数组类型有多种定义方式，比较灵活
//最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 1, 2, 3, 5];

//数组的项中不允许出现其他的类型：
let fibonacci01: number[] = [1, '1', 2, 3, 5];

//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
//push 方法只允许传入 number 类型的参数，但是却传了一个 "8" 类型的参数，所以报错了
let fibonacci02: number[] = [1, 1, 2, 3, 5];
fibonacci02.push('8');