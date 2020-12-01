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