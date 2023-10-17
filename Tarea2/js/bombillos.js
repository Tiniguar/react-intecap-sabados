//se obtene los elementos como el bombillo y tambien los botones de encender y apagar.
let bombillo = document.getElementById('bombillo'); 
let btnEncender = document.getElementById('botonEncender'); 
let btnApagar = document.getElementById('botonApagar'); 

 function encender(){
   //se cambiar el color a amarrillo.
    bombillo.style.backgroundColor = 'yellow';
   //se deshabilita el boton de encender 
    btnEncender.disabled =true;
    // se habilita el boton apagar
    btnApagar.disabled =false;
    console.log('Encender');

 };

 function apagar(){
   //se cambiar el color gris.
    bombillo.style.backgroundColor = '#777';
    //se deshabilita el boton de apagar 
    btnEncender.disabled =false;
    // se habilita el boton encender
    btnApagar.disabled =true;
    console.log('Apagar');
 };