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
    
]



let i = 0;
function cambiarImagenUniv(event, img, arrayImg, ctrl1, ctrl2) {
    const elemento = event.target;
    
    console.log(elemento.id)
    console.log(arrayImg.length)
    if (elemento.id == ctrl1 && i>0) {
        i -= 1;
    } else if (elemento.id == ctrl2 && i<arrayImg.length-1) {
        i += 1;
    }
    console.log(i);
    console.log(arrayImg[i])
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