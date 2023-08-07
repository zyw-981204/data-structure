class EventCenter {
    constructor() {
        this.handlers = {};
        this.listen = (key, cb) => {
            if (key in this.handlers) {
                this.handlers[key].push(cb)
            } else {
                this.handlers[key] = [cb]
            }

            return () => {
                this.handlers[key] = this.handlers[key].filter(item => item !== cb)
            }
        }
        this.dispatch = (key, ...params) => {
            this.handlers[key]?.forEach(element => {
                try {
                    element(params)
                } catch (error) {

                }
            });
        }
    }


}



const eventCenter = new EventCenter();
const revoke = eventCenter.listen('aaa', () => {
    console.log('aaa');
})
revoke()
eventCenter.dispatch('aaa')