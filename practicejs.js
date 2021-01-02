//if else elif
var a=10;
var b=20
if(a+b>40)
console.log('helllo');
else if(a+b<20)
console.log('hi');
else
console.log('equal');


//switch
var x='days'
switch(x)
{
    case 'mon': console.log('monday');
    break;

    case 'tue':console.log('tuesday');
    break;

    case 'wed':console.log('wednesday');
    break;

    default: console.log('end');  //default agar upar se koi bhi condition martch nai krti ho to
}


//for loop
for(i=0;i<=5;i++){
    console.log(i);
}
//output 0 to 5 chalenga kuki termination me i<=5 hai

//for each
let y=['app','man','gra']
y.forEach(item=>{
    console.log(item);
})

//for of
let c=[10,20,30];
for(item of c){
    console.log(item);
}

//for in 
//ye array ka index dega
for(item in c){
    console.log(item);
}

//output=
//0
//1
//2


//while loop
var i=0;
while(i<10){
    console.log(i);
    i++
}
//output= 0 se 9

//do while
var k=0;
do{
    console.log(k);
    k++;

}while(k<8);

//output 0 se 7 chalega


//unary operator
var x=10;
console.log(++x);  //11
console.log(x); //11
console.log(++x); //12


//arithmetic
var p=10, q=2;
console.log(p**q);
console.log(p%q);

//shift
console.log(8<<2); //out=8*2*2
console.log(8>>2); //0


//relational
console.log(2=='2');
console.log(2==='2');

//hoisting
var x='roshi';
var  name=function(){
    console.log(x);
    x='dubey';
    console.log(x);
}
//name()

//another ex of let and const to stop hoisting

let o='apple';
let op=function(){

    let o='banana';
    console.log(op);
}
op()

//const to stop hoisting
/*
const day='monday';
function days(){
    console.log(day);
    day='tuesday';
    console.log(day);
}
days()
*/


//data type
//symbol
let s1=Symbol('ok');
console.log(s1);

//non primitive
//object
//object literal
let cum={
    'name':'roshi',
    'class':'me',
    f1(){
        console.log(cum);
    }
}
cum.f1()
console.log(cum['name']);


//new keyword
let cx=new Object()
cx.name='ravi';
cx['property']='evergreen';
cx.varrr=function(){
    console.log(`${this.name}`);
}
cx.varrr()



