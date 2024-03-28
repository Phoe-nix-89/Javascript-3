// by value ;-
let name = "Koustav"
let newname = name
name = "Peter"
console.log(name)
console.log(newname) // no changes were made in newname as strings are passed by value as they are primitives/scalars


// by reference :-
let obj1 = {
    name : "Koustav",
    age : 20
}
let obj2 = obj1
obj2.name = "Raj"
console.log(obj1);
console.log(obj2); // change was made in obj2 but it reflected in obj1 as well as objects are non-primitives and they are passed by reference hence both obj1 , obj2 point at the same object/memory