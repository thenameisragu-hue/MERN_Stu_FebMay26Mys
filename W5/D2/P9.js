//promise states: pending,fulfilled,rejected
//successfull promises
const fulfilledpromise = new Promise(function(resolve){
    console.log("fulfilledpromise is pending");

    setTimeout(function(){
        resolve("fulfilledpromise is fulfilled.");
    },1000);
});
//unsuccessfull promises
const rejectedpromise = new Promise(function(resolve,rejected){
    console.log("rejectedpromise is pending.");
    setTimeout(function(){
        rejected("rejectedpromise is rejected.");
    },1500);
});
fulfilledpromise.then(function(message){
    console.log(message);
});
rejectedpromise.catch(function(message){
    console.log(message);
});