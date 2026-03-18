// Handle errors with try/catch

function loadCustomerprofile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = true;

        if(isServiceAvailable){
            resolve("Success! Customer profile loaded.");
        }
        else{
            reject("Unsuccessful!! Customer profile unavailable.");
        }
    });
}

async function showCustomerProfile(){
    try{
        const message = await loadCustomerprofile();
        console.log(message);

    }
    catch(error){
        console.error("Error:",error);
    }
    
}
showCustomerProfile();