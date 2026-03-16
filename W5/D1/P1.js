//Introduction to Node.js

const runtime = "Node.js";
//console.log("Introduction to node.js");
//console.log(`${runtimeName} Runs Javascript outside the browser`);

const Commonusers = [
    " Used for Server-side app",
    "automation Scripts can be created"
];
//array destructuring
//console.log(Commonusers[0]);
//console.log(Commonusers[1]);
Commonusers.forEach((CommonUse,index) => {
    console.log(`${index+1}.${CommonUse}`);
});