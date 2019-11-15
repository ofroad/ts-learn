//泛型约束
//在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity01(arg) {
    console.log(arg.length);
    return arg;
}
