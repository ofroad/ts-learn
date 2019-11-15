//TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。

/** 
 * TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected
 * (1)public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * (2)private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * (3)protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 * 
*/

class Animal {
  public name;
  public constructor(name) {
      this.name = name;
  }
}
//name 被设置为了 public，所以直接访问实例的 name 属性是允许的
let a01 = new Animal('Jack');
console.log(a01.name); // Jack
a01.name = 'Tom';
console.log(a01.name); // Tom


class Animal01 {
  private name;
  public constructor(name) {
      this.name = name;
  }
}
//name 被设置为了 private，所以不能被访问，在ts中会报错
//TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性
// let a02 = new Animal01('Jack');
// console.log(a02.name);
// a02.name = 'Tom';

//使用 private 修饰的属性或方法，在子类中也是不允许访问的
class Animal02 {
  private name;
  public constructor(name) {
      this.name = name;
  }
}

// class Cat extends Animal02 {
//   constructor(name) {
//       super(name);
//       console.log(this.name);
//   }
// }

//而如果是用 protected 修饰，则允许在子类中访问
class Animal03 {
  protected name;
  public constructor(name) {
      this.name = name;
  }
}

class Cat extends Animal03 {
  constructor(name) {
      super(name);
      console.log(this.name);
  }
}

//当构造函数修饰为 private 时，该类不允许被继承或者实例化
class Animal04 {
  public name;
  private constructor (name) {
      this.name = name;
}
}
// class Cat01 extends Animal04 {
//   constructor (name) {
//       super(name);
//   }
// }

// let a000 = new Animal04('Jack');


//当构造函数修饰为 protected 时，该类只允许被继承
class Animal05 {
  public name;
  protected constructor (name) {
      this.name = name;
}
}
class Cat02 extends Animal05 {
  constructor (name) {
      super(name);
  }
}

// let a10 = new Animal05('Jack');


//修饰符还可以使用在构造函数参数中，等同于类中定义该属性，使代码更简洁
class Animal06 {
  // public name: string;
  public constructor (public name) {
      this.name = name;
  }
}


//只读属性关键字，只允许出现在属性声明或索引签名中
class Animal07 {
  readonly name;
  public constructor(name) {
      this.name = name;
  }
}

let a12 = new Animal07('Jack');
console.log(a12.name); // Jack
//会报错
// a12.name = 'Tom';

//readonly 和其他访问修饰符同时存在的话，需要写在其后面。
class Animal08 {
  // public readonly name;
  public constructor(public readonly name) {
      this.name = name;
  }
}