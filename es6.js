//1)variables
let n1=10;
console.log(n1);

const n2='rohi';
//n2='ro'   //ye const wapas se update nai ho sakta ye error dega
console.log(n2);



//2)template strings
//isme $ ,{},`` use hota hai
const x='roshi';
const y=`hello ${x}`;
console.log(y);



//anotheer ex  by using function
const fname='ghi';
const lname='fjk';

function name(fname,lname){
    return `${fname} ${lname}`;
}

const surname=`hello ${name(fname,lname)}`;
console.log(surname);


//another ex
let red=100;
let green =200;
let pink=300;

const rgb=`colors are ${red}, ${green}, ${pink}`;
console.log(rgb);




//3)arrow functions
//ye zyada code clarity aur code reduction ke lie use hota hai
//dont need to use function keyword here just use ()

const ok=(name,age)=>{   //2 arguments
    return `${name} ${age}`
}

console.log(ok('roshi',34));
console.log(ok('dubey',23));


//another ex
const no=sal=> `${sal}`   //sal argument hai
console.log(no('patal'));


//4)rest and spread operator
//represented by...
const ar=(...args)=>{
    console.log(args);
    //if you want to do sum of this araay then run the loop
    let sum=0
    for(let i=0;i<args.length;i++){
        sum=sum+args[i];
    }
    console.log(sum);
}
ar(1,2,3,4,5);  //output=15


//another example
const arr=(n1,n2,...args)=>{
    console.log(n1);
    console.log(n2);
    console.log(args);
    //if you want to do sum of this araay then run the loop
    let sum=n1+n2
    for(let i=0;i<args.length;i++){
        sum=sum+args[i];
    }
    console.log(sum);
}
arr(1,2,3,4,5);  
//1
//2
//[3,4,5]
//output=15



//5)spread operator
//creates copies of array

let array=[1,2,3,4,5];
let array2=[...array];
let array3=[...array,...array2];
console.log([...array]);  //output=(5) [1, 2, 3, 4, 5]
console.log(array2);         //(5) [1, 2, 3, 4, 5]
console.log(array3); //(10) [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]


//another ex  of creating objects
let ob1={
    name:'roshi'
}
let ob2={
    age:23
}

let ob3={...ob1,...ob2};
console.log(ob3);

//output={name: "roshi", age: 23}


//6)destructuring
//ye unpack karta hai arrays or objects into variables jisse inke sath kaam karna easy ho jata hai
const okk='my name is';
const arrayy=okk.split("");
console.log(arrayy);
//output=(10) ["m", "y", " ", "n", "a", "m", "e", " ", "i", "s"]

//another ex
let fnam='roshi';
let lnam='dubey';
let mnam='vandana'
const per={
    fnam,
    mnam,
    lnam
}


console.log(per);
//output={fnam: "roshi", mnam: "vandana", lnam: "dubey"}




//7)array function -map()
//ye array ko iterate karta hai
//isme callback function use hota hai to perform operation on array
//nayi values can be returned by callback function to create new array


const ary=[1,2,3,4,5];
let newar=ary.map((data,pos)=>{
    console.log(`item at pos${pos} is ${data}`);
});
//map passes 2 items ,1 -item at current position, 2-the position itself
console.log(newar);

/* output=item at pos0 is 1
 item at pos1 is 2
 item at pos2 is 3
 item at pos3 is 4
item at pos4 is 5
(5) [undefined, undefined, undefined, undefined, undefined]
*/
//map ia another way to iterate through array items and we caan perform actions on each elemnt


//another ex
 const arr5=[
{
name:'puja',
age:10,
exp:1 
},
{
name:'ravi',
age:30,
exp:2
}
];

let newarr5=arr5.map((dataa,position)=>{
    console.log(dataa);
    return {
        name:dataa.name,
        age:dataa.age
    };

});
console.log(newarr5);

