//函数的类型
//正确的做法

// 需要把输入和输出都考虑到
function sum(x: number, y: number): number {
    return x + y;
}

//函数表达式
//这种定义方式只定义了匿名函数的传参要求，并没有给 mySum001 的参数添加定义，但是这种方式也可以通过编译，由右侧推导出左侧参数定义
let mySum001 = function (x: number, y: number): number {
    return x + y;
};

//  =>  表示函数的定义，左边为输入类型（需要用括号扩起来），右边为输出类型
// 不要混淆了 TypeScript 中的 => 和 ES6 中的 =>
let mySum00: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};


//接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch001: SearchFunc;
mySearch001 = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}


//可选参数
//可选参数必须在必选参数后面
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat000 = buildName('Tom', 'Cat');
let tomf = buildName('Tom');

//参数默认值
//ts 会将有默认值的参数识别为可选参数，此时它可以在必选参数前面，此时传值是需要的，若在必选参数后面可以不用传值，具体如下
function buildName01(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
buildName01("ddd");

function buildName02(firstName: string = 'Cat',lastName: string) {
    return firstName + ' ' + lastName;
}
buildName02(undefined,"ddd");

//剩余参数
// rest 参数只能是最后一个参数，关于 rest 参数,是一个数组
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let ak01:any[] = [];
push(ak01, 1, 2, 3);


//重载
//重载允许一个函数接受不同数量或类型的参数是做出不同的处理。
// 实现将一个字符串或数字进行反转的方法

// 为了更精准的表达，输入的是字符串，输出也应该是字符串，数字同理，所以可以重载定义多个reverseFnc的函数类型
function reverseFnc(x:number):number;
function reverseFnc(x:string):string;

function reverseFnc(x:number|string):number|string {
    if(typeof x === 'string') {
        return x.split('').reverse().join('')
    } else if(typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    }
    return x;
}
//在上述例子中，多次重复定义了reverseFnc函数，前几次属于函数的定义，最后一次属于函数的实现。
//typescript会优先从最前面的函数定义开始匹配，多个函数如果有包含关系，则应该将更精准的定义写在前面！