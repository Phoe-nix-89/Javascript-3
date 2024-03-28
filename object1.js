// bracket method :-
let obj = {
    name : "Koustav",
    age : 20,
    dept : "CSE"
}
console.log(obj);

// new instance method :-
let obj2 = new Object()
obj2.name = "Koustav"
obj2.age = 20
obj2.dept = "CSE"
console.log(obj2);

// constructor method :-
function Emp(name,age,dept) {
    this.name = name
    this.age = age
    this.dept = dept
}

const emp1 = new Emp("Koustav",20,"CSE")
console.log(emp1);


// acces the values in object :-
const ter = { name: 'Koustav', age: 20, dept: 'CSE' }
console.log(ter.name);
console.log(ter['name']);

// delete :-
delete ter.name
console.log(ter);


// iterate:-
for(let key in ter){
    console.log(key,ter[key]);
}