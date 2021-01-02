//1)form events
//4 types
//change-it is used jab input field is changed
//focus-it is used jab input field is focused by the user
//blur-jab input field loses focus
//events-jab submit button is clicked by user


//change

var user=document.getElementById('username');
console.log(user);

user.addEventListener('change',function(e){ //username me name dalo to ye change print krega console pe
    //e for event object
    /*console.log(e.target.value);*/     //to access value in console matlab jo username me type krenge vo console pe dikhega
    var val=e.target.value;
    val=val.toUpperCase();  //lowercase me user me likho to vo uppercase me dikhega console pe
    console.log(val);

    

});



//focus
user.addEventListener('focus',function(){
    console.log('focus');  //username box pe click kro vo console pe focus dega

});

//blur
user.addEventListener('blur',function(){
    console.log('blur'); //kahi bhi except form ke bahar click kro ye blur dega console pe

});

//submit
var sub=document.getElementById('submit');
sub.addEventListener('submit',function(){
    alert('submit') //username ,password bharo aur submit pe click kro ye alert box dega submit ka 
    

});


//2)AJAX
//isse hum bina page reload kre kuch parts update kar sakte hai
//ye use karta hai XMLHttpRequest object to make request to backend server
//json placeholder.com me jao aur fir neeche scroll karo, todos click kro

function ajax(){
    var ht=new XMLHttpRequest();
    ht.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    ht.send()

}
ajax()

//iske baad console ke pass network jao waha all kro waha pe names me todos dikhega


//2)handling HTTP response
//ready state hold krta hai XMLHttpRequest
//available status are-
//unsent-request has initiated but open() not called.it is represented by 0
//opened=open() has been called.it is represented by 1
//headers recieved=send() has been called it is represented by 2
//loading=it means request is being processed.it is represented by 3
//done=request is completed .represtened by 4


//the XMLHTTP Request gives access to onreadystatechange
//it defines function to be excuted when readystate changes


function readystat(){
    var htt=new XMLHttpRequest();
    htt.onreadystatechange=function(){
        if(this.readyState==4){
        //    console.log(this.responseText); //ye puri api ki list dega console pe
        }
    }
    htt.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    htt.send()
}
readystat()


//3)making HTTP post requests
function createitem(){
    var http=new XMLHttpRequest();
    http.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    var ob=JSON.stringify({
        
            "userId": 1,
            "id": 1,
            "title": "roshi",
            "completed": false
          
    });
    http.send(ob);
}

//iske baad console ke pass network jao waha all kro waha pe names me todos dikhega
//todos ke checkbox pe click kro waha pe headers me status code 200 dikega


//4)working with http response data
