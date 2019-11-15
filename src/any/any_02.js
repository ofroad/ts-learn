//在任意值上访问任何属性都是允许的
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
//也允许调用任何方法
var anyThing2 = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');
//=========可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
var something;
something = 'seven';
something = 7;
something.setName('Tom');
//等价于：
// let something: any;
// something = 'seven';
// something = 7;
// something.setName('Tom');
