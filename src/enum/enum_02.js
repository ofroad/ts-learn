//枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。
//一个典型的计算所得项的例子
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
;
console.log("Color===", Color);
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var directions01 = [Directions01.Up, Directions01.Down, Directions01.Left, Directions01.Right];
var directions02 = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
