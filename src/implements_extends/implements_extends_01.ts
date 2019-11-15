//implement，实现。与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约
//implement基本用法：
interface IDeveloper {
    name: string;
    age?: number;
 }
 // OK
 class dev implements IDeveloper {
     name = 'Alex';
     age = 20;
 }
 // OK
 class dev2 implements IDeveloper {
     name = 'Alex';
 }
 // Error
//  class dev3 implements IDeveloper {
//      name = 'Alex';
//      age = '9';
//  }
 
 //而extends是继承父类，两者其实可以混着用：
 //class A extends B implements C,D,E

 //搭配 interface和type的用法有：
 interface Shape {
     area():number
 }
 type Perimeter= {
    perimeter():number
 }

 class Rectangle implements Shape,Perimeter {
     x=2
     y=3
     area() {
         return this.x*this.y
     }
     perimeter() {
         return 2*(this.x+this.y)
     }
 }