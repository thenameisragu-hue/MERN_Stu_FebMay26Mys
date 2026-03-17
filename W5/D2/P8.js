//introduction to promises
console.log("program started.");
function getWelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("welcome to promises");
        },1000);
    });
}
const messagepromises = getWelcomeMessage();

console.log("promise created.Result not ready yet.");

messagepromises.then(function(message){
    console.log(message);
});
console.log("Program continuous while the promise is pending.");