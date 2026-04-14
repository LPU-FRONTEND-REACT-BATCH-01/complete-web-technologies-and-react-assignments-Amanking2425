
// let a =Number(prompt("Enter a value"))


// console.log(typeof a);

// if(a< 0){
//     console.log("Element is less than 0");
// }else if(a == 0){
//     console.log("Element is equal to 0");
// }else{
//     console.log("Element is greater than 0");
// }

let a = Number(prompt("Enter a number"))

if(a<8){
    for(let i = 0;i<a;i++){
        console.log("It is "+a);
    }
}else{
    for(let i=0;i<a*a;i++){
        console.log("It is "+a);
    }
}
