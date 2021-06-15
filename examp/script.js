const open = document.getElementById('open')
const close = document.getElementById('close')
const nav =document.getElementById('nav')

const i = 1

open.addEventListener('click', () =>{
    nav.classList.add('show-nav')
    close.style.zIndex =  1;
})

close.addEventListener('click', () =>{
    nav.classList.remove('show-nav')
    close.style.zIndex = '-1';
})