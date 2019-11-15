//类型断言(你告诉ts是什么类型, 他都信)
//有些情况下系统没办法自动推断出正确的类型, 就需要我们标记下, 断言有2种语法, 一种是通过"<>", 一种通过"as", 举例说明:
let obj050 = 0.5 < Math.random() ? 1 : [1]; // number|number[]

// 断言, 告诉ts, obj为数组
(<number[]>obj050).push(1);

//等价
(obj050 as number[]).push(1);


//类型别名(type)
//类型别名可以表示很多接口表示不了的类型, 比如字面量类型(常用来校验取值范围):
type A050 = 'top'|'right'|'bottom'|'left'; // 表示值可能是其中的任意一个
type B050 = 1|2|3;
type C050 = '红'|'绿'|'黄';
type D050 = 150;

let a050:A050 = 'none'; // 错误, A050类型中没有'none'

//更多组合:
interface A1{
    a:number;
}
type B051 = A1 | {b:string};
type C051 = A1 & {b:string};

// 与泛型组合
type D<T> = A1 | T[];



