const btn = document.querySelector(".barContainer")

const navBar = document.querySelector(".hideLinks")

btn.addEventListener("click" , ()=>{
    navBar.classList.toggle("outerLinks")
})