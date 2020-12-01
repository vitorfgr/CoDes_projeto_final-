document.addEventListener('DOMContentLoaded', function() {

    as = document.querySelector('.enviar_p')
    console.log(as)

    c = document.querySelector(".adicionar_estat").value
    console.log(c)


        as.addEventListener('click', function(event) {

            // Obtém o elemento que foi clicado. Não podemos
            // usar a variável "a" diretamente aqui dentro,
            // pois o valor dela muda ao longo do loop.
            t = event.currentTarget

            // SEU CÓDIGO AQUI: coloque no localStorage o
            // nome e o src da imagem da pessoa clicada.
            c = document.querySelector(".adicionar_estat").value
            console.log(c)

            localStorage.setItem("c", c)

        })

})