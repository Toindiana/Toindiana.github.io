const cart = () => {

    const cartButton = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const btnCose = modalCart.querySelector('.close')
    const body = modalCart.querySelector('.modal-body')
   
    
    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))

        cartArray.map((item) => {
            if(item.id === id) {
                item.count++
            }
            return item;
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderCart(cartArray)
    }

    const decrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))

        cartArray.map((item) => {
            if(item.id === id) {
                if (item.count <= 1) {
                    item.count = 1
                } else {
                    item.count--
                }
                
            }
            return item;
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderCart(cartArray)
    }

    const renderCart = (data) => {
        body.innerHTML = ''
        data.forEach(cartItem => {
            const {name, price, id, count} = cartItem
            const cartElem = document.createElement('div')
            cartElem.classList.add('food-row')
            cartElem.innerHTML = `
                    <span class="food-name">${name}</span>
                    <strong class="food-price">${price * count} ₽</strong>
                    <div class="food-counter">
                        <button class="counter-button btn-dec">-</button>
                        <span class="counter">${count}</span>
                        <button class="counter-button btn-inc">+</button>
                    </div>
            `
            
            cartElem.querySelector('.btn-dec').addEventListener('click', () => {
                decrementCount(id)
            })

            cartElem.querySelector('.btn-inc').addEventListener('click', () => {
                incrementCount(id)
            })

           body.append(cartElem);
        })
    } 

    cartButton.addEventListener('click' , ()=>{
        
        if(localStorage.getItem('cart')) {
            renderCart(JSON.parse(localStorage.getItem('cart')))
        }
        modalCart.classList.add('is-open')
    })

    btnCose.addEventListener('click' , ()=>{
        modalCart.classList.remove('is-open')
    })
} 

cart()