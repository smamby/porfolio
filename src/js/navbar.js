const navbar = `<div class=cabezal></div><nav>
                <ul>
                    <li> <a href="./index.html#Home">Home</a> </li>
                    <li> <a href="./index.html#SobreMi">Sobre Mi</a> </li>
                    <li> <a href="./index.html#Conocimientos TI">Conocimiesntos TI</a> </li>
                </ul>
            </nav><div class=cabezal></div>`;


//function navbarMount() {
    const contHeader = document.getElementById('header')
    contHeader.innerHTML = navbar
//}