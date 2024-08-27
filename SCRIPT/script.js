document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor del carrusel
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
     // Selecciona los botones 
    const botonAnterior = document.querySelector('.boton-anterior');
    const botonSiguiente = document.querySelector('.boton-siguiente');

     // Establece el índice de la imagen a mostrar
    let currentIndex = 0;
    const totalImag = images.length;

    /* Función para actualizar la imagen mostrada en el carrusel,
    asegurando que si el índice supera los límites del total de imágenes, se reinicie al principio
    o al final del carrusel, y luego aplica la transformación para desplazar el carrusel a la imagen correcta. */ 
    function showImage(index) {
        if (index >= totalImag) {
        currentIndex = 0;
        } else if (index < 0) {
        currentIndex = totalImag - 1;
        } else {
        currentIndex = index;
        }

      const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Agrega un evento a los botones "anterior"y  "siguiente"  para mostrar la imagen siguiente al hacer clic
    botonAnterior.addEventListener('click', function () {
        showImage(currentIndex - 1);
    });

    botonSiguiente.addEventListener('click', function () {
        showImage(currentIndex + 1);
    });

    showImage(currentIndex);
    });