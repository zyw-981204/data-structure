function flatten(array, level = Infinity) {
    if (!Array.isArray(array) || level <= 0) {
        return array;
    }
    return array.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return pre.concat(flatten(cur, level - 1))
        } else {
            return pre.concat([cur])
        }
    }, [])
}

let arr = [1, [2, [3, [1, 2, 3], 4, 5]]];

console.log('flattenArray(arr)', flatten(arr, 1));;  //  [1, 2, 3, 4，5]
