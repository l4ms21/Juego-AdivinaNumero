let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
condicionesIniciarles();

function condicionesIniciarles(){
    asignarTextoElemento('h1','Juego "adivina el número secreto"');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);    
    //si el numero generado está incluido en la lista
   if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',`Ya se adivinaron todos los números posibles del 1 al ${numeroMaximo}`);
        document.querySelector('#intentoUsuario').setAttribute('disabled','true');
   }else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número secreto: ${numeroSecreto} en ${intentos} ${intentos = 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p',`El numero secreto es mayor que ${numeroDeUsuario}`);
        }
        else
            asignarTextoElemento('p',`El numero es menor que ${numeroDeUsuario}`);
    }
    intentos++;
    limpiarCuadroTexto();
    //console.log(intentos);
    return;
}

function limpiarCuadroTexto(){
    return document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    limpiarCuadroTexto();
    condicionesIniciarles();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
