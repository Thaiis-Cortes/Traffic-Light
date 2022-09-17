const img = document.getElementById ('imgOff')
const buttons = document.getElementById ('buttons')
let colorIndex = 0;
let intervalId = null

trafficLight = ( event) => {
    stopAutomatic ();
    turnOn [event.target.id] ();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}


const turnOn = {
    'red': () => img.src = "IMG/vermelho-removebg-preview.png",
    'yellow': () => img.src = "IMG/amarelo-removebg-preview.png",
    'green' : () => img.src = "IMG/verde-removebg-preview.png",
    'automatic': () => intervalId = setInterval( changeColor, 1000 )

}

buttons.addEventListener ('click', trafficLight)