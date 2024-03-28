// strings :-
console.log("${10+20}");
console.log('${10+20}');
console.log(`${10+20}`);

console.log("Hello World".length);
console.log("Hello World"[1]);
// strings in javascript are immutable

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
console.log(str3);


// padd:-
console.log("Hello".padEnd(10,'!'));
console.log("Hello".padStart(10,'!'));

// replace:-
console.log("Hello world world".replace('world','everyone'));
console.log("Hello world world".replaceAll('world','everyone'));

//28.:00

// date:-

let datetime = new Date()
console.log(datetime);
console.log(datetime.getDate());
console.log(datetime.getDay());
console.log(Date.now());
console.log(datetime.setDate(19));
console.log(datetime.setFullYear(2050));
console.log(datetime.toDateString(2050));