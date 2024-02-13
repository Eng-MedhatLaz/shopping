let links =document.querySelector("#links");

let userData = document.querySelector("#user-info");
let user =document.querySelector("#user");
let logOut =document.querySelector("#logOut")


if(localStorage.getItem("userName")){
  links.remove();

  userData.style.display ="flex" ;

  user.innerHTML = localStorage.getItem('userName');
  userData.style.textTransform = "capitalize";
  
}

logOut.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(()=>{
    window.location = "register.html"
  })
})