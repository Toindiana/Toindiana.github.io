const cart = function () {

    const cartBtn = document.querySelector('.button-cart');
    const cart = document.querySelector('#modal-cart');
    const closeBnt = cart.querySelector('.modal-close');

    cartBtn.addEventListener('click', ()=> {
        cart.style.display = 'flex';
    });

    closeBnt.addEventListener('click', ()=> {
        cart.style.display = '';
    })

}

cart()