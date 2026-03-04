//Nested object and Method
const student = {
    firstname: "Santhosh",
    Lastname: "Sarma",
    Scores:{
        math: 80,
        Science: 83
    },
    hobbies:["reading","singing"],
    fullname: function(){
        return this.firstname + " "+this.lastname;
    },
    greet(){
        console.log("Hi,",this.fullname());
    }
};
console.log(student.fullname());

