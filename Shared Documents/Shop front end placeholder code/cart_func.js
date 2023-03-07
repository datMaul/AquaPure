
function add_cart(){
    let button = document.getElementById('button')
    let count = document.getElementById('count')
    let quant = 0;
    count.innerText = "You have ${quant} in your cart"
    button.addEventListener("click", () => {
        quant++;
        count.innerText = "You have ${quant} in your cart"
    });
}