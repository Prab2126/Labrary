let bookName=document.querySelector("#book");
let authorName=document.querySelector("#author");
let typeOfBook=document.querySelector("#typeof");
let addBookBtn=document.querySelector("#addingBtn");
let printingParent=document.querySelector(".scroll-bar")
let flot=document.querySelector(".floting");

let book="";
let author="";
let booktype="";


function check() {
    addBookBtn.disabled=book === "" || author ==="" || booktype === "" ? true:false ;
}
bookName.addEventListener("input",e=>{
    book=e.target.value;
    check()
});

authorName.addEventListener("input",e=>{
    author=e.target.value;
    check()
})
typeOfBook.addEventListener("input",e=>{
    booktype=e.target.value;
    check();
})

class books {
    constructor(book,author,typeofbook) {
        this.bookName=book;
        this.authorName=author;
        this.typeofbook=typeofbook;
    }


popupCreate(){

    flot.insertAdjacentHTML("afterbegin",'<div class="toast-add"><div class="toast-symbole">+</div><div class="toast-info"><strong>Success</strong><span>Your book has been saved</span></div><div class="toast-anim"></div></div> ');    
    flot.firstElementChild.style.left="10px";
    flot.firstElementChild.addEventListener("click",e=>{
        flot.removeChild(flot.firstElementChild);
    
    });
    setTimeout(()=>{
        
        flot.firstElementChild.style.left="-500px";


    setTimeout(()=>{
        flot.removeChild(flot.firstElementChild);

    },1000);
    },4000);

}

popoutCreate(){
    flot.insertAdjacentHTML("afterbegin",'<div class="toast-add remove"><div class="toast-symbole remove-symbole">x</div><div class="toast-info"><strong>Removed</strong><span>Your book has been removed</span></div><div class="toast-anim remove-anim"></div></div>')


flot.firstElementChild.addEventListener("click",e=>{
    flot.removeChild(flot.firstElementChild);

});

    setTimeout(()=>{
        
        flot.firstElementChild.style.right="-500px";


    setTimeout(()=>{
        flot.removeChild(flot.firstElementChild);

    },1000);
    },4000);

}



 Elementcreate(){
    let parenet=document.createElement("div");
    parenet.classList.add("span-create");
printingParent.append(parenet);   


let span1=document.createElement("span")
    parenet.append(span1);
span1.innerText=this.bookName;
    

let span2=document.createElement("span")
    parenet.append(span2);
span2.innerText=this.authorName;


let span3=document.createElement("span")
    parenet.append(span3);
    span3.innerText=this.typeofbook;

    let remove=document.createElement("button")
    remove.innerText="x";
    parenet.append(remove);



    remove.addEventListener("click", () => {
        printingParent.removeChild(parenet); // Only removes this specific parenet
this.popoutCreate()

    });
 }
}


addBookBtn.addEventListener("click",e=>{
const objBook=new books(book,author,booktype);
let clear="";
bookName.value=clear;
authorName.value=clear;
typeOfBook.value=clear;
book=clear;
author=clear;
booktype=clear;
objBook.popupCreate();
objBook.Elementcreate();
check();

// localStorage.setItem(Elementcreate());
});