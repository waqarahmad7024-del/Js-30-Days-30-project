

// *Rest operator 
// Multiple values ko ek single variable mein collect karna.


let numbers = [1,3,4,5,6,7,8,9,10];

let [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);


// ?Practice 

// ^1 - Question: Array [1,2,3,4] me se pehla element nikaal kar baki elements ko ek variable me kaise store karoge?

let num = [1,2,3,4];

let [First, ...Arr] = num;
console.log(First);

// ^2 - Question: Function me multiple arguments pass kiye ja rahe hain, unko ek array me kaise collect karenge?

function numberss(...num){
 return num
}

console.log(numberss(4,5,6,7,8,90,1,4,5,6,778,54));


//^ 3 - Question: Object {a:1, b:2, c:3} me se a ko alag aur baaki properties ko ek variable me kaise store karenge? 

let obj = {
    a:1,
    b:2,
    c:3
};

let {a, ...value} = obj;
console.log(value);

//^ 4 - Question: Kya rest operator array me hamesha last position par hona chahiye?
//* Explanation: Haan, kyunki rest operator ke baad koi aur element destructure nahi kar sakte.

// ✅ Correct
// let arr = [1,2,3,4];
// let [a, ...rest] = arr;

// ❌ Incorrect (Error)
// let [a, ...rest, b] = arr; // ❌ SyntaxError

// ^ 5 - Question: Ek function me first argument ko alag aur baki arguments ko ek array me kaise collect karenge?

function Hello(name, ...rest){

    return {name, rest}
}
console.log(Hello("waqar", 56, "karachi"));


//? ⭐ Interview Ready Line
// “Function ke first argument ko normal parameter aur baqi ko rest
//  parameters ke zariye array me collect karte hain.”


//^ 6 - Question: Multiple objects merge karte waqt kisi ek property
// ^ ko alag kaise store karenge aur baaki sab ko ek object me kaise rakhenge?

let object1 = {
    name: "waqar",
    age: 45,
    city: "paharpur"
}

let objecttwo = {
    name:"khan",
    age: 43,
    city: "karachi"
};

let mergeobject = {
    ...object1,
    ...objecttwo
}

let { name, ...rests } = mergeobject;

console.log(name);
console.log(rests)





