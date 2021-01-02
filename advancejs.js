/*
import deo from './advance2.js';
const v=new deo();        //creating object of javascript.js in this file 
v.volume();                             
*/
 
 /*
 import cool from './advance2.js';
 cool();
 */


/*
 import ff from './advance2.js';
 console.log(ff);

 */

/*
 import {no} from "./advance2.js";
 const nn= new no();
 n.no();
 */

/*
 import {sh} from './advance2.js';
sh()
*/
/*
import {hh} from './advance2.js';
console.log(hh);
*/


//REGULAR EXPRESSION
console.log("fff");
let reg = /roshi/ //this is regular exp literal in JS
let regy=/roshi/g; //g is global
let regt=/roshi/i; //i is case sensitive; capital or small
console.log(reg);
console.log(reg.source);
console.log(regy);
console.log(regt);

/*function to match regular expression*/
//1)exec()
let dod="this is roshi and roshi";
let cc=reg.exec(dod);
console.log(cc);
console.log(cc.input);   //string wala content
console.log(cc.index);



//2)test() return true or false
let res=reg.test(dod);
console.log(res);

//3)match() it will return array of results or null
let res2=dod.match(reg);
console.log(res2);

//4)search() -returns index of first match or -1
let res3=dod.search(reg);
console.log(res3);

//5)replace()- ye return karega new string with all the replacements
let res4=dod.replace(regy,'dubey');   //regy with global for all replacements
console.log(res4);

//meta character symbols

let regexx=/vandana/;
regexx =/^v/;  //1)starts with v se islie carat(^v)
regexx=/na$/;  //2)ends with $
regexx=/v.ndana/;  //3) dot for matches any one character
regexx =/van?danao?/;   //4)optional character
regexx= /v\*andana/;    //5)escape character matlab aap yaha literally * ko match karoge

console.log("this is regex");
let regex=/roshi/;
let str='vandana is good and vandana codes';
let res5=regexx.exec(str);
console.log(res5);

if (regexx.test(str)){
	console.log(`string ${str} matches ${regexx.source}`);  //output-string vandana is good and vandana codes matches VANDANA
}
else{
	console.log(`string ${str} not matches ${regexx.source}`);
}



//character sets[]

console.log("this is charsets");
let rege= /h[a-z]rry/;      //can be any of the character a to z
rege=/h[aty]rry/;        //can be a, t,y
rege=/h[a-zA-Z]rr[0-9]/;       //we can have many character sets
const strr="harry4";
console.log(rege);


if (rege.test(strr)){
	console.log(`string ${strr} matches ${rege.source}`);  
}
else{
	console.log(`string ${strr} not matches ${rege.source}`);
}



//quantifiers-koi character ki quantity specify krna chahate ho to
regg=/har{2}y/;  // r 2 bar hai 
regg=/har{0,2}y/;  //r 0se 2 time tak aa sakta hai

strs="harry"


if (regg.test(strs)){
	console.log(`string ${strs} matches ${regg.source}`);  
}
else{
	console.log(`string ${strs} not matches ${regg.source}`);
}


//shorthand character classes
let reggs=/\war/;  //word character means 1 underscore,alphabet,number
reggs=/\Wok/;  //W for non word character
reggs=/\W+ok/;  //W+ for more than 1 non word character
reggs=/\d494/;   //\d for digit ke baad last 3 nos..
reggs=/\d+/;       //for all digits
reggs=/\ska number/;  //space characters
reggs=/\s+ka number/;  //more than 1 space characters
reggs=/bhd\b/; //boundry


strrr="harbacdh47bhd $$$$ok ka number 99494"


if (reggs.test(strrr)){
	console.log(`string ${strrr} matches ${reggs.source}`);  
}
else{
	console.log(`string ${strrr} not matches ${reggs.source}`);
}


//assertions
rgx=/h(?=a)/;  //h ke baad a aae
rgx=/h(?!y)/;    //h ke baad y na aae

st='harry'


if (rgx.test(st)){
	console.log(`string ${st} matches ${rgx.source}`);  
}
else{
	console.log(`string ${st} not matches ${rgx.source}`);
}


//form validation project using regular expression
console.log("form validation");
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');


name.addEventListener('blur',()=>{
	console.log("name is ok");

	let reggg=/([0-9a-zA-Z]){2,10}/;  /*regular expression for name validation*/
	let stringg=name.value;
	console.log(reggg,stringg);

/*for validation ki name ke alawa no.,email na likh pae*/
	if (reggg.test(stringg))
{
	console.log("matched");
	name.classList.remove('is-invalid')
	validName=true;  //form submit ke lie
}
else{
	console.log("no match");
	name.classList.add('is-invalid');
}


})  //output = name ka column fill krne ke baad bahar white space me click karo,it will give the result in console
	


