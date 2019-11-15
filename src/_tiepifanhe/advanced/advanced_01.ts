//通过基础类型组合而来的, 我们可以叫他高级类型. 包含: 交叉类型 / 联合类型 / 接口等等, 当然不止他们3个
//接口(interface)
//一种定义复杂类型的格式, 比如我们用对象格式存储一篇文章, 那么就可以用接口定义文章的类型:
interface Article010 {
    title: string;
    count: number;
    content:string;
    fromSite?: string; // 非必填
}

//在这种情况下,当我们给article赋值的时候, 如果任何一个字段没有被赋值或者字段对应的数据类型不对, ts都会提示错误, 这样就保证了我们写代码不会出现上述的小错误.
const article01: Article010 = {
    title: '为vue3学点typescript(2), 类型',
    count: 9999,
    content: 'xxx...',
    fromSite: 'baidu.com'
}

//接口不仅可以定义对象, 还可以定义函数:
// 声明接口
interface Core {
    (n:number, s:string):[number,string]
}

// 声明函数遵循接口定义
const core:Core = (a,b)=>{
    return [a,b];
}
//下面会报错
//core(1,2)


//用接口定义类
// 定义
interface Animala01 {
    head:number;
    body:number;
    foot:number;
    eat(food:string):void;
    say(word:string):string;
}

// implements
class Doga01 implements Animala01{
    head=1;
    body=1;
    foot=1;
    eat(food:string){
        console.log(food);
    }
    say(word:string){
        return word;
    }
}

//交叉类型(&)
//交叉类型是将多个类型合并为一个类型, 表示"并且"的关系,用&连接多个类型, 常用于对象合并:
interface Aa01 {a:number};
interface Ba01 {b:string};

const aa01:Aa01 = {a:1};
const ba01:Ba01 = {b:'1'};
const abcde: Aa01 & Ba01 = {...aa01,...ba01};

//联合类型(|)
//联合类型也是将多个类型合并为一个类型, 表示"或"的关系,用|连接多个类型:
//注意: 我这里标记了el为HTMLElement, 可以在typescript的仓库看到ts还定义了很多元素, 请自行浏览(不用背, 用的时候现查),
//https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts
function setWidth(el: HTMLElement, width: string | number) {
    el.style.width = 'number' === typeof width ? `${width}px` : width;
}








