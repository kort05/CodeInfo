//mostrar senha

function show(){
    let pwd = document.getElementById("pwd");
    if(pwd.type == "password"){
        pwd.type = "text";
    } else{
        pwd.type = "password";
    }
}

//menu sanduiche

//side-car

    const ButtonOpen = document.querySelector("#divisona")
    const cart = document.getElementById("side-cart-id")
    const CloseButtom = document.querySelector(".header-cart ")


    ButtonOpen.addEventListener("click", openCart)
    CloseButtom.addEventListener("click", closeCar)

function openCart(){
  cart.classList.add('open')
}


function closeCar(){
    cart.classList.remove('open')
  }

//carrinho


        const removeBotom = document.getElementsByClassName("remove-product-button")
       

        for (var i = 0;  i < removeBotom.length; i++){
                removeBotom[i].addEventListener("click", removeProduct)
        }

        const quantityImputs = document.getElementsByClassName("product-qtd-input")
        for (var i=0; i < quantityImputs.length; i++){
            quantityImputs[i].addEventListener("change", checkIfInpuTIsNull)
        }

        const addToCart = document.getElementsByClassName("button-cart")
        console.log(addToCart)


        for (var i = 0; i < addToCart.length; i++){
            addToCart[i].addEventListener("click", addProfuctToCar)
        }

        for (var i = 0; i < addToCart.length; i++){
            addToCart[i].addEventListener("click", openCart)
        }


        function checkIfInpuTIsNull(event){
                if(event.target.value == "0"){
                     event.target.parentElement.parentElement.remove()
                }
            updateTotal()
        }


        function addProfuctToCar(event){
            const button = event.target
           
            const productInfos = button.parentElement.parentElement
            const productImg = productInfos.getElementsByClassName("foto-produto")[0].src
             console.log(productImg)
            const productTitle = productInfos.querySelector("h2").innerText
            const productPriceP = productInfos.querySelector(".price-products").innerText
           

            const ProdutCartTitle = document.getElementsByClassName("cart-product-title") 

            for( i = 1; i < ProdutCartTitle.length; i++){

                if(ProdutCartTitle[i].innerText == productTitle)
                {
                    ProdutCartTitle[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
                   updateTotal()
                return   
                }
            }

            let newCartProduct = document.createElement("div");
            newCartProduct.classList.add("cartProductsAdd");

            newCartProduct.innerHTML = `

            <div class="cart-product">
          
            <img src="${productImg}" alt="${productTitle}" class="cart-product-image">
           
            <div class="product-identification">
            <h2 class="cart-product-title">${productTitle}</h2>
         

            <span class="cart-product-price">${productPriceP}</span>

          <div class="butons-cart-bottom">
            <input type="number" value="1" min="0" class="product-qtd-input">
            <button type="button" class="remove-product-button">Remover</button>
            </div> 
            </div>
            </div>
            `

            const tableTBody = document.querySelector(".cart-container1")
            tableTBody.append(newCartProduct)
            
            updateTotal()
            newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInpuTIsNull)
            
            newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
        }


        function removeProduct(event){
                
                event.target.parentElement.parentElement.parentElement.remove()
            updateTotal()
            
        }
   
        function updateTotal(){
        let totalacount = 0 
        const cardProduts = document.getElementsByClassName("cart-product")

            for (var i=0; i < cardProduts.length; i++){
            
                const productPrice = cardProduts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
                const produtyQuantity = cardProduts[i].getElementsByClassName("product-qtd-input")[0].value
                
                totalacount += productPrice * produtyQuantity
            }
            totalacount = totalacount.toFixed(2)
            totalacount = totalacount.replace(".", ",")
            document.querySelector(".cart-total-container span").innerText = "R$" + totalacount
        }

