// callback function
//Is a function which is passed an an argument
// to another function

function greetuser(name,callback){
    console.log("Hello,",name);
    callback();
}
greetuser("Raghavenda",function(){
    console.log("Callback function executed");
});