//abstract 用于定义抽象类和其中的抽象方法
//首先，抽象类是不允许被实例化的
abstract class Animal020 {
  public name;
  public constructor(name) {
      this.name = name;
  }
  public abstract sayHi();
}

// let a020 = new Animal020('Jack');

//其次，抽象类中的抽象方法必须被子类实现
//我们定义了一个类 Cat 继承了抽象类 Animal，但是没有实现抽象方法 sayHi，所以编译报错了。
abstract class Animal021 {
  public name;
  public constructor(name) {
      this.name = name;
  }
  public abstract sayHi();
}

// class Cat021 extends Animal021 {
//   public eat() {
//       console.log(`${this.name} is eating.`);
//   }
// }

// let cat021 = new Cat021('Tom');


//下面是一个正确使用抽象类的例子
abstract class Animal022 {
  public name;
  public constructor(name) {
      this.name = name;
  }
  public abstract sayHi();
}

class Cat022 extends Animal022 {
  public sayHi() {
      console.log(`Meow, My name is ${this.name}`);
  }
}

let cat022 = new Cat022('Tom');


//类的类型
//给类加上 TypeScript 的类型很简单，与接口类似
class Animal023 {
  name: string;
  constructor(name: string) {
      this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a023: Animal023 = new Animal023('Jack');
console.log(a023.sayHi()); // My name is Jack