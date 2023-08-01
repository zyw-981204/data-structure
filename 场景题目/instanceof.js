
function myInstanceof(object, C) {
    let proto = object.__proto__, // 获取对象的原型
        prototype = C.prototype; // 获取构造函数的 prototype 对象

    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;

        proto = proto.__proto__;
    }
}


// 定义构造函数
function C() { }
function D() { }

var o = new C();

console.log(myInstanceof(o, C));; // true，因为 Object.getPrototypeOf(o) === C.prototype

console.log(myInstanceof(o, D));; // false，因为 D.prototype 不在 o 的原型链上

console.log(myInstanceof(o, Object));; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
console.log(myInstanceof(C.prototype, Object));; // true，同上

C.prototype = {};
var o2 = new C();

console.log(myInstanceof(o2, C));; // true

console.log(myInstanceof(o, C));; // false，C.prototype 指向了一个空对象，这个空对象不在 o 的原型链上。

D.prototype = new C(); // 继承
var o3 = new D();
console.log(myInstanceof(o3, D));; // true
console.log(myInstanceof(o3, C));; // true 因为 C.prototype 现在在 o3 的原型链上
