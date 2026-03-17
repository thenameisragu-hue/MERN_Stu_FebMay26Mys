//Basic callback variations
//1.a callback with no input data
//2.a callback that receives data from main function

function runTask(callback){
    console.log("Task is running.");
    callback();
}

function runTaskWithResult(taskname,callback){
    console.log("processing task: ",taskname);
    callback("Task"+taskname+" finished successfully.");
}

function showsimpleDoneMessage(){
    console.log("Simple callback executed.");
}

function showDetailedMessage(message){
    console.log(message);
}

//runTask(showsimpleDoneMessage);
runTaskWithResult("Send monthly report",showDetailedMessage);