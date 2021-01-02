
//constructor bana lo
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

//display constrtuctor
function Display(){

}
//ye sab hum tr me books add krne ke lie kar rahe hai
//add methods to display prototype
Display.prototype.add = function(book){         //passing book as an argument
    console.log("adding it");
    //ui me add karne ke lie
    tbody=document.getElementById('tablebody');
    
    let ui= `<tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                </tr>`;

    tbody.innerHTML +=ui;


}

//clear method to clear prototype
Display.prototype.clear=function(){
//libraryform clear karna hai
let libform= document.getElementById('libraryform');
libform.reset();
}

//to validate
Display.prototype.validate=function(book){ //validate function book object ko validate krta hai

    if (book.name.length<2 || book.author.length<2)
    {
        return false
    } 
    else{
        return true;
    }
    }

//ek show function banaenge
Display.prototype.show=function(type,displayMessage){
    let message= document.getElementById('message');
    //bootstrap se copy kia hai alert 
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>sorry you  cannot add this book</strong> ${displayMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}
//isse jab add book button pe click krenge to alert aaega upar server pe





//add event listener
let lform=document.getElementById('libraryform');
lform.addEventListener('submit',libsubmit);

function libsubmit(e){
    console.log("form submitted");
    e.preventDefault(); 


    let name=document.getElementById('name').value;
    let author=document.getElementById('author').value;

    //type ke ander -fiction,codes,non fiction 
    let fiction=document.getElementById('fiction');
    let codes=document.getElementById('codes');
    let nonfiction=document.getElementById('non fiction');
    let type;

if(fiction.checked){
    type=fiction.value;
}
    else if(codes.checked){
        type=codes.value;

    }
    else if(fiction.checked){
        type=nonfiction.value;
    }




let book =new Book(name,author,type);  //upar se book function
    console.log(book);
    //yaha tak ye output aaega
//output=form submitted
// book {name: "roshi", author: "roshi", type: "codes"}

//validation lagao
let display=new Display();
if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success');
}

else{
//show error to the user
display.show('error');    
}
}
