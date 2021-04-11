// constant
// let header = document.querySelector('header')
let navbar = document.querySelector('.navbar')
let user_model = document.querySelector('.my_account')
let model = document.querySelector('.model')
    // add event addEventListener
window.addEventListener('scroll', navbar_scroll)
user_model.addEventListener('click', open_close_model)
    // functions

// nav bar scroll
function navbar_scroll() {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        navbar.classList.add('animate-navbar')

    } else {
        navbar.classList.remove('animate-navbar')
    }
}

// open && close model

function open_close_model() {
    if (model.getAttribute("active") == 'open') {
        model.setAttribute('active', 'close')
        model.style.height = '40vh'
    } else {
        model.style.height = '0'
        model.setAttribute('active', 'open')
    }
}