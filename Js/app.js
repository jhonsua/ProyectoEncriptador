const textoEntrada = document.querySelector("#input-text");
const botonEncriptar = document.querySelector("#botonOne")
const botonDesencriptar = document.querySelector("#botonTwo");
const botonCopiar = document.querySelector("#copy")
const textoSalida = document.querySelector("#text-out");
const visibleMunheco = document.querySelector("#antes");
const visibleTexto = document.querySelector("#despues");
const borrar = document.querySelector("#delete")
const botonPegar = document.querySelector("#paste")
const numeros = /^[0-9]*$/i;
const letras = /[áéíóú]+/g
const vocales = ['a','e','i','o','u']
const vocalesEncriptadas  = ['ai','enter','imes','ober','ufat']

eventos()

function eventos(){
textoEntrada.addEventListener('keyup', validar);
botonEncriptar.addEventListener('click', verEncriptar);
botonDesencriptar.addEventListener('click', desencriptar);
botonCopiar.addEventListener('click', copiar);
borrar.addEventListener('click', borrarText)
botonPegar.addEventListener('click', pegar)


}

function validar(){


    if(textoEntrada.value !== "")
    {
        borrar.classList.remove('borrar');

      }else{
        borrar.classList.add('borrar')
        botonPegar.classList.add('borrar')
      }
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
    let textDesencript = textoEntrada.value.replaceAll('ai', 'a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u');
    escribir(textDesencript);
    // e.getAttribute("id") == "tipo"
       if(visibleMunheco.getAttribute("class") !== "ocultar"){
        visibleMunheco.setAttribute('class','ocultar')
    
        setTimeout  (function(){ 
        visibleMunheco.style.display = "none";
        visibleTexto.style.display = "block";
        escribir(textDesencript);
      
    
    }, 1000);
 
       } else{
        escribir(textDesencript);
       }
    
}
function copiar(){
   
    navigator.clipboard.writeText(textoSalida.textContent)
    botonPegar.classList.remove('borrar')

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
        strings: [text],
        typeSpeed: 50,
        backDelay: 5000000,
        showCursor: false,
      });




}

function encriptar(text){

    let arrayText = text.split('');
    arrayText.forEach(a => {
        if(vocales.includes(a)){
            arrayText[arrayText.indexOf(a)] = vocalesEncriptadas[vocales.indexOf(a)]
            
        }
    }); 
    let textEncript = arrayText.join('')
  return textEncript;    
  
}

function borrarText(){
    textoEntrada.value ="";
    borrar.classList.add('borrar')
    
}

function pegar(){
    navigator.clipboard.readText().then(text => {
          textoEntrada.value=text;
    });
}