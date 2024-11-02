const footer = `        
            <img class="soc-net" id="gmail" src="./src/assets/iconGmail.png" alt="gmail">
            <img class="soc-net" id="github" src="./src/assets/iconGithub.png" alt="github">
            <img class="soc-net" id="instagram" src="./src/assets/iconIng.png" alt="instagram">
        `;
const contFooter = document.getElementById('contacto-cont');
contFooter.innerHTML = footer;

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