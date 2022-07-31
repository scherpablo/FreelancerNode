window.addEventListener('load', function () { 
    const cambiaTexto = document.querySelector('.misServicios');
    
    cambiaTexto.addEventListener('mouseover', function () {
        cambiaTexto.textContent = 'Ir a Inicio';
    })
    cambiaTexto.addEventListener('mouseout', function () {
        cambiaTexto.textContent = 'Mis Servicios';
    })

})