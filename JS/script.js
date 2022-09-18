const palabras = ["camino","cansancio","ballena","internet","el diego"];

let palabra="";
let palabraOculta=[];
let fallos=0;

function seleccionPalabra(palabras){
    let totalPalabras = palabras.length-1;
    let rand=(Math.random() * totalPalabras).toFixed(0);
    palabra=palabras[rand];
    console.log(palabra);
}
let guiones = document.getElementById("palabra");

function imprimirGuiones(num) {
    for (let i = 0; i < num; i++) {
      palabraOculta[i] = "_";
    }
    guiones.innerHTML = palabraOculta.join(" ");
  }
let contador=0;
let contadordos=0;

document.querySelectorAll(".letra").forEach((boton, i) => {boton.addEventListener("click", function(){
    let caracter=traducirletra(i)   
    //console.log(palabra.length) 
    contador=0;
    
    for (let index = 0; index < palabra.length; index++) {
        let letra = palabra[index];
        if (letra ==caracter) {
           // console.log('coincide caracter nro : ' + index);
            palabraOculta[index]=caracter;
            guiones.innerHTML = palabraOculta.join(" ");
        }
        if (letra != caracter) {
            contador=contador+1;
        }
        if(contador==palabra.length){
            contadordos=contadordos+1;
        }
    }
    console.log('caracter seleccionado : '+caracter);
    console.log('cantidad de fallos : '+contadordos);
    if (contadordos==1) {
        cambiarImagen("01");
        console.log("graficar cabeza");
    }else if (contadordos==2) {
        cambiarImagen("02");
        console.log("graficar tronco");
    }else if (contadordos==3) {
        cambiarImagen("03");
        console.log("graficar brazos");
    }else if (contadordos==4) {
        cambiarImagen("04");
        console.log("graficar piernas");
        alert('usted perdio')
    }
});
});


function cambiarImagen(nombre){
    document.getElementById("imagen").src=`./IMG/image${nombre}.png`;
  }

function iniciar(){
    seleccionPalabra(palabras);
    imprimirGuiones(palabra.length) 
}

iniciar();
function traducirletra(number){
    switch (number){
        case 0:
            return "a";
        case 1:
            return "b";
        case 2:
            return "c";
        case 3:
			return "d";
        case 4:
            return "e";
        case 5:
            return "f";
        case 6:
            return "g";
        case 7:
			return "h";
        case 8:
            return "i";
        case 9:
            return "j";
        case 10:
			return "k";
        case 11:
            return "l";
        case 12:
            return "m";
        case 13:
            return "n";
        case 14:
			return "ñ";
		case 15:
            return "o";
        case 16:
            return "p";
        case 17:
            return "q";
        case 18:
			return "r";
        case 19:
            return "s";
        case 20:
            return "t";
        case 21:
            return "v";
        case 22:
			return "w";
        case 23:
            return "x";
        case 24:
            return "y";
        case 25:
            return "z";
        }
}