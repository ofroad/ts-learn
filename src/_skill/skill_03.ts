//3.4后的ts在readonly场景下用Array泛型表示数组会有警告。都改为使用方括号方式可以避免在复杂场景踩坑。
// readonly修饰只能用于方括号的数组和元组上
let err1: readonly Set<number>; // 错误!
let err2: readonly Array<boolean>; // 错误!

let okay: readonly boolean[]; // 无错误
let okay2: readonly [boolean, string]; // 无错误
