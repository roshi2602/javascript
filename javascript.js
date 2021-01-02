console.log("hello");
//if else
var a=5,b=6;
if(a+b<11)
	console.log("less than 12");
else if(a+b>11)
	console.log("more than 12");
else
	console.log("equal");

//switch
var day='sun';
switch(day)
{
	case 'mon': console.log('monday');
	break;
	case 'tue': console.log('tuesday');
	break;
	case 'sun': console.log('sun');
}

//
var a=10;
var b=20;

if(a+b>50)
{
	console.log(a+b);
}
else if(a+b<20)
{
	console.log(a+b);
}
else
console.log('hi');



//for loop
for(var i=0;i<5;i++)
	console.log(i);

//for each
let x=['apple','cheery','orange']
x.forEach(item=>console.log(item));

//for of
let y=['apple','cheery','orange']
for(item of y){
	console.log(item);
}
//for in

let z=['apple','cheery','orange']
for(item in z){
	console.log(item);
}

//while loop
var i=0;
while(i<5){
	console.log(+i);
	i++
}

//do while
var j=0;
do{
	console.log(+j);
	j++;
}while(j<5);


//unary 
var n=10;
console.log(n++); //res=10
console.log(n); //res=11
console.log(++n); //res=12

//another example of unary
var g=20;
console.log(g++);
console.log(g);
console.log(++g);


//arithmetic
var d=10, e=5;
console.log("d*e"+(10*5));
console.log("d%e"+(10%5));
console.log(10**5);

//shift
console.log(10>>5);  //output=0
console.log(10<<5); //output=320
console.log(8<<3); //output=64

//relational
//isme type coercion lagega jisse ek res dusre me change hoga ,ex-true will change to false
console.log(2=='2'); //out=true
console.log(2==='2'); //out=false(to stop type coercion===)
console.log(2 !='2'); //first true then false, so output=false
console.log(2 <='2'); //true
console.log(2 !=='2');//true
console.log(2>='2');//true
console.log(2<'2');//false

//bitwise
var a=8, b=2;
console.log(a&b);

//logical
var a=true, b=false;
console.log(a && b);
console.log(a || b);
console.log(!a);

//assignment and ternary
var a=2;
console.log(a);
console.log(a==2)?console.log("ok"):console.log("not ok");

//hoisting
var fav='grapes';
var food=function(){
	console.log(fav);
	fav='noodles';
	console.log(fav);
}
food()

//example of let to stop hoisting
/*
let favo='apple';
let foodie=function(){
	console.log(favo);Let
	let favo='sushi';
	console.log(favo)
}
foodie()

//const to stop hoisting
const whe='sunny';
function change(){
	whe='rainy';
	console.log('whe');
}
change();
console.log('whe');

*/


//block scope of let
for(let k=1; k<5; k++)
{
	console.log(k);
}


//let declaration
for(let dec=1;dec<6;dec++)
{
	console.log(dec);
}

//const 
/*
const c=20;
c=200;
*/

//datatypes
//1)number
var s=20;
typeof(s);
var d=30.55;

var f=-33;
typeof(f);

//string
var s2='hello'
console.log(s2);


var name='dubey';
console.log(name+"is 24 yrs");
console.log('${name} is 24 yrs');



//boolean
var isvalid='true';
console.log(isvalid);


//undefined
var q;
console.log(q);

//null
var l=null;
console.log(l);


//symbol
let s1=Symbol('do');
let ss2=Symbol('did');
console.log(s1==ss2);


//nonprimitive
//1)object
var col={
	'mango':'orange',
	'kiwi':'green',
	'papaya':'yellow'
};
console.log(col['mango']);


//object literal
let animal={
	name:'cat',    //name,color is properties
	color:'black',
	eat(){ //eat is function
		console.log('name');
	}


}
animal.eat();
console.log(animal['color']);



//example
var obj={
	roll:23,
	ide:100,
	sing(){
		console.log(`${this.name}`);
	}
};
console.log(obj.roll);
obj.sing();
console.log(obj['ide']);


//object creation-
//new keyword
let don=new Object();
don.cat='black';
don['prop']='yellow';
don.eat=function(){
	console.log(`${this.cat}`);
}

don.eat();

//object comparison
let anim=new Object()
let cat=anim;
let dog=anim;
console.log(cat==dog)  //same object reference


