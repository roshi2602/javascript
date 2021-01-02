//1)symbols in js
//ye string,boolean ki tarah primititve hai
//primitive matlab simplest elements jo available hai 
const sy=Symbol('roro');
console.log(sy);
//output=Symbol(roro)

//another ex
const a="this is"
const b="this is"
console.log(a===b);
//out=true


const k1=Symbol();
const k2=Symbol();
obj={};  //ek object banao
obj[k1]='roshi';
obj[k2]='dubey';
console.log(obj);
//out-{Symbol(): "roshi", Symbol(): "dubey"}
//ye [] vriable me hi use hota hai symbol me

//for loop me symbol nai chalta hai





//2)sets in js -sets value store krta hai
const ok=new Set();  //empty set
//adding values to set
console.log(ok); //out=Set(0) {}
ok.add('orange');
console.log(ok);  //out=Set(1) {"orange"}
ok.add(10);
console.log(ok); //out=Set(2) {"orange", 10}
ok.add(true);
console.log(ok); //out=Set(3) {"orange", 10, true}


console.log(ok.size); //out=3
console.log(ok.has(10)); //out=true  -kya ok ke set me 10 hai then true


//iterating a set
for(let x of ok){
    console.log(x);

}
//output=
//orange
// 10
// true






//3)iterators in js

const n=[1,2,3,4,5];
const n2=n[Symbol.iterator]();  //key[] ,symbol.iterator is a special key which is usef for iterable objects
console.log(n2);  //out=Array Iterator {}
console.log(n2.next()); //out={value: 1, done: false}


for (let x of n){
    console.log(x);
}
//out=1
//2
//3
//4
//5


//another ex
function sq(){
    let v=0;
    
    //iterator must conatin a method called next
    return{
        next(){ //in this next method we need to perform logic
            v++;

            if (v<=5){
                return {
                    value:v*v,  //return value and done=false
                    done:false
                }
            }
            else{
                return {
                    value:undefined, //return value =undefined and done =true
                    done:true
                }
            }

        }
    }
}

const sqiter=sq();
console.log(sqiter.next()); //out={value: 1, done: false}
console.log(sqiter.next()); //out={value: 4, done: false}
console.log(sqiter.next());  //out={value: 9, done: false}


//4)drag and drop
const imgbox=document.querySelector('.imgbox');
const white=document.getElementsByClassName('whitebox');

//drag krne ke lie 2 event listener lagao
//event listeners for draggable imgbox
imgbox.addEventListener('dragstart',(e)=>{  //e for event function
    console.log('drag start');   //jab choda usko
    e.target.className += ' hold';  //yaha pe hold hua while dragging the image
    //jab ek element ko multiple classes deni padti hai tab hume space se unko separate krna padta hai ->' hold'
    //+= is very important
    setTimeout(()=>{ //kuch der me run ho islie settimeoyt
    
    e.target.className ='hide';  
    },0);

});

imgbox.addEventListener('dragend',(e)=>{

    console.log('drag end'); //jab pakda usko
    e.target.className='imgbox'; //border chale jae islie
    //isse  jaise hi choda to box chala jaega

});
//drag kaha krna hai  -white boxes me
for (x of white){
    x.addEventListener('dragover',(e)=>{  //event listener-dragover
        e.preventDefault();  //isse aap elements ko drag kar sakte ho
        console.log('dragover');

    });
    x.addEventListener('dragenter',()=>{ //event listener-dragenter
        console.log('dragenter');

    });
    x.addEventListener('dragleave',()=>{ //event listener-dragleave
        console.log('dragleave');

    });
    x.addEventListener('drop',(e)=>{  //event listener-drop krne ke lie ek whitebox se dusre ko
        e.target.append(imgbox);
        console.log('dragdrop');
//isse ek whitebox se dusre whitebox pe image chali jaegi
    });
}













