// show cart
(function () {
    const cartInfo = document.getElementById("cart-info");
    const cart = documnet.getElementById("cart");

    cartInfo.addEventListener("click", function () {
        cart.classList.toggle("showcart");
    });
})();

//add items to the cart
(function () {
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {

            if (event.target.parentElement.classList('store-item-icon')) {


            }
        });
    });
})();