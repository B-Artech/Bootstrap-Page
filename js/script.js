document.addEventListener('DOMContentLoaded', function(){
    
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    

function addSchadow() {

    if(window.scrollY >= 200){
    nav.classList.add('shadow-bg')
}else {
    nav.classList.remove('shadow-bg')
}
}


allNavItems.forEach(Item => Item.addEventListener('click', () => navList.classList.remove('show')))


window.addEventListener('scroll', addSchadow)
})
