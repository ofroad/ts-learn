//如果你发现自己写的功能(函数/类/接口等...)越来越多, 你想对他们进行分组管理就可以用命名空间, 下面先用"类"举例:
namespace Tools {
    const TIMEOUT = 100;

    export class Ftp {
        constructor() {
            setTimeout(() => {
                console.log('Ftp');
            }, TIMEOUT)
        }
    }

    export class Http {
        constructor() {
            console.log('Http');
        }
    }

    export function parseURL(){
        console.log('parseURL');
    }
}
//在js中命名空间其实就是一个全局对象. 如果你开发的程序想要暴露一个全局变量就可以用namespace;
Tools.TIMEOUT // 报错, Tools上没有这个属性
Tools.parseURL() // 'parseURL'


//命名空间不仅可以用在逻辑代码中, 也可以用在类型, 用来给类型分组:
namespace Food {
    export type A = Window;
    export interface Fruits{
        taste: string;
        hardness: number;
    }

    export interface Meat{
        taste: string;
        heat: number;
    }
}

let meat: Food.Meat;
let fruits: Food.Fruits;

//如何引入写好的命名空间?--有2种方式, 一种/// <reference path="xxx.ts" />, 还有就是import:
//通过 "/// <reference path='xxx.ts'/>" 导入
//通过reference进行导入相当于xxx.ts文件内的命名空间和当前文件进行了合并:

// yyy.ts
///<reference path="xxx.ts" />
//现在在yyy.ts中我们就可以直接使用xxx.ts中的Food类型了, 而不需要使用import
let fruits01: Food01.Fruits;

//通过import导入
//如果命名空间是用export导出的, 那么使用的时候就不可以用/// <reference/>了, 要用import导入:
import * as Food02 from './xx1';
let meat01: Food02.Meat={taste02:"www",heat:111};
let fruits02: Food02.Fruits={taste01:"qqq",hardness:999};


//export=
//如果你的tsconfig中设置了"module": "umd",, 那么export = Food等价于export default Food, export=常见于支持umd的插件的声明文件.


