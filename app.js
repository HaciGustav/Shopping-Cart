const productsParent = document.querySelector(".products")

productsParent.addEventListener("click", (event)=>{
    console.log(event.target)
    if (event.target.classList.contains("fa-minus")){
        
        if (event.target.parentElement.querySelector(".amount").innerText > 1) {
            
            event.target.parentElement.querySelector(".amount").innerText--
            productPriceCalculate(event.target)


        }else{
            if(confirm(`${event.target.parentElement.parentElement.querySelector("p").innerText} will be removed!`)){
                event.target.parentElement.parentElement.parentElement.remove()

            }
        }
    }else if (event.target.classList.contains("fa-plus")) {
        event.target.parentElement.querySelector(".amount").innerText++
        productPriceCalculate(event.target)



    }else{
        if (event.target.className == "remove"){
            event.target.parentElement.parentElement.remove()
        }

    }
})

const productPriceCalculate = (btn)=> {
    const newPrice = btn.parentElement.parentElement.querySelector(".orange")
    const oldPrice = btn.parentElement.parentElement.querySelector(".line-through")
    const quantity = btn.parentElement.querySelector(".amount")

}