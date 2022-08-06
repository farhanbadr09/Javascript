'use strict';
const student = {
    "fristname" : "Haider",
    "lastname" : "Ali",
    "class" : "2nd year",
    "college" : "ABC",
    "friends" : ["Root","Johan","Jean"]
}

console.log(student.fristname);
console.log(student['fristname']);
const namekey = "name";
console.log(student["frist" + namekey]);
console.log(student["last" + namekey]);

const inertIn = prompt('what do you want to know about Haider? choose between first, last, class, college');

if (student[inertIn]) {
    console.log(student[inertIn]);
} else{
    console.log("wrong input");
}


student.location = "Pakistan";
student['twitter'] = "@hali";
console.log(student);


const challenge = `${student.fristname} has ${student.friends.length}, his best friend is ${student.friends[0]}`;
console.log(challenge);





// Object topic

const teacher = {
    fristname : "Afzal",
    lastname : "Ali",
    class : "2nd year",
    college : "ABC",
    friends : ["Root","Johan","Jean"],
    birthyear : 1991,
    hasDriverLicense : true,
    bestfrnd : function(friends){
        return friends[1]
    },
    calAge : function() {
        // console.log(this);
        return 2037 - this.birthyear;
    },
    getSummary : function(){
        return `${this.fristname} is ${this.calAge()} years old, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`;
    }
}

console.log(teacher.calAge());
console.log(teacher.bestfrnd(teacher.friends));

console.log(teacher.getSummary());




// Challenge

const Johan = {
    fullname : "Johan Smith",
    mess : 81,
    height : 1.43,
    calBMI : function(){
        this.bmi = this.mess / this.height ** 2;
        return this.bmi;
    }
}

const Rodel = {
    fullname : "Rodel Watson",
    mess : 61,
    height : 1.03,
    calBMI : function(){
        this.bmi = this.mess / this.height ** 2;
        return this.bmi;
    }
}


Johan.calBMI();
Rodel.calBMI();
console.log(Johan.bmi, Rodel.bmi);


