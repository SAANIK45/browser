//
let seconds = 0;
const timeId = setInterval(()=>{
    //starts with initial value
    console.log(seconds++);
    //starts with increment value
    console.log(++seconds);
    if(seconds === 10){
        clearInterval(timeId);
    }
},1000);