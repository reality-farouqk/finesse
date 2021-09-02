//Select element function
const selectElement = (element) => {
    return document.querySelector(element)
}

let menuToggler = selectElement('.menu-toggle')
let body = selectElement('body')

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open')
})

 