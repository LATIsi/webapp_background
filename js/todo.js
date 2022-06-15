const todoList = document.querySelector("ul#todo-list");
const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");

const todoGetList = [];

function saveTodo(){
    //localStorage에 투두 넣기
    localStorage.setItem("todoGetList", JSON.stringify(todoGetList));
     }

function deleteToDo(Todo){
//클릭이벤트의 속성중, target의 button값을 찾는다. event.target
const clickButton = Todo.target.parentElement;
clickButton.remove();
}

function addToDo(newTodo){

const li = document.createElement("li");
const span = document.createElement("span");
const button = document.createElement("button");

button.innerHTML = "✖️";

li.appendChild(span);
li.appendChild(button);
button.addEventListener("click", deleteToDo);

span.innerHTML = newTodo;
todoList.appendChild(li);


}


function handleToDoSumbit(e){
     e.preventDefault();
     const newTodo =  todoInput.value;
     todoInput.value = "";
     todoGetList.push(newTodo);
     addToDo(newTodo);
     saveTodo();
}

todoForm.addEventListener("submit", handleToDoSumbit);