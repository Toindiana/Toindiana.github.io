const menu = () => {

    const cardsMenu = document.querySelector('.cards-menu');
    const rating = document.querySelector('.rating');
    const priceDiv = document.querySelector('.price');
    const category = document.querySelector('.category');
    const restaurantTitle = document.querySelector('.restaurant-title')
    const cartArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ) : []

    const changeTitle = (rest) => {
        const {image, kitchen, name, price, stars, time_of_delivery} = rest;
        restaurantTitle.textContent = name;
        rating.textContent = stars;
        priceDiv.textContent = `От ${price} ₽`
        category.textContent = kitchen;
    }

    const addToCart = (cartItem) => {
        if (cartArray.some((item) => item.id === cartItem.id)) {
            cartArray.map((item => {
                if(item.id === cartItem.id) {
                    item.count++
                }
                return item
            }))
                
        } else {
            cartArray.push(cartItem)
        }

        localStorage.setItem('cart', JSON.stringify(cartArray))

        
    }

    const renderCard= (data) => {
        data.forEach(item => {
            const {description, id, image, name, price} = item;

            const div = document.createElement("div");

            div.classList.add('card');
            div.innerHTML = `
                <img src="${image}" alt="${name}" class="card-image" />
                            <div class="card-text">
                                <div class="card-heading">
                                    <h3 class="card-title card-title-reg">${name}</h3>
                                </div>
                                <div class="card-info">
                                    <div class="ingredients">${description}
                                    </div>
                                </div>
                                <div class="card-buttons">
                                    <button class="button button-primary button-add-cart">
                                        <span class="button-card-text">В корзину</span>
                                        <span class="button-cart-svg"></span>
                                    </button>
                                    <strong class="card-price-bold">${price} ₽</strong>
                                </div>
                            </div>
            `
            div.querySelector('.button-card-text').addEventListener('click', ()=> {
                addToCart({
                    name: name,
                    price: price, 
                    id: id,
                    count: 1
            })
            })

            cardsMenu.append(div);
        })
    }

    if (localStorage.getItem('restaurant')) {

            const restaurant = JSON.parse(localStorage.getItem('restaurant'));
            changeTitle(restaurant);
            fetch(`./db/${restaurant.products}`)
            .then((responce) => responce.json())
            .then((data) => {
            renderCard(data)
        })
    } else {
        window.location.href = "/";
    }
}

menu()