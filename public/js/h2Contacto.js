window.addEventListener('load', function () { 
    const cambiaTexto = document.querySelector('.contacto');
    
    cambiaTexto.addEventListener('mouseover', function () {
        cambiaTexto.textContent = 'Ir a Inicio';
    })
    cambiaTexto.addEventListener('mouseout', function () {
        cambiaTexto.textContent = 'Contacto';
    })

})