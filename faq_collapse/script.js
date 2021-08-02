const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle =>{
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle('active')
    })
})

// parentNode diatas adalah si class faq