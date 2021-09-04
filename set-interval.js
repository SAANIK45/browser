let seconds = 0;
const timeId = setInterval(()=>{
    console.log(seconds++);
    if(seconds === 10){
        clearInterval(timeId);
    }
},1000);