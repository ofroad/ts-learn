//什么是"类型变量"和"泛型"
//是表达他是一种描述多种类型(类型范围)的格式,用动态的类型(类型变量)描述函数和类的方式
//变量的概念我们都知道, 可以表示任意数据, 类型变量也一样, 可以表示任意类型:

// 在函数名后面用"<>"声明一个类型变量
//convert中参数我们标记为类型T, 返回值也标记为T, 从而表示了: 函数的输入和输出的类型一致. 这样使用了"类型变量"的函数叫做泛型函数
//注意: T是我随便定义的, 就和变量一样, 名字你可以随便起, 只是建议都是大写字母,比如U / RESULT
function convert<T>(input:T):T{
    return input;
}
//正确
convert<string>("1");
convert("1");
//正确
convert<number>(1);
convert(1);

//报错
convert<string>(1);
convert<number>("1");



//泛型类
class Person0010<U> {
    who: U;
    
    constructor(who: U) {
        this.who = who;
    }

    say(code:U): string {
        return this.who + ' :i am ' + code;
    }
}
//在类名后面通过"<>"声明一个类型变量U, 类的方法和属性都可以用这个U, 接下来我们使用下泛型类:
//传入了类型变量(string),告诉ts这个类的U是string类型, 通过Person0010的定义, 我们知道say方法的参数也是string类型, 
//所以a.say(007)会报错, 因为007是number. 多以我们可以通过传入类型变量来约束泛型.
let a0010 =  new Person0010<string>('詹姆斯邦德');
a0010.say(007) // 错误, 会提示参数应该是个string
a0010.say('007') // 正确

//其实我们也可以不指定类型变量为string, 因为ts可以根据实例化时传入的参数的类型推断出U为string类型:
let a0011 =  new Person0010('詹姆斯邦德');
// 等价 let a =  new Person<string>('詹姆斯邦德');
a0011.say(007) // 错误, 会提示参数应该是个string
a0011.say('007') // 正确

//泛型方法
//其实方法和函数的定义方式一样:
class ABC{
    // 输入T[], 返回T
    getFirst<T>(data:T[]):T{
        return data[0];
    }
}


//泛型类型

function convert333<T>(input:T):T{
    return input;
}

// 定义泛型类型
interface Convert {
    <T>(input:T):T
}

// 验证下
// 正确不报错
let convert2:Convert = function convert333<T>(input:T):T {
    return input;
}

//泛型接口
//通过传入不同的类型参数, 让属性更灵活:
interface Goods<T>{
    id:number;
    title: string;
    size: T;
}

let apple:Goods<string> = {id:1,title: '苹果', size: 'large'};
let shoes:Goods<number> = {id:1,title: '苹果', size: 43};














