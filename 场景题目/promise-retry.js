function promiseRetry(runner, times) {
    return () => new Promise((resolve, reject) => {
        let i = 0;
        while (i < times) {
            try {
                const res = runner()
                console.log('共执行了', i, '次，成公');

                resolve(res);
                return;
            } catch (error) {
                console.log('error', error);
                i++;
            }
        }

        console.log('共执行了', i, '次');
        return reject(i)
    })
}

function runner() {
    const res = Math.random() > 0.1
    console.log('res', res);
    if (res) {
        throw Error('发生了错误')
    }
    return true
}



function promiseRetry(fun, times) {
    return function () {
        let tryTime = 0
        return new Promise(async (resolve, reject) => {
            function runner() {
                if (tryTime > times) {
                    reject()
                }
                try {
                    const res = await fun()
                    reject(res);
                } catch (error) {
                    tryTime++;
                    runner()
                }
            }
        })
    }
}

promiseRetry(runner, 10)()
