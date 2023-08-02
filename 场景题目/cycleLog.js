function cycleLog() {
    for(let i = 1; i <= 5; i++) {
        ((i) => {
            setTimeout(() => {
                console.log(i);
            }, i* 1000)
        })(i)
    }
}

cycleLog()