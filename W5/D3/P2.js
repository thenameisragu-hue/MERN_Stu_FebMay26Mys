// why use async/await
function getuser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"kiran"});
        },0);
    });
}

function getOrders(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },1200);
    });
}

 async function showUserAndOrders(){
    const user = await getuser();
   // console.log("user loaded: ",user.name);
    
    const orders = await getOrders(user.id);
    console.log("orders loaded",orders);
}

showUserAndOrders();