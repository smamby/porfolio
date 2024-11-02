// const contPantalla = document.getElementById('cont-screenA');
// const ctrlA1 = document.getElementById('ctrl1A');
// const ctrlA2 = document.getElementById('ctrl2A');
// APP WEB DINAMICA
const ctrlA = document.getElementsByClassName('ctrlA');
const imgA = document.getElementById('imgA');
const arrAppWebDin = [
    '../assets/works/nodeYwebA.png',
    '../assets/works/nodeYwebB.png'
]

// APP WEB ESTATICA
const ctrlB = document.getElementsByClassName('ctrlB');
const imgB = document.getElementById('imgB');
const arrAppWebEstatic = [
    '../assets/works/itinerariosA.png',
    '../assets/works/itinerariosB.png',
    '../assets/works/itinerariosC.png',
    '../assets/works/itinerariosD.png'
]

// APP MOVILE KOTLIN
const ctrlC = document.getElementsByClassName('ctrlC');
const imgC = document.getElementById('imgC');
const arrAppMovile = [
    '../assets/works/kotlinA.png',
    '../assets/works/kotlinB.png',
    '../assets/works/kotlinC.png',
    '../assets/works/kotlinD.png',
    '../assets/works/kotlinE.png',
]

// ALGEBRA LINEAL
const ctrlE = document.getElementsByClassName('ctrlE');
const imgE = document.getElementById('imgE');
const arrArgLin = [
    '../assets/works/python_alg_lin_3incogA.png',
    '../assets/works/python_alg_lin_3incogB.png'
]



var i = 0;
var ctrlAct = '';
function cambiarImagenUniv(event, img, arrayImg, ctrl1, ctrl2) {
    const elemento = event.target;
    console.log('ctrlActOld: ', ctrlAct);
    console.log('ctrlActNew: ',elemento.id.slice(-1));
    console.log('a lenght: ',arrayImg.length);
    console.log('if1 i: ',i);
    if (elemento.id.slice(-1) != ctrlAct) {
        ctrlAct = elemento.id.slice(-1);
        i = 0;
        img.src = arrayImg[0];        
    };
    console.log('if2 i: ',i);
    if (elemento.id == ctrl1 && i>0) {
        i -= 1;
    } else if (elemento.id == ctrl2 && i<arrayImg.length-1) {
        i += 1;
    };
    
    console.log('i3: ',i);
    console.log(arrayImg[i]);
    img.src = arrayImg[i];
}

for (let control of ctrlA) {
    control.addEventListener('click',
         (event) => cambiarImagenUniv(event,imgA,
            arrAppWebDin, 'ctrl1A', 'ctrl2A'));
}
for (let control of ctrlB) {
    control.addEventListener('click',
         (event) => cambiarImagenUniv(event,imgB,
            arrAppWebEstatic, 'ctrl1B', 'ctrl2B'));
}
for (let control of ctrlC) {
    control.addEventListener('click',
         (event) => cambiarImagenUniv(event,imgC,
            arrAppMovile, 'ctrl1C', 'ctrl2C'));
}
for (let control of ctrlE) {
    control.addEventListener('click',
         (event) => cambiarImagenUniv(event,imgE, arrArgLin, 'ctrl1E', 'ctrl2E'));
}

// AMPLIAR IMAGENES
const images = Array.from(document.getElementsByClassName('openable'));
console.log(images)
for (let image of images) {
    image.addEventListener('click', () => {
        // const height = screen.height;
        // const ratio = height / image.naturalHeight;
        // const width = image.naturalWidth * ratio;
        const width = screen.width * 0.6;
        const ratio = width / image.naturalWidth;
        const height = image.naturalHeight * ratio;
        window.open(image.src, '_blank', `width=${width},height=${height}`);
        window.close();
    })
}