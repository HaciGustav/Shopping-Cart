const taxRate = 0.18
const shippingPrice = 15
const shippingFreePrice = 250
window.addEventListener("load", ()=>{
    CartTotalCalculate()
    localStorage.setItem("taxRate", taxRate)
    localStorage.setItem("shippingPrice", shippingPrice)
    localStorage.setItem("shippingFreePrice", shippingFreePrice)
})






const productsParent = document.querySelector(".products")

productsParent.addEventListener("click", (event)=>{
    
    if (event.target.classList.contains("fa-minus")){
        
        if (event.target.parentElement.querySelector(".amount").innerText > 1) {
            
            event.target.parentElement.querySelector(".amount").innerText--;
            productPriceCalculate(event.target);
            CartTotalCalculate();
            


        }else{
            if(confirm(`${event.target.parentElement.parentElement.querySelector("p").innerText} will be removed!`)){
                event.target.parentElement.parentElement.parentElement.remove()
                
                CartTotalCalculate()

            }
        }
    }else if (event.target.classList.contains("fa-plus")) {
        event.target.parentElement.querySelector(".amount").innerText++
        productPriceCalculate(event.target)
        CartTotalCalculate()


    }else{
        if (event.target.className == "remove"){
            console.log(event.target.parentElement.parentElement)
            event.target.parentElement.parentElement.remove()
            CartTotalCalculate()
        }

    }
})

const productPriceCalculate = (btn)=> {
    const productTotal =  btn.parentElement.parentElement.querySelector(".total-span")
    const newPrice = btn.parentElement.parentElement.querySelector(".orange").innerText
    const quantity = btn.parentElement.querySelector(".amount").innerText
    productTotal.innerText = `${(newPrice * quantity).toFixed(2)}`
}

const CartTotalCalculate = () =>{
    const productTotal = document.querySelectorAll(".total-span")
    const subtotalToPay = document.querySelector(".sub")
    const tax = document.querySelector(".tax-total")
    const shipping = document.querySelector(".shipping-total")
    const amountToPay = document.querySelector(".amount-to-pay")

    let subtotal = 0
    productTotal.forEach(item => {
        subtotal += (parseFloat(item.innerText))
    })
    
    
    subtotalToPay.innerText = subtotal.toFixed(2)
    tax.innerText = (subtotalToPay.innerText * localStorage.getItem("taxRate")).toFixed(2)
    
    
    if (subtotalToPay.innerText > localStorage.getItem("shippingFreePrice")) {
        shipping.innerText = 0    
    }else{
        shipping.innerText = 15
    }
    
    
    
    amountToPay.innerText = (Number(subtotalToPay.innerText) + Number(tax.innerText) + Number(shipping.innerText)).toFixed(2)
}
