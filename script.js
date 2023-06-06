//seleccionamos los elementos del html
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#numeros');
const pSumaResult = document.querySelector('#sumaResult');
const form = document.querySelector('#form');

//escuchamos los eventos onclick para button, en input es el onchange
//los argumentos son las funciones que debe mandar a "llamar" por eso no van los parentesis la funcion addEvenListener pone los parentesis
//ejemplo de evento click con btn
/*btn.addEventListener('click', btnOnclick);
btn.addEventListener('click', btnSuma);

function btnOnclick () {
    const sumaInputs = input1.value +" y "+ input2.value;
    pResult.innerText = "Los valores son los siguientes: "+sumaInputs
}

function btnSuma (){
    const suma = Number(input1.value) + Number(input2.value);
    pSumaResult.innerText = "La suma es: "+suma;
}*/

//ejemplo de evento submit con form que es para enviar informacion usando la etiqueta <form/>
//priemera forma de resolver la carga automatica de los parametros con form
/*form.addEventListener('submit', mostrarInputValues);
form.addEventListener('submit', sumarInputValues);

function mostrarInputValues (event) {
    event.preventDefault();
    const sumaInputs = input1.value +" y "+ input2.value;
    pResult.innerText = "Los valores son los siguientes: "+sumaInputs
}

function sumarInputValues (event){
    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    pSumaResult.innerText = "La suma es: "+suma;
}*/

//segunda forma utilizando btn, en el html hay que especificar en la etiqueta el type="button" para que por defecto no lo tome como un submit
btn.addEventListener('click', mostrarInputValues);
btn.addEventListener('click', sumarInputValues);
btn.addEventListener('mouseenter', cambiarcolorRed);
btn.addEventListener('mouseleave', cambiarColorBlue);
//input1.addEventListener('mouseover', enviarFormulario);

function mostrarInputValues () {
    //event.prevent  Default();
    const sumaInputs = input1.value +" y "+ input2.value;
    pResult.innerText = "Los valores son los siguientes: "+sumaInputs
}

function sumarInputValues (){
    //event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    pSumaResult.innerText = "La suma es: "+suma;
}

function cambiarcolorRed () {
    btn.style.backgroundColor = "red";
}

function cambiarColorBlue () {
    btn.style.backgroundColor = "blue";
}

function enviarFormulario (event) {
    event.preventDefault();
    alert("Es un virus!!!")
}