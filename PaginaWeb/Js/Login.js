const container = document.querySelector(".container");

document.getElementById("button-sign-in").onclick = () => {
    container.classList.remove("toggle");
};

document.getElementById("button-sign-up").onclick = () => {
    container.classList.add("toggle");
};

//const btn =  document.getElementById("btn");


//btn.addEventListener("click", ()=>{
//    container.classList.toggle("toggle");
//});