//output=
/*{name: "puja", age: 10, exp: 1}
{name: "ravi", age: 30, exp: 2}

 (2) [{…}, {…}] -->0: {name: "puja", age: 10}
1: {name: "ravi", age: 30}
length: 2
*/


//8)reduce()
//reduce bhi iterate karta hau through entire array aur callback function accept karta hai
//par difference ye hai ki ye callback ka result ek array se durse array pe pass karta hai
//aur ye callback accumulator(string,object,array,integer) kehlata hai.

//ex
const arrs=[1,2,3,4,5];
const res= arrs.reduce((acc,item) => {             //{} is callback function  //default value of accumulator i.e.0
console.log(item);               //output=1
                                 //       2
                                //        3
                                //        4
                                //        5

console.log(acc);               /*output=
                                        0    
                                        2
                                   undefined
                                        3
                                     undefined
                                        4
                                    undefined
                                        5
                                    undefined*/  // -->it gives undefined because we dont return any value
return acc;         /*output=  we get 0 in all iterations
 2
 0
 3
 0
 4
 0
 5
 0
 */
                            }, 0)                       

console.log(res);




//9)filter()
// ye iterate karta hai through array to create new array. elements should be added in array through some conditions
//ye true or false return karta hai
//true-->for adding element to newarray
//false->to skip the element


//ex-
const array0=[1,2,3,4,5,6,7];
const newarr0=array0.filter(item=>{
    //console.log(item);
    //return true;        //output  res is (7) [1, 2, 3, 4, 5, 6, 7]
    return false;       //output   res is []


}
    );
console.log('res is', newarr0);   /*output=1
2
3
4
5
6
7
res is []
*/



//10)find() and findIndex()
//ES6 has 2 methods to search for elements inside array
//->find()-it is used to search some element in array that matches some condititon.ye retrun karta hai first elemnt that matches the condition
//-->findIndex()-ye return karta hai index of element instead of elemnt

//ex  of find()
const  arr9=[10,20,30,40,50,60];
const newarr9=arr9.find(item =>{
 //   console.log(item);
    //return true;  //returns first element so output=10
    return false;   //no elemts matches the condition so output=result undefined


});
console.log('result',newarr9);
/*output=
10
 20
 30
 40
 50
 60
  result undefined
*/


//example of findIndex()
const  arr8=[1,2,4,5,6,7,8,10];
const newarr8=arr8.findIndex(item =>{
        return(item %5==0);       
});
console.log(newarr8); 
//output=3


//11)classes
/*syntax
class Classname{
    constructor(){

    }
    method =()=>{

    }
}
*/

//ex
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    method=()=>{
        return `${this.name} and ${this.age} `;
    }
    
}
var c=new Person("roshi",20);
console.log(c.method());
//output-roshi and 20 



//12)inheritance
//isme extends keyword use hota hai
/* syntax
class Parent{

}
class Parent extends Child{

}
*/

//ex

class Pilot extends Person{
    constructor(sal,sub){
        super('priya',30);  //super is very imp as it calls the constructor function of parent class
        this.sal=sal;
        this.sub=sub;
    }
    method=()=>{
        return `${this.sal} and ${this.sub} `;
    }
    
}

const vv=new Pilot(290,'maths');
console.log(vv);
vv.method();
//output=Pilot {name: "priya", age: 30, sal: 290, sub: "maths", method: ƒ}


//13)callbacks and promises
//promise handle karta hai asychrounous result of operation
//it has 3 states
//pending=means operation is going on
//fulfilled=means operation is completed
//rejected=means operation did not complete and error can be thrown
//then() method is called when resolve()is executed
//catch() method is called when reject is executed
//ex-
const pro=new Promise(function(resolve,reject){
    setTimeout(function()  {
        resolve("resolve");
},2000)   //2 second me callback

})
//yaha tak call back ka syntax tha
console.log(pro);
pro.then(function(text){
    console.log(text);

})
//output=Promise {<pending>}
//resolve



//chaining promises
//[LEFT AND NOT UNDERSToOD]
