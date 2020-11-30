document.addEventListener('DOMContentLoaded', function() {
    s = document.querySelector('.list')
    t = document.querySelector('.toggle-btn')
    t.addEventListener('click', function(event) {
        if (s.style.display=="none"){
            s.style.display="block"
            t.style.left="13rem"
        }
        else{
            s.style.display="none"
            t.style.left="1rem"
        }
    })
})
