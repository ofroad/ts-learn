//ts中基础类型有如下几种:boolean / number / string / object / 数组 / 元组 / 枚举 / any / undefined / null / void / never
//上面列出的类型, 是ts中表示类型的关键字, 其中object其实是包含数组/元祖/枚举, 在ts的概念中, 这个叫做类型兼容, 就是说数组类型数据, 也可以用object来标注:
let array:object = [12,321];

//字面量
//介绍类型前,有一个前置知识点就是字面量, 字面量的意思就是直接声明, 而非new关键词实例化出来的数据:
// 字面量
const n00:number = 123;
const s:string = '456';
const k:object = {a:1,b:'2'};

// 非字面量
const n01:Number = new Number(123);
const s01:String = new String('456');
const k01:Object = new Object({a:1,b:'2'});
//通过上面的例子, 大家应该看明白为什么ts中有些类型的开头字母是小写的了吧. 这是因为ts中用小写字母开头的类型代表字面量, 大写的是用来表示通过new实例化的数据.


//布尔类型, 取值只有true / false
const IS_MOBILE:boolean = true;
const IS_TABLE:boolean = false;

//数字类型, 整数/小数都包括, 同时支持2/8/10/16进制字面量.
let decLiteral01: number = 6;
let hexLiteral01: number = 0xf00d;
let binaryLiteral01: number = 0b1010;
let octalLiteral01: number = 0o744;

//字符串类型
let s1:string = 'hello world!';
let s2:string = `hello ${name}`;

//数组有2种表示方式:
//第1种, 通过在指定类型后面增加[], 表示该数组内的元素都是该指定类型:
let numbers01:number[] = [1,2,3,4,5];
// number|string代表联合类型, 下面的高级类型中会讲
let numbers02:(number|string)[] = [1,2,3,4,'5'];

//第2种, 通过泛型表示, Array<元素类型>
let numbers:Array<number> = [1,2,3,4,5];

