//在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
//TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
//定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
//接口一般首字母大写
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

//定义的变量比接口少了一些属性是不允许的
let tom2: Person = {
    name: 'Tom'
};

//多一些属性也是不允许的
let tom3: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};