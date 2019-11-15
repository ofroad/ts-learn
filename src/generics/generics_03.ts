//泛型接口
//之前学习过，可以使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  
  let mySearch030: SearchFunc;
  mySearch030 = function(source: string, subString: string) {
      return source.search(subString) !== -1;
  }

//当然也可以使用含有泛型的接口来定义函数的形状：
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray030: CreateArrayFunc;
createArray030 = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray030(3, 'x'); // ['x', 'x', 'x']

//进一步，我们可以把泛型参数提前到接口名上：
interface CreateArrayFunc030<T> {
    (length: number, value: T): Array<T>;
}

let createArray031: CreateArrayFunc030<any>;
createArray031 = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']