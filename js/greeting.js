// const h1 = document.querySelector("div.hello:first-child h1");
// const body = document.body;

// function handleTitleClcik() {
//    // h1.classList.toggle("clicked");
//    if(h1.classList.contains("clicked")){
//         h1.classList.remove("clicked");
//    }else{
//         h1.classList.add("clicked");
//    }    
// }

// function handleResize() {
//     body.classList.toggle("resize");
// }

// h1.addEventListener("click",handleTitleClcik);
// window.addEventListener("resize",handleResize);

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const inputName = "name";
const readyName = localStorage.getItem(inputName);

function onLoginSubmit(e){
     e.preventDefault();
     const value = loginInput.value;
     loginForm.classList.remove("hidden");
     console.log("hey you click button!");
     localStorage.setItem(inputName,value);
     window.alert(`hello ${value}`);
     paintgreeting();
}

function onlinkclick(e){
     e.preventDefault();
     window.alert("you click this!"); 
}

if(readyName!=null){
     paintgreeting();
}else{
     loginForm.classList.remove("hidden");
     loginForm.addEventListener("submit",onLoginSubmit);
}



function paintgreeting(){
     greeting.innerHTML = `hello ${readyName}`;
     greeting.classList.remove("hidden");
}
