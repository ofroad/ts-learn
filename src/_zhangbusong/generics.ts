//泛型
//泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持

// T表示泛型，具体什么类型是调用这个方法的时候决定的
// 表示参数是什么类型就返回什么类型~~~
function getData<T>(value:T):T {
    return value;
}

//使用
getData<number>(123);
getData<string>('1214231');

// 定义接口
interface ConfigFn {
    <T>(value:T):T;
}
const getData01:ConfigFn=function<T>(value:T):T {
  return value;
}
getData01<string>('张三');
getData01<string>(1243);  //错误
