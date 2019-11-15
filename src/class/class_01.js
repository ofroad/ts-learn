//TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。
/**
 * TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected
 * (1)public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * (2)private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * (3)protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 *
*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a01 = new Animal('Jack');
console.log(a01.name); // Jack
a01.name = 'Tom';
console.log(a01.name); // Tom
