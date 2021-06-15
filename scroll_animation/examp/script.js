const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBox)

checkBox()

function checkBox(){
    const triggerBottom = window.innerHeight / 5 * 4 /* untuk mendapatkan tinggi viewport */

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top /*untuk mendapatkan tinggi viewport per box */
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })   
}