//数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象

//定义一对值分别为 string 和 number 的元组
let tomt01: [string, number] = ['Tom', 25];

//当赋值或访问一个已知索引的元素时，会得到正确的类型
let tomt02: [string, number];
tomt02[0] = 'Tom';
tomt02[1] = 25;

tomt02[0].slice(1);
tomt02[1].toFixed(2);


//也可以只赋值其中一项
let tomt03: [string, number];
tomt03[0] = 'Tom';

//但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
let tomt04: [string, number];
tomt04 = ['Tom', 25];
//会报错
// tomt04 = ['Tom'];

//当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
tomt04.push(123);
console.log("tomt04===",tomt04);