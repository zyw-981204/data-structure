function filter(fun) {
    if (typeof fun !== 'function') {
        throw ('error')
    }

    const result = [];

    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        fun(element, index, this) && result.push(element)
    }
    return result
}

function map(fun) {
    if (typeof fun !== 'function') {
        throw ('type error')
    }

    const result = [];

    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        result.push(fun(element, index, this))
    }

    return result;
}
