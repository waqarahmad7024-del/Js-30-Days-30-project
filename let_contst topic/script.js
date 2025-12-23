
// *let and Const 

var x = "hello";
var x = "world";   //^redeclare allowed
x = "wow";    //^resign allowed

console.log(x);

// ^let

let a = "hello";
// let a = "world";
a = "world";

console.log(a);

// ^Const 

const b = "hello";
// const b = "world";
// b = "world"


// *scoping

// ^var global scope

if(1 == 1){
    var s = "hello";
}
console.log(s);


// ^let block scope

if(3 == 3){
    let isequal = true
}

// console.log(isequal)


// ^const block scope

if(1 == 1){

    const num = "number is equal";
}

// console.log(num)




