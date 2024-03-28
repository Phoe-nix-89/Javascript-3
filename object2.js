var v = {
    name : "John",
    age : 22,
    salary : 50000
}

let arr = Object.keys(v) // keys only
// console.log(arr);

arr.forEach((elem) => {
    console.log(elem)
    
});

let val = Object.values(v) // values

val.forEach((elem) =>{
    console.log(elem);
})

let key_value = Object.entries(v) // key value pair in form of array of arrays
console.log(key_value);

// array of arrays to key , value pairs :-
let pair = Object.fromEntries(key_value)
console.log(pair);

// copy of object:-
let copy = Object.assign({},v)
console.log(copy);
//console.log(copy == v); // gives false as they both refer to diff memory locations

// Object Freeze:-

//Object.freeze(v) // if freezed then any changes made in the object does not apply to it
// v.name = "Peter"
// console.log(v);

// to check if object is frozen or not :-
console.log(Object.isFrozen(v));

// Seal :-
v.dept = "IT"
Object.seal(v) // seals restricts the addition of more key,value pairs into the object
v.id = 1
console.log(v);
console.log(Object.isSealed(v));

// create object:-
let user1 = {name : "Alex"}
let user2 = Object.create(user1)
console.log(user1);
user2.age = 40
console.log(user2);
console.log(user2.name); // no name key in user2 but prints the name due to prototype chaining


// hasOwn:-
console.log(Object.hasOwn(v,'music')); // returns whether a object has a particular key or not


// property descriptor :-
let desc = Object.getOwnPropertyDescriptors(v)
// console.log(desc); // gives desc about whether the keys are changable , loopable and configuarable


// define properties :-
let top = {
    name : "john"
}
Object.defineProperty(top , 'name' , 
{
    name : "Peter",
    writable : false
}) // used to change the descriptions of the original properties


// loop in objects :-
for(const key in v){
    console.log(`${key} = ${v[key]}`);
}