function flattenArray(array) {
    return array.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return pre.concat(flattenArray(cur))
        } else {
            return pre.concat(cur)
        }
    }, [])
}

let arr = [1, [2, [3,[1,2,3] ,4, 5]]];

console.log('flattenArray(arr)', flattenArray(arr));;  //  [1, 2, 3, 4，5]

