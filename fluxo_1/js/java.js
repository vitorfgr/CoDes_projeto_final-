document.addEventListener('DOMContentLoaded', function() {
    s = document.querySelector('.list')
    t = document.querySelector('.toggle-btn')
    t.addEventListener('click', function(event) {
        s.style.display="block"
        t.style.left="13rem"
        t.addEventListener('click', function(event) {
            s.style.display="none"
            t.style.left="1rem"
       })
    })
})

document.addEventListener('DOMContentLoaded', function() {

    let nome = document.querySelector('.nome')

    let email = document.querySelector('.email')

    let idade = document.querySelector('.idade')

    let cidade = document.querySelector('.cidade')

    function update() {
        submit = document.querySelector('input[type="submit"]')
        if (nome.value == ''|| email.value == ''|| idade.value == ''|| cidade.value == '') {
            submit.disabled = true
        } else {
            submit.disabled = false
        }
        }

    nome.addEventListener('input', function() {
        update()
    })

    email.addEventListener('input', function() {
        update()
    })

    idade.addEventListener('input', function() {
        update()
    })

    cidade.addEventListener('input', function() {
        update()
    })

    update()
})


document.addEventListener('DOMContentLoaded', function() {

    as = document.querySelectorAll('.form_publicar')

    for (a of as) {

        a.addEventListener('click', function(event) {

            // Obtém o elemento que foi clicado. Não podemos
            // usar a variável "a" diretamente aqui dentro,
            // pois o valor dela muda ao longo do loop.
            t = event.currentTarget

            // SEU CÓDIGO AQUI: coloque no localStorage o
            // nome e o src da imagem da pessoa clicada.

            comentario = t.querySelector(".comentário").innerHTML
            marcar = t.querySelector(".marcar").innerHTML

            localStorage.setItem("comentario", comentario)
            localStorage.setItem("marcar", marcar)

        })

    }

})

document.addEventListener('DOMContentLoaded', function() {

    // SEU CÓDIGO AQUI: pegue do localStorage o
    // nome e o src da imagem da pessoa clicada
    // e coloque eles na página.
    com = document.querySelector(".comment")
    marc = document.querySelector(".marcações")

    com.innerHTML = localStorage.getItem("comentario")
    marc.innerHTML = localStorage.getItem("marcar")

})
