let productIncart = localStorage.getItem("productIncart");
let allProducts =document.querySelector(".row");

if(productIncart){
  let item =JSON.parse(productIncart)
  drawCart(item)
}

function drawCart(products){
  let x = products.map((item)=> {
    return `
    <div class="col-md-6">
        <div class="product">
          <div class="card">
            <img src=${item.imgUrl} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary" onclick = "removeFromCart(${item.id})">remove cart</a>
            </div>
          </div>
        </div>
      </div>
    
    `
  
  })
  allProducts.innerHTML =  x.join("");


}

function removeFromCart(productId) {
  let cartItems = JSON.parse(localStorage.getItem("productIncart"));

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === productId) {
      cartItems.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("productIncart", JSON.stringify(cartItems));

  
  drawCart(cartItems);
}

