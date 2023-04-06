const bar = document.querySelector("svg");
const nav = document.querySelector("#navbar")
const close = document.querySelector("#close")
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}

function myFunction() {
    nav.classList.add("active")
}
function myFunction1() {
    nav.classList.remove("active")
}