phone.addEventListener('blur',()=>{
	console.log("phone is ok");

	let reggg=/^([0-9]){10}$/;
	let stringg=phone.value;
	console.log(reggg,stringg);


/*for validation ki number ke alawa name,email na likh pae*/

	if (reggg.test(stringg))
{
	console.log("matched");
	phone.classList.remove('is-invalid')
	validPhone=true;  //form submit ke lie

}
else{
	console.log("no match");
	phone.classList.add('is-invalid');
}


})



/*for validation email ke lie*/
email.addEventListener('blur',()=>{
	console.log("email is ok");

/*regular expression for email validation*/
	let reggg=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;  //(roshi)@(code with).
	let stringg=email.value;
	console.log(reggg,stringg);

	if (reggg.test(stringg))
{
	console.log("matched");
	email.classList.remove('is-invalid')
	validEmail=true;  //form submit ke lie
}
else{
	console.log("no match");
	email.classList.add('is-invalid');
}


})


/*form submit ke lie*/
let validEmail=false;
let validPhone=false;
let validName=false;


let submit=document.getElementById('submit');
submit.addEventListener('click',()=>{
	console.log("submitted");
	console.log(validEmail,validName,validPhone);


/*form valid hone teeno(vali email, valid phone, valid name) ke lie tabhi submit*/

if (validEmail && validName && validPhone){
	console.log("three are valid then submit form");

	let success=document.getElementById('success');
	success.classList.add('show');
	failure.classList.remove('show');
}
else{
console.log("dont submit");

	let failure=document.getElementById('failure');
	failure.classList.add('show');
	success.classList.remove('show');
}

})









//for in and for of() loop

obj={
	nam:'roshi',
	lang:'python'

}
console.log(obj);


//for in loop
for (let key in obj){
	console.log(obj[key]);  //obj ke ander string hai i.e. name,lang islie [key]
}
//output=roshi
//python

//for in can also be used in string
strin='hello my name is';
for (let ch in strin){
	console.log(strin[ch]);
}

//output=h
//e
//l
//l
//o.........

//for of() loop
people=['ravi','raj','era','roshi'];
for(var nam of people){  //in index ke lie hota hai, of names ke lie hota hai
	console.log(nam);
}











//Async/Await
/*async -promise return karta hai*/
/*await-control wapas chale jata hai*/ 

async function lo(){
	/*async ke ander 2 promises ke await hone ka wait kar rahe hai*/
	//async promise return karega
	const response=await fetch('https://api.github.com/users');  //await matlab ki function tum jao aur baki kam karo
/*git hub ki link dedo waha se ye api fetch kar lega*/

	console.log("before");
	const users=await response.json();  //ye json me convert ho jaegi
	console.log("after");
	return users;  //async wali promise return par resolve ho jaegi

}

console.log('async start');
let variab=lo();  //variab ek promise hai
console.log(variab);
variab.then(data => console.log(data)) //jab bhi variab wali promise resolve hoti hai tab ye jo data hai console.log kardo ye data
console.log("end");





//Math object
let oo=3;
let yy=7;
let z;
z=oo+yy;
z=Math;
z=Math.PI;   //pi ke lie
z=Math.E;
z=Math.ceil(5.6);   // ceil matlab chhat pe pohocha do ex-5 ko upar karenge=6
z=Math.floor(5.2);
z=Math.abs(-5); //abs is for neg no. to convert into positive no.
z=Math.sqrt(25);
z=Math.pow(2,3); //2 to the power 3 output=8
z=Math.min(2,3,4,56); // 2 is small no.
z=Math.random(); //any random no.
z=100*Math.random(); //0 se 100 ke beach me random value in decimal
z=Math.ceil(100*Math.random()); //0 se 100 ke beach me random value in integers
console.log(z);



//Destructuring
//array destructuring
let ae,bw;
[ae,bw]=[20,30];
console.log(ae,bw);
[a,b,c,d,...e]=[1,2,3,4,5,6,7,8,9];
console.log(a); //output=1
console.log(b); //2
console.log(c); //3
console.log(d); //4 
console.log(e); //5,6,7,8,9

//object structuring
const laptop={
	model:"hp",
	memory:23,
	capacity:"good",

	start:function(){
		console.log('hi');
	}
};
	const {model,memory,capacity}=laptop;
	console.log(model,memory,capacity)
//output=hp 23 good 




//template literals-isme \n lagane ki zarurat nai hai jaisa chahate hai waisa mil jaega string format isme
console.log(`my name is roshi
	age is 24`);


//$ is used to fetch
//\n is zarurat nai hai isme for new line
let fname='roshi';
let lname='dubey';
console.log(`my name is${fname}. my last name is ${lname}`);
console.log(`my name 
	${fname+lname}`);