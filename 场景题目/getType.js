function getType(obj) {
    if (obj === null) {
        return 'null'
    } else if (typeof obj === 'object') {
        let valueClass = Object.prototype.toString.call(value),
            type = valueClass.split(" ")[1].split("");
        type.pop();
        return type.join("").toLowerCase();
    } else {
        return typeof obj
    }
}