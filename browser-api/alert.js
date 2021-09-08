console.log('i am here');

// alert('Ma is coming!!');

const maComing = () => {
    alert('Ammu is coming. Open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de');
    }
    else {
        console.log('DGM !!! Door e giya mor!!!');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name)
    }
}

const askTour = () =>{
    const ques = confirm('are you want to go');
    console.log(ques);
    if(ques === true){
        alert('tk de');
    }else{
        alert('ok');
    }
}

const takeName = () =>{
    const name = prompt('whats your name');
    console.log(name); 
}