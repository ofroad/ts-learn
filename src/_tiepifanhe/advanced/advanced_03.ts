//扩展类型变量(泛型约束)
function echo<T>(input: T): T {
    console.log(input.name); // 报错, T上不确定是否由name属性
    return input;
}

//前面说过T可以代表任意类型, 但对应的都是基础类型, 所以当我们操作input.name的时候就需要标记input上有name属性, 
//这样就相当于我们缩小了类型变量的范围, 对泛型进行了约束:
// 现在T是个有name属性的类型
function echo6<T extends {name:string}>(input: T): T {
    console.log(input.name); // 正确
    return input;
}
//正确
echo6({name:"www"});
//报错
echo6({age:111});

//一个泛型的应用, 工厂函数
function create<T,U>(O: {new(): T|U; }): T|U {
    return new O();
}
/**
 * 主要想说3个知识点:
 * (1)可以定义多个类型变量.
 * (2)类型变量和普通类型用法一直, 也支持联合类型/交叉类型等类型.
 * (3)如果一个数据是可以实例化的, 我们可以用{new(): any}表示.
*/