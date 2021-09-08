console.log('first');
// setInterval(() => {
//     console.log('tik tik tik tik')
// }, 1000)

// let seconds = 0;

const timeId = setInterval(() => {
    // seconds++;
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000)

console.log('second');

let num = 0;
const number = setInterval(() => {
    console.log(num = num + 5);
    if(num === 50){
        clearInterval(number);
    }
}, 1000);