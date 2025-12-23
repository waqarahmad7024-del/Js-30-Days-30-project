

// let user = ["waqar", 19, "paharpur"];

// // let [name, age, city] = user;

// console.log(name);
// console.log(age);
// console.log(city);


// *Practice question

//& Question 1
// Dono values ko a aur b variables mein destructure karo.

const arr = [5, 10];

let [a,b] = arr;
console.log(`a = ${a} b = ${b}`);

//& Question two
// name nikaalo aur age ki default value 18 rakho.

const users = {
    name: "waqar",
};

let  { name, age = 56 } = users;
console.log(name , age);

// &Question 3
// ➡️ title ko productName ke naam se destructure karo.

const product = {
  title: "Mobile",
  price: 50000,
  stock: 20
};

let {title: productName} = product;
console.log(productName);


