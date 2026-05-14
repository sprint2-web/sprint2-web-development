alert("Bem-vindo ao site!")

let nome = prompt("Digite seu nome jogador!")

console.log(nome)

const temaBtn = document.getElementById("temaBtn")

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})

const imagens = [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg"
]

let index = 0

const slide = document.getElementById("slide")

setInterval(() => {

    index++

    if(index >= imagens.length){
        index = 0
    }

    slide.src = imagens[index]

}, 3000)