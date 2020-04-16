var imatgran=document.getElementById('imatgran');
var imatge=document.getElementsByClassName('imatge');

document.getElementById('enrere').addEventListener('click',enrere);
document.getElementById('endevant').addEventListener('click',endevant);

var i=0;


function enrere(){
    if (i==0) {i=imatge.length-1;}
    else {i--;}
    imatgran.src=imatge[i].src;
}

function endevant(){
    if (i==imatge.length-1) {i=0;}
    else {i++;}
    imatgran.src=imatge[i].src;
}


imatge[0].addEventListener('mouseover',cambia1);
imatge[1].addEventListener('mouseover',cambia2);
imatge[2].addEventListener('mousemove',cambia3);
imatge[3].addEventListener('mousemove',cambia4);
imatge[4].addEventListener('mousemove',cambia5);

function cambia1(){
    imatgran.src="zap01.png";
}
function cambia2(){
    imatgran.src="zap02.png";
}
function cambia3(){
    imatgran.src="zap03.png";
}
function cambia4(){
    imatgran.src="zap04.png";
}
function cambia5(){
    imatgran.src="zap05.png";
}