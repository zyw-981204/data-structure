function myApply(context, args) {
  if (typeof this !== 'function') {
    throw ('error ')
  }
  const target = context || window;
  const symbol = Symbol('1');
  target[symbol] = this;

  const result = target[symbol](...args);
  delete target[symbol]
  return result
}
Function.apply = myApply

function sayHello(aaa) {
  console.log("函数中的this: ", this);
  console.log("你好, " + this.name);
  console.log("params, ", aaa);
}
let person = { name: "张三" };
sayHello(person);
sayHello.apply();
sayHello.apply(person, [1, 2]);



// // 传进来时obj， args
// function myApply(obj, args) {
//   if (typeof this !== 'function') {
//     throw ('error ')
//   }
//   const context = obj || globalThis;
//   const symbol = Symbol('1');
//   const fun = this;
//   context[symbol] = fun;
//   const res = context[symbol](...args);
//   delete context[symbol];
//   return res;
// }