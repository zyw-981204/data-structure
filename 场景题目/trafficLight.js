
const config = [{
    color: 'red',
    wait: 3000
},
{
    color: 'green',
    wait: 1000
},
{
    color: 'yellow',
    wait: 2000
}]

function sleep(wait) {
    return new Promise(resolve => {
        setTimeout(resolve, wait)
    })
}
async function trafficLight() {
    for (const item of config) {
        await sleep(item.wait);
        console.log(item.color);
    }

    trafficLight()
}

trafficLight()