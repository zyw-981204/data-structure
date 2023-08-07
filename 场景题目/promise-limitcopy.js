class Scheduler {
    constructor(num) {
        this.num = num;
        this.doingList = [];
        this.waitingList = [];
    }

    addTask(task) {
        if (this.num > this.doingList.length) {
            this.doingList.push(task);
            this.performTask(task);
        } else {
            this.waitingList.push(task);
        }
    }

    performTask(task) {
        task().then(res => {
            const index = this.doingList.indexOf(task);
            this.doingList.splice(index, 1);
            if (this.waitingList.length) {
                const nextTask = this.waitingList.shift();
                this.doingList.push(nextTask);
                this.performTask(nextTask);
            }
        })
    }
}

function createAsyncTask(count) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`执行时间${count}s`);
            resolve();
        }, count * 1000);
    });
}


const scheduler2times = new Scheduler(1);
scheduler2times.addTask(() => createAsyncTask(2))?.then(() => { console.log('任务1执行完成'); });
scheduler2times.addTask(() => createAsyncTask(3))?.then(() => { console.log('任务2执行完成'); });
scheduler2times.addTask(() => createAsyncTask(1))?.then(() => { console.log('任务3执行完成'); });
scheduler2times.addTask(() => createAsyncTask(1))?.then(() => { console.log('任务4执行完成'); });
scheduler2times.addTask(() => createAsyncTask(1))?.then(() => { console.log('任务5执行完成'); });
