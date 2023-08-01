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


const weakMap = new WeakMap()

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