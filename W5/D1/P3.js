consolelog("Node js Architecture demo");
console.log("1.Script Started");

//SetTimeout
setTimeout(()=>{
    console.log("3. Timer Callback finished after waiting");
},1000);
console.log("2. Script Continued Without Waiting for Timer Callback");