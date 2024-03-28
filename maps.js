// const map = new Map()
// map.set('1',"string")
// map.set(1,"number")
// map.set(true,"boolean")
// console.log(map); // allows multi type keys

// console.log(map.get(1));
// map.set({
//     likes : "anime"
// },"object")
// console.log(map);


// chaining of data in maps
// const map = new Map()
// map.set('1',"string")
//     .set(1,"number")
//     .set(true,"boolean")
// console.log(map);



// another syntax:-
let itemmap = new Map(
    [
        ['tomatoes',40],
        ['onions',50],
        ['ladyfinger',60]
    ]
)

// console.log(itemmap);
// console.log(itemmap.keys());
// for(let item of itemmap.keys()){
//     console.log(item);
// }
// let trav = function(value,key) {
//     console.log(`${key} : ${value}`);
// }
// itemmap.forEach(trav)


// object to maps:-
let user = {
    val1 : 10,
    val2 : 20
}
// cant pass object directly into map as object is not iterable => need to convert the object to array first
let arr = Object.entries(user)
let map = new Map(arr)
console.log(map);

// similar way for map to object:-
let arr2 = map.entries()
let obj = Object.fromEntries(arr2)
console.log(obj);
console.log(arr2);