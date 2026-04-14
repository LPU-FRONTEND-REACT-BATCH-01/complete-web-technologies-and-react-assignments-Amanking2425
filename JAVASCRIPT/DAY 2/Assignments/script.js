
function stove(){
    setTimeout(() => {
        console.log("Stove is burning");
    }, 1000);
}

function friedOnion(){
    setTimeout(() =>{
        console.log("Frying Oil");
    },4000);
}

function putOil(){
    setTimeout(() =>{
        console.log("Putting oil in the pan");
    },2000);
}

function putRice(){
    setTimeout(() =>{
        console.log("Putting Rice at the end");
    },5000);
}

stove();
putOil();
putRice();
friedOnion();