//枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。
//一个典型的计算所得项的例子
enum Color {Red, Green, Blue = "blue".length};
console.log("Color===",Color);

//常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

//外部枚举
//外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：
//declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
declare enum Directions01 {
    Up,
    Down,
    Left,
    Right
}

let directions01 = [Directions01.Up, Directions01.Down, Directions01.Left, Directions01.Right];

//外部枚举与声明语句一样，常出现在声明文件中。
//同时使用 declare 和 const 也是可以的
declare const enum Directions02 {
    Up,
    Down,
    Left,
    Right
}

let directions02 = [Directions02.Up, Directions02.Down, Directions02.Left, Directions02.Right];