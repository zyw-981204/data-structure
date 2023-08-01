function debounce(fun, delay) {
    let timer = null;
    return function (...args) {
        const context = this;
        if (timer) {
            clearTimeout(timer)
            timer = null;
        };
        timer = setTimeout(() => {
            fun.apply(context, ...args)
        }, delay)
    }
}


const debounceFun = function() {
    console.log(123)
}

const fun = debounce(debounceFun, 1000);




fun();
console.log(1);
console.log(2);
setTimeout(fun, 1000)
console.log(3);



