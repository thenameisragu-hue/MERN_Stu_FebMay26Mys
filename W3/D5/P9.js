const oncebtn=document.getElementById("oncebtn");

//Limited listener to once only for a event listen
oncebtn.addEventListener("click",function(){
    console.log("This click listener works only once.");
} ,{once:true});

//global keyboard shortcut creation
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key.toLocaleLowerCase()==="s"){
        event.preventDefault();
        console.log("custom ctrl+s shortcut triggered");
    }
});