let horse=new Object();
console.log(cat==horse);//new address allocated

//arrays
var array=[2,3,4]; //elements of array
console.log(array[2]); //index of array

//using new keyword in array
let arr=new Array(23,10,new Object());
console.log(arr);

//using push and pop in array
let ar=[10,20];

console.log(ar.push(30));
console.log(ar.pop());

//example
var a=[1,2,3,4,5];
console.log(a[2]);
console.log(a.push('dooo'));
console.log(a.pop());


//shift and unshift
let arra=[1,2];
console.log(arra.unshift(3)); //output=[3,1,2]
console.log(arra.shift()); //output=[2,1,2]


//splice
let m=[2,3,5,7,8];
console.log(m.splice(1,3)); //output={3} [3,5,7]
console.log(m.splice(0,2));
console.log(m);


//another example
let p=[1,2,3,4,5];
console.log(p.splice(1,4,'hello'));
console.log(p); 
//output=(2) [1,'hello'] -here 2,3,4,5 will be replaced by hello


//slice
let arr1=[1,2,3,4];
let arr2=arr1.slice(1,3); //here elements from index 1 to 3 are assigned as arr2
console.log(arr2);

//printing
//1)using for loop
for(let i=0; i>a.length;i++);
	console.log(a[i]);

//2)using forEach()
a.forEach(item=>console.log(item)); //it will iterate for every item in array


//3)for of
for(item of a){
console.log(item);   //it will access the elememts
}

//4)for in 
//it will access the indexes
for(item in a){
	console.log(item)
}


//function
//function keyword- which starts with function
function happy(){
	console.log("ok");
}

happy()


//another example
console.log(print(5,7));
function print(j,k)
{
	return j+k;
}

//function expression- which does not start start with function but with var
var fa=function(){
	console.log("people")
}
fa()


//IIFE
/*
(function(x ,y)
{
	console.log(x+y);
}
)(10,20);
//output=30

*/
//function methods
let flower={
	smell:'taste',
	eat(s,d){
		console.log(s+d);
	}};
	flower.eat(10,20);


//example
let ob={
	car:'blue',
	fun(w,e){
		console.log(this.car + 'is good'+w+e);
	}
};

let hum={           //hum is object
	car:'red'
}
ob.fun(2,'ok');
ob.fun.call(hum,10,'now');  //with the help of call we are able to borrow the method that is present in ob
ob.fun.apply(hum,[30,'never']); //with the help of apply in square bracket

//using bind 
let per=ob.fun.bind(hum);
per(5,'persons');


//using this keyword
var obje={
	name:'roshi',
	funct(){
		console.log(this.name);
	}
	
}
obje.funct();    //output=roshi






//arrow function
let object={
	name:'gig',
	fun: function(){
	console.log('a',this);
	var funn=() =>      //funn is function and => is arrow function
	{
		console.log('b',this)
	}	
	funn();
	}
};
object.fun();

//output=a {name: "gig", fun: ƒ}
//b {name: "gig", fun: ƒ}



//higher order function-
function canvote(age)     //one function  , age is argument
{
	if(age>=18)
		return true;
	else
		return false;

};
function candrive(age)      //another function
{
	if(age>=16)
		return true;
	else
		return false;
};
function canmarry(age)     /// third function
{
	if(age>20)
		return true;
	else
		return false;
};

console.log(canmarry(24));
console.log(canvote(15));
console.log(candrive(18));





//oops
//encapsulation-
class stu{        //wrapping properties and functions inside stu
	constructor(roll,name)      //constructor keyword with arguments
	{
		this.roll=roll;
		this.name=name;

	}

	fun(){                      //function
		console.log(this.name);

	}
}
	var adam=new stu(23,'adam');  //object
	adam.fun()



//another example-
class box{
	constructor(length)
	{
		this.length=length          //this name collision avoid karta hai
	}

	display(){
		console.log(this);
	}
}
let objec=new box(20);
objec.display();


//abstraction

//__proto__ and prototypeof()-   inheritance
let fat={
	name:'john'
};
let son=Object.create(fat);        //instead of using __proto__ we use Object.create()
console.log(fat.isPrototypeOf(son));


//hasOwnProperty()
var parent={
	name:'roshi',
	fun1:()=>console.log(`${name}`),   //arrow function is used here
	fun2:()=>console.log('ok')
}


