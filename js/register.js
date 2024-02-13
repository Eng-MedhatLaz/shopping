let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let passward = document.querySelector("#passward");
let submit = document.querySelector("#sign-in");


submit.addEventListener("click" , function(e){
  e.preventDefault()
  if(userName.value === "" || email.value === "" || passward.value === ""){
    alert("you must enter data")
  }else{
    localStorage.setItem("userName" , userName.value);
    localStorage.setItem("email" , email.value);
    localStorage.setItem("passward" , passward.value);

    setTimeout(() => {
      window.location ="login.html"
    }, 1000)
  }
})


function togglePasswordVisibility() {
  if (passward.type === "password") {
    passward.type = "text";
  } else {
    passward.type = "password";
  }
}