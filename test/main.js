// Troca de Texto Automático
const texts = ["SOFTWARE DEVELOPER", "DESIGNER", "PHOTOGRAPHER", "3D MODELER", "DIGITAL ARTIST"];
let index = 0;
const textElement = document.getElementById("changingText");

function changeText() {
    textElement.style.opacity = "0";
    setTimeout(() => {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
        textElement.style.opacity = "1";
    }, 500);
}

setInterval(changeText, 2000);  