var child={
	name:'dubey',
	fun2:()=>console.log("this is food")    //arrow function is used here
}

child.__proto__=parent;

for(let p in child){console.log(p+child.hasOwnProperty(p));};     //for loop  p in child, then print p and child.hasownproperty on p


//another example
var par={
	name:'fifa',
	sing(){
		console.log("sing");
	},
	eat:function(){                 //eat function
		console.log("eat");
	},
	drink:()=>{                //arrow function
		console.log("drink")
	}
};

 var chil ={
 	name:'son',
 	eat()
 	{
 		console.log("eat");
 	}
 };
 chil.__proto__=par;
 for(let pro in chil)
 {
 	console.log(pro+chil.hasOwnProperty(pro));
 };


 //output=name and eat are associated with child, sing and drink is not on its own but is of parent
 //output-
 //name true
//eat true
//sing false
//drink false

//inheritance
class demo{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	grow(){
		console.log(this.x);
	}
}



class were extends demo{       //child class extends parent class
	constructor(x,y,z){
		super(x,y);         //super constructor we are using to call the constructor of parent class
		this.z=z;
	}
	play(){
		console.log(this.x);
	}

}
let weare=new were('x','y','z');         //weare is object, were is calling and is passing values of x,y,z
weare.grow();                    
weare.play();



//example of super keyword-
class car{
	constructor(color){
		this.color=color;

	}
	range(){
		console.log(this);
	}
}


class cardent extends car{
	constructor(color, price){
		super(color);
		this.price=price;
	}
	show(){
		super.range(this);    //super will call range function
	}
}

let ob2=new cardent('red',23000);
ob2.range();




//polymorphism
//1)method overloading-
//is not supported in js


//2)method overriding
class father{
	dis(){
		console.log("france");

	}

}
class childd extends father{
	live(){
		console.log("india");
	}

}

var oob=new childd();  //not passing any arguments
oob.live() // it will override the live

	
//exception handling
console.log(a);    //since var a is not declared so it will print end
console.log("end");

// example
//try and catch block
try{
	console.log(v);
}
catch(error){
	console.log("res"+error);
}

//throw 
function eligible(age){
	if(age<18)
		try{
		throw new Error("under age");
	}
	catch(error){
		console.log(error);
	}

	else
		console.log('you are');
}
eligible(10);


//finally block
try{
	console.log(h);
}
catch(error){
	console.log('ok'+error);
}
finally{
	console.log("end");
}

//another example 
/*
try{
	console.log(o);
}
finally{
	console.log("ended");
}

*/


//DOM
//1) document
//in javascript.html 
console.log("connected");
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.all);
console.log(document.all[3]);
console.log(document.title=123);



//2)window object
var age = prompt("please enter");
if(age>20)
alert("message box");
else
alert("messages");


//DOM elements
//1)document.getelementByid()

var main=document.getElementById('main head');
console.dir(main);        //DIRECTORY will give the properties in that

//2)document.getElementsByClassName()

var sub=document.getElementsByClassName('hobby');
console.log(sub);


//document.getElementsByTagName()

var tag=document.getElementsByTagName('li');
console.log(tag);


console.log(tag[1]);

//document.querySelector()


var tag=document.querySelector('.hobby');
console.log(tag);

/*
//manipulating style in DOM
var main=document.getElementById('main head');
console.log(main.style.color='blue');

 //manipulating text content
//textContent property retrives the text inside inner Html element

//manipulating attributes
var link=document.querySelector('.hobby').link.getAttribute('href');
         //(first argument)               //(second argument)

*/
//Events
/*
function click(id){
	id.innerHTML='click';
}

//button

//to write on console
var button=document.getElementById('btn');
btn.addEventListener('click', function()
{
	console.log("button is clicked");
});

*/
//example
//to write on console  -this will change the li tags into green click color by clicking on button
var list=document.getElementsByTagName('li');
for(var i=0; i<list.length;i++){
     list[i].addEventListener('click',function(){this.style.color='green'})};

//to hover
//to write on console-when you hover on li tag , this will give green color
var list=document.querySelectorAll('li');
for(var i=0;i<list;i++){
list[i].addEventListener('onhover',function(){this.style.color='green';});
}  


