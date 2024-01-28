let password = document.querySelector("#password");
let eye = document.querySelector(".eye");
let eyeSlash = document.querySelector(".eye-slash");

eye.addEventListener("click", function(){
    password.type = "password";
    eye.style.display = "none";
    eyeSlash.style.display = "block";

})

eyeSlash.addEventListener("click", function(){
    password.type = "text";
    eye.style.display = "block";
    eyeSlash.style.display = "none";
})