function myNew(F, ...args) {
    const newObject = {};
    let result = null;
    newObject.__proto__ = F.prototype;
    result = F.apply(newObject, args);
    return result ? result : newObject
}