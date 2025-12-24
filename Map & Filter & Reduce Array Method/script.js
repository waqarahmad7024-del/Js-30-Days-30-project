

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
