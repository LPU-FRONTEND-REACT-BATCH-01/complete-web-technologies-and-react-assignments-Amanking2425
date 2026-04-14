 let price = Number(prompt("Enter amount : "))

 function calc_price(price){
        if(price > 2000 && price<=6000){
            let fifteen_discount = price-(price*15)/100;
            console.log("After applying 15% discount : "+fifteen_discount);
        }else if(price > 6000){
            let twentyfive_discount = price-(price*25)/100;
            console.log("After applying 25% discount : "+twentyfive_discount);
        }else{
            console.log("No offer applied : "+price);
        }
 }

 calc_price(price);