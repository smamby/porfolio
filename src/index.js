
const fondoPort = document.getElementById('fondo-portada');
const contPort = document.getElementById('cont-portada');
const face = document.getElementById('face');
const faceBlur = document.getElementById('faceBlur');

fondoPort.addEventListener('mouseenter', () => {
    //face.src = './src/assets/head_blur.png';
    faceBlur.style.opacity = 1;
    face.style.opacity = 0;
    contPort.style.padding = '9vw';
});

fondoPort.addEventListener('mouseleave', () => {
    //face.src = './src/assets/head_A.png'
    faceBlur.style.opacity = 0;
    face.style.opacity = 1;
    contPort.style.padding = '10vw';
})