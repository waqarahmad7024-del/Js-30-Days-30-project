

// ^1️⃣ map()
//* Purpose: Array ke har element par operation apply karke naya array banata hai.

let number = [4,5,6,7];
let double = number.map((num) => num * 2);
console.log(double);

// todo 💡 Note: map original array ko change nahi karta.


// ^Array Map Practice Questions

// *1️⃣ Double numbers
// *Array ke har number ko 2 se multiply karke naya array banao.

let num = [1,3,5,7,9,11];
let result = num.map((n) => n * 2);
console.log(result);

//^ 2️⃣ Square numbers
//* Array ke har number ka square nikal kar naya array banao.

let Number = [4,6,8,10];
let output = Number.map((num) => num ** 2);
console.log(output);

//^ 3️⃣ Uppercase strings
// *Array me diye strings ko uppercase me convert karo?

let fruits = ["apple", "banana", "mango"];

let uppercase = fruits.map((value) => value.toUpperCase());
console.log(uppercase);
// console.log(fruits) //todo no change in original array 


//^ 5️⃣ Extract property from objects
// *Objects ke array me se sirf name property nikal kar naya array banao?

let users = [
  {name: "Ali", age: 25},
  {name: "Sara", age: 22},
  {name: "Omar", age: 28}
];

let resultt = users.map((val) => val.name);
console.log(resultt);

// ^6️⃣ Add 5 to each element
// *Array ke har element me 5 add karo?

let n = [4,6,8,10,15];
let AddFive = n.map((val) => val + 5);
console.log(AddFive);

//^ 8️⃣ Format names
//* /Users ke names ko Hello, Name! format me naya array banao?

let names = ["Ali", "Sara", "Omar"];
let Format = names.map((val) => {
   return  `Hello ${val}`
});
console.log(Format);

//^ 9️⃣ Convert boolean values to yes/no
//* Array ke boolean values ko "Yes" ya "No" me convert karo?

let flags = [true, false, true, false];
let booleanvalues = flags.map((val) => {
    if(val === true){
        return "Yes"
    }
    else{
       return "No"
    }
});

console.log(booleanvalues);

//^ 🔟 Multiply elements by their index
//* Har element ko uske index se multiply karke naya array banao.

let numbers = [2, 4, 6, 8];
let MultiplyIndex = numbers.map((val,index) => val * index);
console.log(MultiplyIndex);


// ^Filter 
// *Purpose: Array ke sirf un elements ko select karne ke liye jo condition satisfy karte hain.

// todo filter() Practice Questions

//^ 1️⃣ Even numbers
//* Array me se sirf even numbers nikal kar naya array banao.

 let numb = [1,2,3,4,5,6,7,8,9,10];
 let evennumber = numb.filter((val) => {
  if(val % 2 === 0){
    return val;
  }
 })
console.log(evennumber)

//^ 2️⃣ Odd numbers
// *Array me se sirf odd numbers filter karo?

let N = [1,3,4,5,6,7,8,9];
let oddnum = N.filter((val) => {
  if(val % 2 === 1){
    return val
  }
});
console.log(oddnum);

//^ 3️⃣ Numbers greater than 5
// *Sirf wo numbers nikalna jo 5 se bade hon?

let Numberss = [4,5,6,7,8,99,1];
let GreaterNum = Numberss.filter((val) => {
  if(val > 5){
    return val
  }
});

console.log(GreaterNum);

//^ 4️⃣ Strings with length > 4
//* Sirf wo strings nikalna jinki length 4 se zyada ho?

let words = ["cat", "apple", "bat", "banana", "dog"];
let findLength = words.filter((val) => {
  if(val.length > 4){
    return val
  }
});

console.log(findLength);

//^ 5️⃣ Positive numbers
//* Sirf positive numbers filter karo?

let arr = [4,-5,67,-1,-10];
let positive = arr.filter((val) => {
  if(val > 0){
    return val
  }
});

console.log(positive);

//^ 6️⃣ Users with age ≥ 18
//* Sirf adult users (18 ya zyada) nikalna.

let userss = [
  {name: "Ali", age: 17},
  {name: "Sara", age: 22},
  {name: "Omar", age: 16},
  {name: "Ahmed", age: 30}
];

let Result = userss.filter((val) => {
  if(val.age >= 18){
    return val
  }
});

console.log(Result)

// ^7️⃣ Names starting with "A"
//*Sirf wo names filter karo jo "A" se start hote hon.

let namess = ["Ali", "Ahmed", "Sara", "Ayesha", "Omar"];
let startIngA = namess.filter((val) => {
  return val.startsWith("A")
})

console.log(startIngA);


//^ 🔹 reduce() kya karta hai?
//* 👉 reduce() array ke saare elements ko mila kar ek single value bana deta hai.


// Single value ho sakti hai:
// number (sum, total)
// string
// object

//^ 🔹 Syntax (sab se important)
// array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);

// ?Ye 3 cheezen yaad rakho:

// 1️⃣ accumulator (acc) → result jo banta ja raha hota hai
// 2️⃣ currentValue (curr) → array ka current element
// 3️⃣ initialValue → starting value (bohat zaroori);


//^ Practice Question 


// ^1️⃣ Sum of numbers
//* Array ke saare numbers ka sum nikalna.

let numbe = [1, 2, 3, 4, 5];
let sum = numbe.reduce((acc,curr) => {
  return acc + curr
}, 0);

console.log(sum);

