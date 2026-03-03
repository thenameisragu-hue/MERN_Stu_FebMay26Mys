// Function Scope
function scope(){
    var insidevar = 10;
    let insidelet = 20;
    const insideconst = 30;
    //console.log(insidevar);//Function scope
    //console.log(insidelet);//block scope
    //console.log(insideconst);//block scope
    
}
scope();
//console.log(insidevar);
//console.log(insidelet);
//console.log(insideconst);

function varFunctionScoped(){
    if(true){
        var x = 40;
        var y = 50;
    }
    console.log("x: ",x);
    console.log("y: ",y);
}
varFunctionScoped();