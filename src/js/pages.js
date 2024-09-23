document.addEventListener('DOMContentLoaded', () => {
    const pathname = window.location.pathname;
    const fondo = document.documentElement;
    if(pathname.includes('home')) {
        console.log('home');
        fondo.style.backgroundImage = `linear-gradient(140deg, var(--cuarto) 15%, var(--quinto)75%, var(--quinto)10%)`;
    } else if (pathname.includes('sobremi')) {
        console.log('sobre mi');
        fondo.style.backgroundImage = `linear-gradient(140deg, var(--quinto) 15%, var(--sexto)75%, var(--sexto)10%)`;
    } else if (pathname.includes('conocimientos')) {
        console.log('conocimientos');
        fondo.style.backgroundImage = `linear-gradient(140deg, var(--sexto) 15%, var(--secondary)75%, var(--secondary)10%)`;
    }
})