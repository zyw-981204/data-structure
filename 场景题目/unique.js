function unique(array) {
   return [...new Set(array)]
}
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];


console.log('flattenArray(arr)', unique(array));;  //  [1, 2, 3, 4，5]

