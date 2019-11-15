//接口与接口之间可以是继承关系
//用 extends 使 LightableAlarm 继承 Alarm
interface Alarm {
  alert();
}

interface LightableAlarm extends Alarm {
  lightOn();
  lightOff();
}


//接口继承类
//接口也可以继承类
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};


//混合类型
//可以使用接口的方式来定义一个函数需要符合的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch02: SearchFunc;
mySearch02 = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}


//有时候，一个函数还可以有自己的属性和方法
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;