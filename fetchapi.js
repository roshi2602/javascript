
//fetch API-


//1)to get data
console.log("fetch API");
let mybtn=document.getElementById('mybtn');
let content=document.getElementById('content');

function getdata(){
	console.log("start")
    //url='fetch.txt';  /*text ke lie*/
    url='https://api.github.com/users'  //json ke lie
	fetch(url).then((response)=>{   //jaise hi ye function promise return karta 
	console.log("inside1");
    //return response.text();   /*text ke liye*/
    return response.json();  //isse data parse ho jata hai json me

	}).then((data)=>{
		console.log('inside2')
		console.log(data);
	})

}
console.log("before running")
getdata();
console.log("after running");


//2)post data
/*fetch api post me url ke sath parameter(params) leti hai*/


function postdata(){
    url='http://dummy.restapiexample.com/api/v1/create';   //dummy.restapiexample.com se li hai ye
    data='{"name":"roshi2602","salary":"123","age":"23"}'
    params={                           //2 parameters
        method :'post',                 //method
        header : {                       //data json ke format me aane wala hai
            'Content-Type' : 'application/json'     
        },
       // body:JSON.stringify(data)  //data ko string ke form me dedo,kuki data ek object hai,object ko stringify krne ki zarurat hai
       body:data
    
    }

    fetch(url,params).then(response=> response.json())  //only 1 parameter is required so make it one liner 
    .then(data => console.log(data));
}


postdata()


//-------------------------------------------
//output== 
/* {status: "success", data: {…}, message: "Successfully! Record has been added."}
data:
id: 4125
__proto__: Object
message: "Successfully! Record has been added."
status: "success"
__proto__: Object

*/

//-------------------------------------------- 



