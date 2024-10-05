const navbar = `<nav>
                <ul>
                    <li> <a href="./home.html">Home</a> </li>
                    <li> <a href="./sobremi.html">Sobre Mi</a> </li>
                    <li> <a href="./conocimientos.html">Conocimiesntos TI</a> </li>
                </ul>
            </nav>`;



const contHeader = document.getElementById('header');
contHeader.innerHTML = navbar;

const footer = `
        <div class="cont-contacto">
            <img class="soc-net" id="gmail" src="../assets/iconGmail.png" alt="gmail">
            <img class="soc-net" id="github" src="../assets/iconGithub.png" alt="github">
            <img class="soc-net" id="instagram" src="../assets/iconIng.png" alt="instagram">
        </div>`;
const contFooter = document.getElementById('footer');
contFooter.innerHTML = footer;