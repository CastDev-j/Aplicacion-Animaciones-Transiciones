const elementos = document.querySelectorAll('.doc-selec')
const barra = document.querySelector('.progre-bar')
const artTransiciones = document.querySelector('.articulos-transicion')
const artAnimaciones = document.querySelector('.articulos-animaciones')
const artPropiedades = document.querySelector('.articulos-propiedades')

elementos.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        if (this.innerHTML == 'Todas') {
            barra.style.width = '70px'
            barra.style.backgroundColor = '#ff7360'
            barra.style.marginLeft = '25px'

            artTransiciones.style.display = 'block'
            artAnimaciones.style.display = 'block'
            artPropiedades.style.display = 'block'

            artTransiciones.style.opacity = '1'
            artAnimaciones.style.opacity = '1'
            artPropiedades.style.opacity = '1'
        }
        if (this.innerHTML == 'Transiciones') {
            barra.style.width = '110px'
            barra.style.backgroundColor = '#84b6f4'
            barra.style.marginLeft = '140px'

            artAnimaciones.style.opacity = '0'
            artPropiedades.style.opacity = '0'
            artTransiciones.style.opacity = '1'

            setTimeout(() => {
                artTransiciones.style.display = 'block'
                artAnimaciones.style.display = 'none'
                artPropiedades.style.display = 'none'
            }, 200);
        }
        if (this.innerHTML == 'Animaciones') {
            barra.style.width = '110px'
            barra.style.backgroundColor = '#f74fd0'
            barra.style.marginLeft = '300px'

            artPropiedades.style.opacity = '0'
            artTransiciones.style.opacity = '0'
            artAnimaciones.style.opacity = '1'

            setTimeout(() => {
                artTransiciones.style.display = 'none'
                artAnimaciones.style.display = 'block'
                artPropiedades.style.display = 'none'
            }, 200);
        }
        if (this.innerHTML == 'Propiedades no animables') {
            barra.style.width = '190px'
            barra.style.backgroundColor = '#52ff70'
            barra.style.marginLeft = '460px'

            artTransiciones.style.opacity = '0'
            artAnimaciones.style.opacity = '0'
            artPropiedades.style.opacity = '1'

            setTimeout(() => {
                artTransiciones.style.display = 'none'
                artAnimaciones.style.display = 'none'
                artPropiedades.style.display = 'block'
            }, 200);
        }
    });
});
