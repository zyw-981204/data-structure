var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function randomArray(array) {
    for (let i = 0; i < array.length; i++) {
        const index = Math.floor(Math.random() * (array.length - 1 - i)) + i;
        [array[i], array[index]] = [array[index], array[i]]
    }
    return array
}


function randomArray1(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const index = Math.floor(Math.random() * (array.length));
        [array[i], array[index]] = [array[index], array[i]]
    }
    return array
}

console.log('randomArray', randomArray1(arr));