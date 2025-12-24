

/* Spread Operator kya hota hai?
Spread operator (...) ka kaam hota hai:
Array ya object ke andar ki values ko “phaila dena / expand kar dena”*/


//* 🔹 Spread Operator – Practice Questions


//^ 1 - Array ke do arrays ko mila kar ek naya array banana ho, spread operator ka use kahan hota hai?

let EvenNum = [4,6,8,10];
let oddNum = [1,3,5,7,9, ...EvenNum];
// EvenNum.push(56);
// console.log(EvenNum)
console.log(oddNum);

//^ 2- Original array ko change kiye baghair uski exact copy banana ho, spread operator kyun use karte hain?

let num = [3,4,5,6,6,7];
let copy = [...num];
copy.push(90);
console.log(copy);
console.log(num)




