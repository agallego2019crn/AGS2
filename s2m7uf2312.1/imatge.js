var imatge=document.getElementById('bombeta');

document.getElementById('on').addEventListener('click',encendido);
document.getElementById('off').addEventListener('click',apagado);

function encendido(){
    imatge.src="bombeta/encendida.png"
}

function apagado(){
    imatge.src="bombeta/apagada.png"
}