//元组(Tuple)
//元组类型表示一个已知元素数量和类型的数组, 各元素的类型不必相同:
let list1:[number, string] = [1, '2', 3]; // 错误, 数量不对, 元组中只声明有2个元素
let list2:[number, string] = [1, 2]; // 错误, 第二个元素类型不对, 应该是字符串'2'
let list3:[number, string] = ['1', 2]; // 错误, 2个元素的类型颠倒了
let list4:[number, string] = [1, '2']; // 正确

//枚举(enum)
//枚举是ts中有而js中没有的类型, 编译后会被转化成对象, 默认元素的值从0开始, 如下面的Color.Red的值为0, 以此类推Color.Green为1, Color.Blue为2:
enum Color {Red01, Green01, Blue01}
// 等价
enum Color {Red02=0, Green02=1, Blue02=2}

//当然也可以自己手动赋值:
enum Color11 {Red03=1, Green03=2, Blue03=4}

//并且我们可以反向通过值得到他的键值:
Color11[2] === 'Green03' // true


//any(任意类型)
/**
 * any代表任意类型, 也就是说, 如果你不清楚变量是什么类型, 就可以用any进行标记, 
 * 比如引入一些比较老的js库, 没有声明类型, 使用的时候就可以标记为any类型, 这样ts就不会提示错误了. 
 * 当然不能所有的地方都用any, 那样ts就没有使用的意义了.
 */
let obj:any = {};
// ts自己推导不出forEach中给obj增加了'a'和'b'字段.
['a', 'b'].forEach(letter=>{
    obj[letter] = letter;
});

// 但是因为标记了any, 所以ts认为a可能存在
obj.a = 123

//void
//void的意义和any相反, 表示不是任何类型, 一般出现在函数中, 用来标记函数没有返回值:
function abc(n:number):void {
    console.log(n);
}
//void类型对应2个值, 一个是undefined,一个null:
const n1:void = undefined;
//strictNullChecks设置为true的话，下面的会报错
const n20:void = null;

//never表示不可达, 用文字还真不好描述, 主要使用在throw的情况下:
function error():never{
    throw '错了!';
}

//object表示非原始类型, 也就是除number/ string/ boolean/ symbol/ null/ undefined之外的类型:
//但是, 我们实际上基本不用object类型的, 因为他标注的非常不具体, 一般都用接口来标注更具体的对象类型,
let o1:object = [];
let o2:object = {a:1,b:2};