//closure  -jab inner fun is self contained means the inner fun is using some variable which is defining outer fun
//in console
function da()
{
	var r=10;

	function ca()
	{
		console.log(r+20);
	}
	return ca;
}
da()

//another exam
//in console
function fam(g){
	return function(f){   //one fun returning another fun
		return function(s){
			console.log(`${g}---${f}--${s}`);
		}
	}
}
fam('ravii')('ram')('raj');


 //currying
 let mul=function(n){
 	return function(m)
 	{
 	console.log(n*m);
 }
}
 let mulby=mul(5);
 mulby(5);
 mulby(10);

//another example using bind
/*
let mult=function(c,v)
{
	console.log(c+v);
}
let dem=mult.bind(this,5);  //bind returns function definition that can be used later
dem(10);
dem(15);
*/



//fun composition
//combining of both functions
//in console
const addn=(a,b)=>a+b;
const muln=(a,b)=>a*b;
addn(2,muln(1,3))

//output=5

//promise
//in console
const ok=new Promise((resolve,reject)=>{            //resolve,reject
	if(true)
		resolve("worked");
	else
		reject("broked");
});
ok.then(result=>result+"ok"); //after promise is filfulled it will print result + message

//output=workedok



//map
//1)pure fun-  output will always be same
const deer=(x,y)=>x+y;
deer(30,40);


//2)impure fun-same input and output will be different
let u=2;         //let is global object and is already defined
const der=(h)=>{
	return x = u+h;
};
der(5)//output=7
der(8)//output=10
//output will always be differen


//map
//console pe
let arr5=[1,2,3,4];
let arr6=arr5.map(numm=>numm*2);
//put arr6
//output=(4)[2,4,6,8]

//filter
//in console
let arr7=[30,4,50,6];
let filarr7=arr7.filter(p=>p>20);


//reduce
/*
let arr9=[2,5,7,9];
let red=arr.reduce((acc,num5)=>acc+n5,10); //2 arguments,accumulator(result),num5,oneby one they are are added to accumulator  
red
//output=10+2+5+7+9=33
*/


//for drawing shapes
let can=document.getElementById("mycanvas");
let draw= can.getContext('2d');

draw.fillStyle='red';            // to fill color of rectangle
draw.fillRect(100,100,30,30);     //to fill rectangle-x position, y-position, width,height
draw.fillStyle='red';          
draw.beginPath();       //to begin path
draw.arc(200,200,10,0,Math.PI*2,false);   //x-position, y-position, radius, startangle(0), endangle(math.pi) ie 2pie r, false for building in anticlockwise direction
draw.closePath();  //to close path
draw.fill();


 //default parameter
function multip(e=1){
	e="ok";
	console.log(e);
}


multip();  //default value=1
multip(undefined); //defalut value=1
multip(20); //default value=20 
//output=undefined


//another example
function date(d=today()){
	console.log(d);
}
function today(){
	return (new Date()).toLocaleDateString("en-US");
}
date()



//another example
function so(s=1,y=s,n=s+y){
	return s+y+n;

}
console.log(so());



//rest parameters
function okk(...args){
	let c=0;
	for(i of args){
		c=c+i;
	}
	return c;
}
okk(1,2,3);

//destructing parameters
let sd,sf,rest;
[sd,sf] = [10,20];
console.log(sd);
console.log(sf);
[sd, sf, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);


//date time in JS
var d = new Date();
//document.getElementById('hobby').innerHTML = d.toDateString();
console.log(d);

//json
let gon={
	name:"roshi",
	age:24
}
console.log(gon);
let my=JSON.stringify(gon); //to convert object into string
console.log(my);
/*to parse */  my= my.replace('roshi','doshu');
console.log(my);

/*to convert into object again*/ newmy=JSON.parse(my);
console.log(newmy);



//generators
function* ros(){
	let i=0;
	yield 1;
	yield 2;
	yield 3;
}
const gen=ros();
console.log(gen.next());  //done=false matlab abhi kahatm nai hua hai ye
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());  //undefined matlab ab khatam hue hai ye



//another ex
function* ro(){
	let i=0;
	while(true){
		yield i++;
	}
} 	
const ge=ro();
console.log(ge.next());  //value=0
console.log(ge.next());   //value =1 
console.log(ge.next().value); //to find value


//MODULES IN modulesinjs.js(export and import)




