var imatge=document.getElementById('bombeta');
imatge.addEventListener('click',bombeta);

function bombeta(){

    if(imatge.src.match("bombeta/encendida.png")){
        imatge.src="bombeta/apagada.png";
        console.log("encendida");
    }

    else{
    imatge.src="bombeta/encendida.png";
    console.log("apagada");
    }
}