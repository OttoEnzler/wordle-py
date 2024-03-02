let intentos = 6;
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const valor = input.value;
let palabra;

window.addEventListener('load', init)
const API = 'https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase&alphabetize=true';
fetch(API).then(response => response.json())
    .then(response => {
       palabra = response[0];
       console.log("La palabra es: ", palabra);
    })
    .catch(err => console.log(err));



function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

function intentar() {
    console.log("Intento!")
}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function intentar() {
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }

    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
            console.log(INTENTO[i], "VERDE")
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😖</h1>")
    }
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}


button.addEventListener("click", intentar);

