function mySetInterval(timeout = 1000, fun) {

    const timer = {
        canContinue: true
    }
    const run = () => {
        if (timer.canContinue) {
            setTimeout(() => {
                fun()
                run(timeout, fun)
            }, timeout)
        }
    }

    run()
    return () => {
        timer.canContinue = false
    }
}

mySetInterval(1000, () => {
    console.log(123)
})