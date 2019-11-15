//extends(条件类型)
//T extends U ? X : Y
//用来表示类型是不确定的, 如果U的类型可以表示T, 那么返回X, 否则Y. 举几个例子:
//明显string的范围更大, '123'可以被string表示, 
type A070 =  string extends '123' ? string :'123' // '123'
type B070 =  '123' extends string ? string :123 // string

