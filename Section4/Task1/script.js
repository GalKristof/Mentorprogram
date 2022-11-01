const password = document.querySelector("#password");
const eye = document.querySelector("#eye");

eye.addEventListener("click", function(){
    this.classList.toggle("eye-animation");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  })