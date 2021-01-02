let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');  //all buttons

let screenValue ='';  //abhi screen value blank hai  //screenValue is a variable

/* is overall logic me screen.value important hao for displaying on the screen of calculator*/

for(item of buttons){
    item.addEventListener('click',(e)=>{  //e is arrow function
        buttonText=e.target.innerText;  //button ka texzt=vo button jo click hua hai.innerTeXT (BUTTON KE ANDER KA TEXT)
        console.log('button',buttonText);
        if(buttonText== 'X'){  //agarbuttontext X hai then
            buttonText  = '*';  //agar buttontext X hai to usko * kardo

            screenValue += buttonText; //screenValue buttontext ho jae //dobara se X likha to input pe * aa jae
            screen.value=screenValue;  //screen.value equals to screenvalue //screen.value ye var screen ki value hai
        }
        else if(buttonText=='C'){    //agar C press karo to screen pe value khali ho jae
            screenValue= '';   //for empty screenvalue
            screen.value=screenValue;

        }
        else if(buttonText=='='){   //agar buttontext = hai then do the evaluation
         screen.value=eval(screenValue);  //eval for evaluating screen value

        }

        else{
            screenValue += buttonText; 
            screen.value=screenValue;
        }
})
}
