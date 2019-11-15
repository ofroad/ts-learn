/* eslint-disable no-var */
//声明文件(xxx.d.ts)
//声明文件就是给js代码补充类型标注. 这样在ts编译环境下就不会提示js文件"缺少类型".
//声明变量使用关键字declare来表示声明其后面的全局变量的类型, 比如:
// packages/global.d.ts
//看过vue3源码的同学一定知道这些是vue中的变量, 上面代码表示__DEV__等变量是全局, 并且标注了他们的类型. 这样无论在项目中的哪个ts文件中使用__DEV__, 变量ts编译器都会知道他是boolean类型.
declare var __DEV__: boolean
declare var __TEST__: boolean
declare var __BROWSER__: boolean
declare var __RUNTIME_COMPILE__: boolean
declare var __COMMIT__: string
declare var __VERSION__: string

//声明文件在哪里
/** 
 * 首先声明文件的文件名是有规范要求的, 必须以.d.ts结尾
 * 实际开发中发现, 为了规避一些奇怪的问题, 推荐放在根目录下
 * npm i @types/xx可安装声明文件
 * 如果"@types/"下找不到声明文件, 那么就需要我们自己手写了.
*/

//声明文件分2大类, 一类是全局声明, 一类是对模块的声明. 这节只说"全局".
//全局声明
//通过declare我们可以标注js全局变量的类型.
//my.d.ts为全局声明
nc01=4123;
fd001("123");
MyPlugin.s="111";
MyPlugin.s.substr(0,1);
MyPlugin.n.toFixed();
MyPlugin.f('文字').toFixed();

//以下报错
ok02={};
nc01=false；