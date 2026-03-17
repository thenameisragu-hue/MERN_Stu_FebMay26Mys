//Introduction to Callback function
function greetuser(name,callback){
    console.log("Hello ,"+name);
    //The Callback function is executed only after the 
    //execution of the current function
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.");
}


greetuser("Ranjith",showCompletionMessage);
