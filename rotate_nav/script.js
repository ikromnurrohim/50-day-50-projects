const open = document.getElementById('open')
const close = document.getElementById('close')
const cpack = document.getElementById('div_id_cpack')
const container = document.querySelector('.container') 

open.addEventListener('click', () => {
    container.classList.add('show-nav') 
})

close.addEventListener('click', () =>{
    container.classList.remove('show-nav')
})

cpack.on('keyup', function(){
    cpack.addClass('show-cpack')
})