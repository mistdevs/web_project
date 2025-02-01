function addToCart(productName) {
    const popup = document.getElementById('cart-popup');
    popup.textContent = `${productName} has been added to your cart.`;
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}
