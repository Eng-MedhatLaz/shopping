let userName = document.querySelector("#userName");
let passward = document.querySelector("#passward");

let loginSubmit = document.querySelector("#sign-in");


getUser = localStorage.getItem("userName");
getpassward = localStorage.getItem("passward");

loginSubmit.addEventListener("click" , function(e){
  e.preventDefault()
  if(userName.value ==="" || passward.value === ""){
    alert("please enter data")
  }else{
    if(getUser === userName.value.trim() && getpassward === passward.value){
      setTimeout(()=>{
        window.location = "index.html";
      },1500)
    }else{
      alert("sure from data")
    }
  }
})


function togglePasswordVisibility() {
  if (passward.type === "password") {
    passward.type = "text";
  } else {
    passward.type = "password";
  }
}

