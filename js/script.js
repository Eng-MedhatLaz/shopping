// 


///////////////
let allProducts =document.querySelector(".row");

let products = [
  {
    id :1,
    title:"appl5",
    imgUrl: "./img/appl5.jpg"  
  },
  {
    id :2,
    title:"dell2",
    imgUrl: "./img/dell2.jpg" 
  },
  {
    id :3,
    title:"hp1",
    imgUrl: "./img/hp1.jpg " 
  },
  {
    id :4,
    title:"toshiba3",
    imgUrl:"./img/toshiba3.jpg" 
  }
]


function drawItem(){
let x = products.map((item)=> {
  return `
  <div class="col-md-6">
      <div class="product">
        <div class="card">
          <img src=${item.imgUrl} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" onclick = "cartItem(${item.id})">add to cart</a>
          </div>
        </div>
      </div>
    </div>
  
  `

})
allProducts.innerHTML = x.join("");

}

drawItem();


let badge =document.querySelector("#badge")
let divInProducts = document.querySelector(".cart-product div");


let addItem =localStorage.getItem("productIncart")?JSON.parse(localStorage.getItem("productIncart")): [];

if(addItem){
  addItem.map((item) =>{
    divInProducts.innerHTML+=`<p>${item.title}</p>`
  })
  badge.style.display="block";
  badge.innerHTML= addItem.length;
}


  if(localStorage.getItem  ("userName")){
    function cartItem(id){
      let chooseProduct = products.find((item) => item.id===id);
      divInProducts.innerHTML += `
      <p> ${chooseProduct.title}</p>
      `
      addItem=[...addItem , chooseProduct];
      localStorage.setItem("productIncart" ,JSON.stringify(addItem));
      let cartLength = document.querySelectorAll(".cart-product div p");
      badge.style.display="block";
      badge.innerHTML= cartLength.length;
    } 
    }else{
      const addToCartButtons = document.querySelectorAll('.btn.btn-primary');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = "login.html";
    });
  });
  }







//////
let cartShopping = document.querySelector("#cart-shopping");
let cartProduct = document.querySelector(".cart-product");

cartShopping.addEventListener("click" , openCart)

function openCart(){
  if(divInProducts.innerHTML != ""){
    if(cartProduct.style.display == "block"){
      cartProduct.style.display ="none";
    }else{
      cartProduct.style.display = "block";
    }
  }
}

