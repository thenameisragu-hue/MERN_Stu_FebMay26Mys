const cbtn = document.getElementById("comparebtn");
cbtn.addEventListener("click",function(e){
    console.log("regular function");
    console.log("this === btn",this===cbtn);
    console.log("e current target === btn",e.currentTarget===cbtn);
    console.log("e.target ==btn",e.target ===cbtn);
});

cbtn.addEventListener("click",(e)=>{
    console.log("Arrow function");
    console.log("this===btn",this===cbtn);
    console.log("e current target === btn",e.currentTarget===cbtn);
    console.log("e.target ==btn",e.target ===cbtn);
});