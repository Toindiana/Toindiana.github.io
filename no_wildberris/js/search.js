const search = function () {
    const searchBtn = document.querySelector('.search-block > button');
    const input = document.querySelector('.search-block > input');

    searchBtn.addEventListener('click', () => {
        console.log(input.value)
    })

    
}
search();
