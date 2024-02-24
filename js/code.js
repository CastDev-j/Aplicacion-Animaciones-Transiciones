var animacionbtnUno = document.querySelector('#animacionUno')
var animacionbtnDos = document.querySelector('#animacionDos')
var animacionbtnTres = document.querySelector('#animacionTres')
var animacionUno = document.querySelector('.animacion-1')
var animacionDos = document.querySelector('.animacion-2')
var animacionTres = document.querySelector('.animacion-3')


estadoUno = 'reproduciendo'
animacionbtnUno.addEventListener('click', () => {
    if (estadoUno == 'pausado') {
        animacionUno.style.animationPlayState = 'running'
        animacionbtnUno.textContent = 'Detener'
        estadoUno = 'reproduciendo'
    } else {
        animacionUno.style.animationPlayState = 'paused'
        animacionbtnUno.textContent = 'Reproducir'
        estadoUno = 'pausado'
    }
})

estadoDos = 'reproduciendo'
animacionbtnDos.addEventListener('click', () => {
    if (estadoDos == 'pausado') {
        animacionDos.style.animationPlayState = 'running'
        animacionbtnDos.textContent = 'Detener'
        estadoDos = 'reproduciendo'
    } else {
        animacionDos.style.animationPlayState = 'paused'
        animacionbtnDos.textContent = 'Reproducir'
        estadoDos = 'pausado'
    }
})

estadoTres = 'reproduciendo'
animacionbtnTres.addEventListener('click', () => {
    if (estadoTres == 'pausado') {
        animacionTres.style.animationPlayState = 'running'
        animacionbtnTres.textContent = 'Detener'
        estadoTres = 'reproduciendo'
    } else {
        animacionTres.style.animationPlayState = 'paused'
        animacionbtnTres.textContent = 'Reproducir'
        estadoTres = 'pausado'
    }
})

const CARTAS = document.querySelectorAll('.cartas-t2')
const figuras = document.querySelectorAll('.figura')
const misColores = ['#52ff70', '#ffda9e', '#fabfb7', '#e79eff', '#9b9b9b', '#7ff9c7', '#84b6f4', '#ff7360', '#f74fd0']
const btnGrande = document.querySelector('.btn-grande')


function comparacionAleatoria() {
    return Math.random() - 0.5;
}



btnGrande.addEventListener('click', () => {
    figuras.forEach(figura => {
        numeroAleatorio = Math.floor(Math.random() * 2) + 1
        if (numeroAleatorio == 1) {
            bordes = '10px'
        } else {
            bordes = '50px'
        }
        figura.style.borderRadius = bordes
    });

    misColoresAleatorio = misColores.sort(comparacionAleatoria);
    console.log(misColoresAleatorio)
    var i = 0
    CARTAS.forEach(carta => {
        carta.style.setProperty('--color', misColoresAleatorio[i]);
        i++
    })
})




