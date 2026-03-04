//Basics of objects
const person = {
    name:"Raghavendra",
    age:30,
    isstudent: false
};
//console.log("person",person);
console.log("Name: ",person.name);
console.log("Age:",person["age"]);

//Add a new property
person.city = "Mysore";
console.log("person",person);
//Modify
person.age = 31;
//delete
delete person.isstudent;
console.log("person",person);

//object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;
console.log(car);
