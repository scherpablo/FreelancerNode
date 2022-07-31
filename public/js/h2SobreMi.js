window.addEventListener('load', function () { 
    const cambiaTexto = document.querySelector('.sobreMi');
    
    cambiaTexto.addEventListener('mouseover', function () {
        cambiaTexto.textContent = 'Ir a Inicio';
    })
    cambiaTexto.addEventListener('mouseout', function () {
        cambiaTexto.textContent = 'Sobre Mi';
    })

})