const alarms=document.getElementById('setalarm');
alarms.addEventListener('click',setit);



var audio= new Audio("https://interactive-examples.mdn.mozilla.net/pages/tabbed/audio.html");

function ringg(){
    audio.play(); 
}




function setit(e){
    e.preventDefault() //isse setalarm button click hone ke baad page bar bar reload nai hoga //preventDefault rokta hai page ko bar bar reload karne se



const ala=document.getElementById('alarm');
alaDate=new Date(ala.value);
console.log(`setting alarm for ${alaDate}`);
//time wale input me date dalo 
//for ex-2020-08-08 13:08:20
//ye console pe dega -setting alarm for Sat Aug 08 2020 13:08:20 GMT+0530 (India Standard Time)
now=new Date();
console.log(alaDate - now);  
//ye 2 lines itne milisecond ke baad alarm ko bajane ke lie hai
// for ex-enter 2021-08-08 13:08:20
//console-19563233380 miliseconds


let timetoalarm=alaDate-now
console.log(timetoalarm);
if(timetoalarm>=0){  //to ring the bell
    setTimeout(()=>{
        console.log("ring the bell")
        ringg();

    },timetoalarm);
}



}

