/*DESENFOCAR 0*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[0].addEventListener('input',desenfocar);

function desenfocar(){
    valor[0].innerHTML=tirador[0].value;
    imatge[0].style.webkitFilter="blur("+tirador[0].value+"px)";
}

/*GRISOS 4*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[1].addEventListener('input',gris);

function gris(){
    valor[1].innerHTML=tirador[1].value;
    imatge[1].style.webkitFilter="grayscale("+tirador[1].value+"%)";
}

/*OMBRA 2*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[2].addEventListener('input',ombrear);

function ombrear(){
    valor[2].innerHTML=tirador[2].value;
    imatge[2].style.webkitFilter="drop-shadow("+tirador[2].value+"px "+tirador[2].value+"px "+tirador[2].value+"px orange)";
}

/*SEPIA 3*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[3].addEventListener('input',sepiar);

function sepiar(){
    valor[3].innerHTML=tirador[3].value;
    imatge[3].style.webkitFilter="sepia("+tirador[3].value+"%)";
}

/*LLUMINOSITAT 4*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[4].addEventListener('input',lluminositat);

function lluminositat(){
    valor[4].innerHTML=tirador[4].value;
    imatge[4].style.webkitFilter="brightness("+tirador[4].value+"%)";
}

/*CONTRAST 5*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[5].addEventListener('input',contraste);

function contraste(){
    valor[5].innerHTML=tirador[5].value;
    imatge[5].style.webkitFilter="contrast("+tirador[5].value+"%)";
}

/*TONO 6*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[6].addEventListener('input',entonar);

function entonar(){
    valor[6].innerHTML=tirador[6].value;
    imatge[6].style.webkitFilter="hue-rotate("+tirador[6].value+"deg)";
}

/*INVERTIR 7*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[7].addEventListener('input',invertir);

function invertir(){
    valor[7].innerHTML=tirador[7].value;
    imatge[7].style.webkitFilter="invert("+tirador[7].value+"%)";
}

/*SATURAR 8*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[8].addEventListener('input',saturar);

function saturar(){
    valor[8].innerHTML=tirador[8].value;
    imatge[8].style.webkitFilter="saturate("+tirador[8].value+"%)";
}


/*OPACIDAD 9*/
var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

tirador[9].addEventListener('input',opacar);

function opacar(){
    valor[9].innerHTML=tirador[9].value;
    imatge[9].style.webkitFilter="opacity("+tirador[9].value+"%)";
}