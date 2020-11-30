
document.addEventListener('DOMContentLoaded', function() {

    // SEU CÓDIGO AQUI: pegue do localStorage o
    // nome e o src da imagem da pessoa clicada
    // e coloque eles na página.
    com = document.querySelector(".comment")
    marc = document.querySelector(".marcações")

    com.innerHTML = localStorage.getItem("comentario")
    marc.innerHTML = localStorage.getItem("marcar")

})
