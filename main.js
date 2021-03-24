const hamBtn = document.querySelector('.hamburger')
const cancelBtn = document.getElementById('cancel-btn')
const sideNav = document.getElementById('sidenav')
const modal = document.querySelector('.modal')

hamBtn.addEventListener('click', () => {
    sideNav.classList.add('show')
    modal.classList.add('showModal')
})

cancelBtn.addEventListener('click', () => {
    sideNav.classList.remove('show')
    modal.classList.remove('showModal')
})

document.addEventListener('click', e => {
    if(e.target === modal) {
        sideNav.classList.remove('show')
        modal.classList.remove('showModal')
    }
})



// media queries 400 1024