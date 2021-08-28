const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeMenu = document.querySelector('#closeMenu')
const responseMenu = document.querySelector('.responsive-menu')
const dropdownBtn = document.querySelectorAll('.dropdown-btn')
const overlayMenu = document.querySelector('#overlay-menu')

hamburgerMenu.addEventListener('click', () => {
  responseMenu.classList.add('show')
  overlayMenu.classList.add('show')
})

closeMenu.addEventListener('click', () => {
  responseMenu.classList.remove('show')
  overlayMenu.classList.remove('show')
})

dropdownBtn.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active')
    const dropdownMenu = item.nextElementSibling
    dropdownMenu.classList.toggle('active')
  })
})

overlayMenu.addEventListener('click', () => {
  overlayMenu.classList.remove('show')
  responseMenu.classList.remove('show')
})
