let todoInput = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];


function renderTask(){

    todoList.innerHTML = "";
    todos.forEach((todo,index) => {
        let li = document.createElement("li");
        li.textContent = todo;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            todos.splice(index,1);
            updatedLocalStorage();
            renderTask();
        });

        todoList.appendChild(li)
    })
}

function updatedLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

addBtn.addEventListener("click", () => {
   let inputValue = todoInput.value.trim();
   if(inputValue === "") return;

   todos.push(inputValue);
   updatedLocalStorage();
   renderTask();

   todoInput.value = "";
});

renderTask();