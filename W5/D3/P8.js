//try catch finally with async/await
function processpayment(issucceeded){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(issucceeded){
                resolve("payment Processed successfully.");
            }
            else{
                reject("Payment couldn't processed successfully.");
            }
        },700);
    });
}

async function runpaymentFlow(issucceeded){
    try{
        const result = await processpayment(issucceeded);
        console.log("success ", result);
    }
    catch(error){
        console.log("Failure: ", error);
    }
    finally{
        console.log("Payment flow completed.");
    }
}

runpaymentFlow(false).then(function(){
    return runpaymentFlow(true);
});