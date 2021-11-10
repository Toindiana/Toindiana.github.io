const auth = () => {

            const buttonAuth = document.querySelector('.button-auth')
    const buttonOut = document.querySelector('.button-out')
    const buttonCart = document.querySelector('.button-cart')
    const modalAuth = document.querySelector('.modal-auth')
    const userName = document.querySelector('.user-name')
    const closeAuth = document.querySelector('.close-auth')
    const logInForm = document.getElementById("logInForm")
    const inputLogin = document.getElementById("login")
    const inputPassword = document.getElementById("password")


    const login = (user) => {
        buttonAuth.style.display = 'none'
        modalAuth.style.display = 'none'

        buttonCart.style.display = 'flex'
        buttonOut.style.display = 'flex'
        userName.style.display = 'flex'
        userName.textContent = user.name

    }

    const logout = () => {
        buttonOut.style.display = 'none'
        buttonCart.style.display = 'none'
        userName.style.display = 'none'
        buttonAuth.style.display = 'flex'
        userName.textContent = ''

        localStorage.removeItem('user')
    }


    buttonAuth.addEventListener("click", () => {
        modalAuth.style.display = "flex"
    })

    closeAuth.addEventListener("click", () => {
        modalAuth.style.display = "none"
    })

    buttonOut.addEventListener('click', () => {
        logout()
    })

    logInForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const user = {
            name: inputLogin.value,
            password: inputPassword.value
        }

        localStorage.setItem('user', JSON.stringify(user))
        login(user)
    })

    if(localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')))
    }
}

auth()