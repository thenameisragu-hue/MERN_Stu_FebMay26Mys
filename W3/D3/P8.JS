//JSON parse and stringify
const emp={
    id:101,
    name:"sandeep",
    dept:"ME",
    isActive:true
};
//print Js
console.log("Printing EMP");
console.log(emp);
//js to json
console.log("JS to JSON");
const jsonString = JSON.stringify(emp);
console.log(jsonString);
//json to js
console.log("JSON to JS");
const jsonparse = JSON.parse(jsonString);
console.log(jsonparse);