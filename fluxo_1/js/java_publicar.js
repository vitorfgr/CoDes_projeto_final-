document.addEventListener('DOMContentLoaded', function() {

    as = document.querySelector('.enviar_p')
    console.log(as)

    comentario = document.querySelector(".comentário").value
    marcar = document.querySelector(".marcar").value
    console.log(comentario)
    console.log(marcar)


        as.addEventListener('click', function(event) {

            // Obtém o elemento que foi clicado. Não podemos
            // usar a variável "a" diretamente aqui dentro,
            // pois o valor dela muda ao longo do loop.
            t = event.currentTarget

            // SEU CÓDIGO AQUI: coloque no localStorage o
            // nome e o src da imagem da pessoa clicada.
            comentario = document.querySelector(".comentário").value
            marcar = document.querySelector(".marcar").value
            console.log(comentario)
            console.log(marcar)

            localStorage.setItem("comentario", comentario)
            localStorage.setItem("marcar", marcar)

        })

})