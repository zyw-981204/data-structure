function shallowCopy(obj) {
    if (!obj || typeof obj !== 'object') {
        return
    }
    const resulet = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            resulet[key] = obj[key]
        }
    }
    return resulet
}


function deepClone(obj, map = new WeakMap()) {
    if (obj === null || typeof obj !== "object") {
        return obj
    }

    if (map.has(obj)) {
        return map.get(obj)
    }

    const newObject = Array.isArray(obj) ? [] : {};

    map.set(obj, newObject)
    for (const key in obj) {
        newObject[key] = deepClone(obj[key], map)
    }

    return newObject;
}
// Test the deepClone function
const obj1 = {
    a: 1,
    b: [1, 2, 3],
    c: {
        d: 4
    }
};

const obj2 = deepClone(obj1);

console.log(obj2); // Should output a deep copy of obj1

