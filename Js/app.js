const textoEntrada = document.querySelector("#input-text");
const botonEncriptar = document.querySelector("#botonOne")
const botonDesencriptar = document.querySelector("#botonTwo");
const botonCopiar = document.querySelector("#copy")
const textoSalida = document.querySelector("#text-out");
const visibleMunheco = document.querySelector("#antes");
const visibleTexto = document.querySelector("#despues");
const numeros = /^[0-9]*$/i;
const letras = /[áéíóú]+/g

eventos()

function eventos(){
textoEntrada.addEventListener('keyup', validar)
botonEncriptar.addEventListener('click', verEncriptar)
botonDesencriptar.addEventListener('click', desencriptar)
botonCopiar.addEventListener('click', copiar)
}


function validar(){
   let cadenaTexto = textoEntrada.value.split('');
   let filtro = cadenaTexto.filter(c => letras.test(c) || numeros.test(c) || (c === c.toUpperCase() && c !== ' '));
   if(filtro.length > 0){
    alertar(true);
   }
   else{
    alertar(false)
   }
}



function verEncriptar(){
    visibleMunheco.setAttribute('class','ocultar')
    
    setTimeout  (function(){ 
    visibleMunheco.style.display = "none";
    visibleTexto.style.display = "block";
    escribir(encriptar(textoEntrada.value));
  

}, 1000);

  }
function desencriptar(){

}
function copiar(){

}

function alertar(b){

    const icono = document.querySelector("#alert > svg");
    const textAlert = document.querySelector("#text-alert")
    const alert = document.querySelector("#alert");
    if(b){
    icono.style.setProperty("fill","#c30000")
    textAlert.style.setProperty("color","#c30000")
    textAlert.style.fontWeight = ('600')
    alert.setAttribute("class", "animar");
    botonEncriptar.disabled = true;
    botonDesencriptar.disabled = true;
   
    } else {
        icono.style.setProperty("fill","#495057")
        textAlert.style.setProperty("color","#495057")
        alert.classList.remove('animar')
        botonEncriptar.disabled = false;
        botonDesencriptar.disabled = false;

    }
}

function escribir(text){

    var typed = new Typed(textoSalida, {
        strings: [text, " "],
        typeSpeed: 30,
        backDelay: 5000000,
        showCursor: true,
      });




}

function encriptar(text){
//const vocales = ['a','e','i','o','u']
//const vocalesEncriptadas  = ['ai','enter','imes','ober','ufat']
    let textEncript = text.replaceAll('a', 'ai').replaceAll('e','enter').replaceAll('i','imes').replaceAll('o','ober').replaceAll('u','ufat')
    return textEncript;    
}