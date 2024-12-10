document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname;
    const fondo = document.documentElement;
    
    if(pathname.includes('index')) {
        console.log('inicio');
        fondo.style.backgroundImage = `linear-gradient(140deg, var(--cuarto) 15%, var(--quinto)75%, var(--quinto)10%)`;
        document.getElementsByTagName('li')[0].style.backgroundColor = 'rgba(255,255,255,0.3';
        document.getElementsByTagName('li')[0].classList.add('selected');
        document.documentElement.style.setProperty('--adaptativo', '#ee6b92')
    } else if (pathname.includes('home')) {
        console.log('home');
        fondo.style.backgroundImage = `linear-gradient(140deg, var(--cuarto) 15%, var(--quinto)75%, var(--quinto)10%)`;
        document.getElementsByTagName('li')[1].style.backgroundColor = 'rgba(255,255,255,0.3';
        document.getElementsByTagName('li')[1].classList.add('selected');
        document.documentElement.style.setProperty('--adaptativo', '#ee6b92')
    } else if (pathname.includes('sobremi')) {
        console.log('sobre mi');
        fondo.style.backgroundImage = `linear-gradient(140deg, var(--quinto) 15%, var(--sexto)75%, var(--sexto)10%)`;
        document.getElementsByTagName('li')[2].style.backgroundColor = 'rgba(255,255,255,0.3';
        document.getElementsByTagName('li')[2].classList.add('selected');
        document.documentElement.style.setProperty('--adaptativo', '#69bdee')
    } else if (pathname.includes('conocimientos')) {
        console.log('conocimientos');
        fondo.style.backgroundImage = `linear-gradient(140deg, var(--sexto) 15%, var(--secondary)75%, var(--secondary)10%)`;
        document.getElementsByTagName('li')[3].style.backgroundColor = 'rgba(255,255,255,0.3';
        document.getElementsByTagName('li')[3].classList.add('selected');
        document.documentElement.style.setProperty('--adaptativo', '#e2af75')
    }
})

const mail = document.getElementById('gmail');
const github = document.getElementById('github');
const ing = document.getElementById('instagram');

mail.addEventListener('click', () => {
    console.log('gmail');
    window.location.href = 'mailto: s.mamby@gmail.com'
});
github.addEventListener('click', () => {
    console.log('github');
    window.open('https://github.com/smamby', '_blank');
});
ing.addEventListener('click', () => {
    console.log('instagram');
    window.open('https://www.instagram.com/seba.mamby', '_blank');
});


// AMPLIAR IMAGENES home
const imagenes = Array.from(document.getElementsByClassName('pic'));
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const distortSect = document.getElementById('distortion');


console.log(imagenes)
for (let imagen of imagenes) {
    imagen.addEventListener('click', () => {
        // const width = screen.width * 0.6;
        // const ratio = width / imagen.naturalWidth;
        // const height = imagen.naturalHeight * ratio;
        // window.open(imagen.src, '_blank', `width=${width},height=${height}`);
        let source = imagen.src;
        modalImg.src = source;        
        modal.classList.add('modal--show');
    })
}

imagenes.forEach(imagen => { 
    imagen.addEventListener('mouseenter', () => {
        imagen.style.filter = 'saturate(4) brightness(3)';
        imagen.style.transition = 'filter 20s ease';
        distortSect.style.backgroundImage = `url(${imagen.src})`; 
        distortSect.style.opacity = 1;
        distortSect.style.transition = 'opacity 40s 8s ease';
    });

    imagen.addEventListener('mouseleave', () => {
        imagen.style.filter = 'saturate(1) brightness(1)';
        imagen.style.transition = 'filter 1s ease';
        distortSect.style.opacity = 0;
        distortSect.style.transition = 'opacity 2s ease';
    });
})

modal.addEventListener('click', () => {
    console.log('modal clicked');
    modal.classList.remove('modal--show');
    //modalImg.src = '';
})

// margen dinamico para tablets del #think
// hecho en javascript por la funcion compleja 
// requerida para un calculo mas ajustado

const pThink = document.querySelector('#think');
const contText = document.querySelector('.cont-text-home');
const vw = window.innerWidth;
const dynamicMargin = (-vw / 3) + (contText.offsetWidth * 0.90);
console.log(dynamicMargin)

pThink.style.marginLeft = `${dynamicMargin}px`;