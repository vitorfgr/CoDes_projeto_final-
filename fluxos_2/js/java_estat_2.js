
document.addEventListener('DOMContentLoaded', function() {

    // SEU CÓDIGO AQUI: pegue do localStorage o
    // nome e o src da imagem da pessoa clicada
    // e coloque eles na página.
    com = document.querySelector(".recebido")

    com.innerHTML = localStorage.getItem("c")

})