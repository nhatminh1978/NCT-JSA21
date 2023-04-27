cardTotal()
const btn = document.querySelectorAll(".row button")
btn.forEach(function(button){
button.addEventListener("click",function(event){{
  var btnItem = event.target
  var product = btnItem.parentElement
  var productImg = product.querySelector("img").src
  var productName = product.querySelector("h3").innerText
  var productPrice = product.querySelector("span").innerText
  addCart(productImg,productName,productPrice)

  
  
  
  
  
}})
})
function addCart(productImg,productName,productPrice){
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
    var productT = document.querySelectorAll(".title")
    if(productT[i].innerHTML == productName){
      var inputValue = JSON.parse(cartItem[i].querySelector("input").value)
      var inputValueNew = inputValue + 1
      cartItem[i].querySelector("input").value = inputValueNew
      cardTotal()
      return

      
      

      
      
      
      
    }
    
  }
  var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'"></td><td><span class="title">'+productName+'</span></td><td><span class="product-price" style="margin-left:5px">'+productPrice+'</span><sup>₫</sup></td><td><input style="width: 50px;outline: none;" type="number" value="1" min="1"></td><td><button class="cart-delete btn btn-danger">X</button></td></tr><br>'
  
  addtr.innerHTML = trcontent  
  var cartTable = document.querySelector("tbody")
  cartTable.append(addtr)
  cardTotal()
  deleteCart()
  
}
function cardTotal(){
  var cartItem = document.querySelectorAll("tbody tr")
  var totalC = 0
  for(var i=0;i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector("input").value
    
    var productPrice = cartItem[i].querySelector(".product-price").innerHTML
    var totalA = inputValue*productPrice*1000
   
    totalC = totalC + totalA
  
    
    
    // var totalD = totalC.toLocaleString('de-DE')
   
    
  }
  var cardTotalA = document.querySelector(".price-total span")
  cardTotalA.innerHTML = totalC.toLocaleString('de-DE')
  inputChange()
}
function deleteCart(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
    var productT = document.querySelectorAll(".cart-delete")
   
    productT[i].addEventListener("click",function(event){
      var cardDelete = event.target
      var cardDeleteParent  = cardDelete.parentElement.parentElement
      cardDeleteParent.remove()
      cardTotal()
    })
    
  }
}
function inputChange(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change",function(){
      cardTotal()
    })
   

  }
}