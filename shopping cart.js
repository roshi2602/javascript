//price ke lie
var itemprice=document.getElementById('item')
console.log(itemprice.innerHTML);
//line 5,6 item ki price ke lie hai

//ab product ki amount ke lie
var product_price=document.getElementById('amount');

//shipping charge ke lie
var ship=document.getElementById('shipping');


//ab total price ke lie
var total_price=document.getElementById('total_price');
console.log(total_price);
//coupon code ke lie
var discount_code=document.getElementById('discount_code'); //discount_code html ki line 177 se


//ye jo logic hum laga rahe hai ye shirt wali image pe laga rahe hai
//isme jeans ki quantity +-krne ke lie use karrahe hai


const decreaseNumber=()=>{   //onclick me html me decreaseNumber dia hai waha se ye uthaya hai
    var iot=document.getElementById('textbox');
 //   console.log(iot);


 //ye cart me +- krne ke lie laga rahe hai
 if (iot.value < 0){
     iot.value=0;
 } 
 else{
     iot.value=parseInt(iot.value)-1;
     itemprice.innerHTML=parseInt(itemprice.innerHTML)+15;  //ye line item ki price ke lie hai
     product_price.innerHTML=parseInt(product_price.innerHTML)+15; //ye line product ki price ke lie hai
     total_price.innerHTML=parseInt(product_price.innerHTML)+parseInt(ship.innerHTML); //totalprice=product price+shipping charge

    }
}
  //parseInt() parse karta hai string aur return krta hai integer
//ye condititon se hua ye ki cart me +- chal gaya 
//button click krne se jeans ki quantity cum hori hai


//ab apan product ki quantity zyada krenge 
const increaseNumber=()=>{   //onclick me html me increaseNumber dia hai waha se ye uthaya hai
    var iot=document.getElementById('textbox');
 //   console.log(iot);


 //ye cart me +- krne ke lie laga rahe hai
 if (iot.value >= 5){ //agar item ki value 5 se badi ho to alert box dedo
     iot.value=5;  //agar quantity 5 ya uuse zyada hai to ek alert box dedo
     alert('not more than 5 allowed');
 } 
 else{
     iot.value=parseInt(iot.value)+1;
     itemprice.innerHTML=parseInt(itemprice.innerHTML)+15;
     product_price.innerHTML=parseInt(product_price.innerHTML)+15;
     total_price.innerHTML=parseInt(product_price.innerHTML) + parseInt(ship.innerHTML);
 }
}

//isse jeans ki quantity + button click krne pe badh gayi





//ab same copy krdo pura upar ka jeans wali image ke lie
var itempric=document.getElementById('item1')
console.log(itemprice.innerHTML);
//line 57,58 item ki price ke lie hai

//line 1 t0 38 copied
const decreaseNumber1=()=>{   //onclick me html me decreaseNumber dia hai waha se ye uthaya hai
    var iot1=document.getElementById('textbox1');
 //   console.log(iot);


 //ye cart me +- krne ke lie laga rahe hai
 if (iot1.value < 0){
     iot1.value=0;
 } 
 else{
     iot1.value=parseInt(iot1.value)-1;
     itempric.innerHTML=parseInt(itempric.innerHTML)+15;
     product_price.innerHTML=parseInt(product_price.innerHTML)+15;
     total_price.innerHTML=parseInt(product_price.innerHTML) + parseInt(ship.innerHTML);
 }
}
  //parseInt() parse karta hai string aur return krta hai integer
//ye condititon se hua ye ki cart me +- chal gaya 
//button click krne se jeans ki quantity cum hori hai


//ab apan product ki quantity zyada krenge 
const increaseNumber1=()=>{   //onclick me html me increaseNumber dia hai waha se ye uthaya hai
    var iot1=document.getElementById('textbox1');
 //   console.log(iot);


 //ye cart me +- krne ke lie laga rahe hai
 if (iot1.value >= 5){ //agar item ki value 5 se badi ho to alert box dedo
     iot1.value=5;  //agar quantity 5 ya uuse zyada hai to ek alert box dedo
     alert('not more than 5 allowed');
 } 
 else{
     iot1.value=parseInt(iot1.value)+1;
     itempric.innerHTML=parseInt(itempric.innerHTML)+15;
     product_price.innerHTML=parseInt(product_price.innerHTML)+15;
     total_price.innerHTML=parseInt(product_price.innerHTML) + parseInt(ship.innerHTML);
 }
}



//coupon ke lie abb..
const discount=()=>{  //discount html ki line 178 se 
    let current_amount=parseInt(total_price.innerHTML); //total amount fetch kar lia
    let error_throw=document.getElementById('error');  //error throw krna hai agar galat code dala to
    
    
    if(discount_code.value==='roshi'){  //html ki line 177 se
        let current_amount=total_price-15 //subtracting 15 rs from total_price 
        total_price.innerHTML=current_amount;  // now total_price =cureent_amount
        error_throw.innerHTML='valid code!!'
    }
    else{
        error_throw.innerHTML='valid code is roshi!!'

    }
    

    
}