//原始数据类型
//==================正确的写法

// 布尔值=========
let isDone01: boolean = false;  

// 事实上 `new Boolean()` 返回的是一个 `Boolean` 对象
let createdByNewBoolean: Boolean = new Boolean(1);

//(直接调用 `Boolean` 也可以返回一个 `boolean` 类型) 
let createdByBoolean01: boolean = Boolean(1); 

// 数值=========
let decLiteral001: number = 6;
let hexLiteral001: number = 0xf00d;

// ES6 中的二进制表示法
let binaryLiteral001: number = 0b1010;

// ES6 中的八进制表示法
let octalLiteral001: number = 0o744;
let notANumber001: number = NaN;
let infinityNumber001: number = Infinity;

//字符串=========
let myName001: string = 'Tom';

//空值=========
// 没有返回值的函数为void
function alertName(): void {
    alert('My name is Tom');
}
//声明一个 void 类型的只能将它赋值为 undefined 和 null
let unusable001: void = undefined;


//Null 和 Undefined=========
// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null
let u001: undefined = undefined;
let n001: null = null;



//==================错误的写法
//布尔值=========
// 注意，使用构造函数 `Boolean` 创造的对象不是布尔值
let createdByNewBoolean001: boolean = new Boolean(1);

//数值=========
let decLiteral002: number = "6";

//字符串=========
let myName002: string = 999;

//空值=========
//声明一个 void 类型的只能将它赋值为 undefined 和 null
let unusable003: void = 'I love you';

//Null 和 Undefined=========
// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null
let u002: undefined = 888;
let n002: null = 999;