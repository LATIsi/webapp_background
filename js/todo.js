const todoList = document.querySelector("ul#todo-list");
const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");

let todoGetList = [];

const Todo_Key ="todoGetList";

function saveTodo(){
    //localStorage에 투두 넣기
    localStorage.setItem( Todo_Key, JSON.stringify(todoGetList));
     }

function deleteToDo(Todo){
//클릭이벤트의 속성중, target의 button값을 찾는다. event.target
const clickButton = Todo.target.parentElement;
todoGetList = todoGetList.filter((item)=>{ return item.id !== Number(clickButton.id); });
clickButton.remove();
saveTodo();
}

function addToDo(newTodo){

const li = document.createElement("li");
const span = document.createElement("span");
const button = document.createElement("button");

li.id = newTodo.id;
button.innerHTML = "✖️";

li.appendChild(span);
li.appendChild(button);
button.addEventListener("click", deleteToDo);

span.innerHTML = newTodo.text;
todoList.appendChild(li);


}


function handleToDoSumbit(e){
     e.preventDefault();
     const newTodo =  todoInput.value;
     todoInput.value = "";
     const newTodoObject ={
          text: newTodo,
          id:Date.now(),

          };
     todoGetList.push(newTodoObject);
     addToDo(newTodoObject);
     saveTodo();
}

todoForm.addEventListener("submit", handleToDoSumbit);

const savedTodo =localStorage.getItem(Todo_Key);

if(savedTodo !== null){
     const parsedToDos = JSON.parse(savedTodo);
     // 이전 로컬스토리지에 있는 값을 가져오기
     todoGetList = parsedToDos;
     parsedToDos.forEach(addToDo);
}








