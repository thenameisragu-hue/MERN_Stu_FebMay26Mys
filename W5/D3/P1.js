//Introduction to async/await
function getmessage(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Async/await makes promise based code easier to read");
        },1000);
    });
}

async function showmessage(){
    console.log("Loading message...");
    const message = await getmessage();
    console.log(message);
}

showmessage();