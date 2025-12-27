let increaseBtn = document.querySelector("#increase-btn");
let decreaseBtn = document.querySelector("#decrease-btn");
let resetBtn = document.querySelector("#reset-btn");
let count = document.querySelector("#count");


let countValue = 0;
let increase = () => {
    
    countValue++;
    updateCountValue();
    updateUi()
}

let decrease = () => {
    countValue--;
    updateCountValue();
    updateUi();
}

let reset = () => {
    countValue = 0;
    updateCountValue();
    updateUi();
}

let updateCountValue = () => {
    count.textContent = `Count: ${countValue}`;
}

let updateUi = () => {
    count.classList.remove("count-color", "count-clr");
    
    if(countValue >= 0){
        count.classList.add("count-color");
    }
    else{
        count.classList.add("count-clr");
 
    }
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);