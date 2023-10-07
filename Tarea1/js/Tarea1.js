//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//# es una funcion flecha (lamda) que recibe un string y devuelve su longitud
var contardorCaracteres = (cadena)=>{
    // recive el text y mediante la funcion length se obtiene el tamano y se guardar en longitud
    let longitud =  cadena.length;
    // retorna el valor de longitud
    return longitud;
}
// se almacena el tamaño la longitud del text "Hola mundo" de la funcion contardorCaracteres
const text1 = "Hola mundo";
let tamaño = contardorCaracteres(text1);
// se imprime en la consola el tamano del texto
console.log(`El tamaño del texto ${text1} es: ${tamaño}` );

// segunda prueba para la llamada de la funcion contardorCaracteres
const text2 = "Bienvenidos!";
let tamaño1 = contardorCaracteres(text2);
// se imprime el tamaño de la palabra "Bienvenidos!"
console.log(`Es tamaño del texto ${text2} es: ${tamaño1}` );

/*****************************/
//2)Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


var acortadorPosicion = (texto, posicion) =>{
    // la funcion substing del string obtiene el rango de posiciones en el texto.
    /// en este caso corta el texto del inicio hasta la posicion indicada
    let resultado = texto.substring(0,posicion);
    return resultado
};

const textoSinCortar ="Hola Mundo";
const cortarHasta = 4;
// se envia en texto a la funcion hasta que lo corte hasta la posicion de 4 caracteres
let nuevoTexto =  acortadorPosicion(textoSinCortar,cortarHasta);
console.log(`El resultado  de '${textoSinCortar}'  cortado hasta ${cortarHasta} caracteres: ${nuevoTexto}`);


/*****************/
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

var separadorTexto = (texto, separador) =>{
    // la funcion split corta el texto en mediante el separador y retorna un array
    let resultado = texto.split(separador);
    return resultado
};
// se enviar un texto y el separado de espacios
const textoOriginal = "Hola que tal";
const separador = " ";
let arrayTexto =  separadorTexto(textoOriginal,separador);
console.log(arrayTexto);
console.log(`El resultado  de ${textoOriginal }, separado por "${separador}" es: ${arrayTexto}`);



/************ */
//4) Programa una fucion para que calcule el precio de un producto aplicando un descuento, pe. miFuncion(1000, 20) devolverá 800.


var descuentoProducto = (precio, PorcentajeDescuento) =>{
    // encuenta el total del descuento usando una regla de 3 simple
    // precio    ->  100%                    ->  descuento=    (precio * PorcentajeDescuento) / 100
    // descuento ->  PorcentajeDescuento   
    let valorDescuento = ((precio*PorcentajeDescuento)/100);
    // al precio original se le resta  el valor de descuento.
    let valorconDescuento = precio - valorDescuento;
    return valorconDescuento
};

// se enviar en precio de un producto con el  20% de descuento.
const precioOriginal = 1000
const descPorcentaje = 20
let Precio =  descuentoProducto(precioOriginal,descPorcentaje);
console.log(`El Precio ${precioOriginal} con ${descPorcentaje}% es: ${Precio}`);

/****** */

//5) Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolverá 34 años.



var edadPersona = (ano,mes, dia) =>{
    // se establece la fecha de nacimiento con los datos año, mes y dia
    let fechaNacimiento =  new Date(ano,mes,dia);
    // se obtiene la fecha de actual
    let fechaHoy = new Date();

    //se encuentra la diferencia en entre las 2 fechas.

    let Diferencia = fechaHoy - fechaNacimiento;
    // se establece una nueva fecha con la diferencia anterior
    let nuevaFecha = new Date(Diferencia);
    // para obtener la edad, de la fecha solo extraemos el año y le estamos 1970 (Fecha base de una maquina)
    let edad = nuevaFecha.getFullYear() -1970;
    


    return edad
};
// envia la fecha de nacimiento para encontrar los años
const fecha = "01/09/1988";
let edad =  edadPersona(1988,9,1);
console.log(`La fecha ${fecha} tiene : ${edad} años`);

// envia la fecha de nacimiento para encontrar los años
const fecha1 = "30/01/1990";
let edad1 =  edadPersona(1990,1,30);
console.log(`La fecha ${fecha1} tiene : ${edad1} años`);



/******* */


//6) Programa que convierte decimal a romano hasta el número 1000.  mifuncion(15)  devolver:  el 15 es XV

var repetirCaracter=(veces, caracter)=>{
    let nuevoChar = ''
    // solo se permite imprimir 3 veces el mismo caracter seguido
    if(veces < 4){
        // mediante el ciclo se agregar el caracter hasta llegar a 0
        while (veces >=1){
            nuevoChar =  nuevoChar + caracter; // se contatena el mismo caracter
            veces--; // resta 1 a la iterancion
        }
    }
    else {
        
        // condiciones especiales para los valor de centenas entre 4 - 9
        if(caracter =="C" && veces == 4) // cuando es valor de 400 se pinta CD
            nuevoChar = 'CD';  
        else if(caracter =="C" && veces == 5) // cuando es valor de 500 se pinta solo C
            nuevoChar = 'D';
        else if(caracter =="C" && veces > 5 && veces <9) // cuando es valor esta entre 600 y 800 se pinta D
            // y se vuelve llamar esta funcion para pintar la C las veces necesario menores a 3 por el residuo entre 4
            nuevoChar = 'D' + repetirCaracter(media % 5, 'C', 0) ;
        
        else if(caracter =="C"  && veces == 9)  /// cuando es valor de 900 se pinta CM
            nuevoChar= 'CM';
        
        // condiciones especiales para los valor de Decenas entre 4 - 9
        else if(caracter =="X" && veces == 4) // cuando es valor de 40 se pinta XL
            nuevoChar = 'XL';
        else if(caracter =="X" && veces == 5) // cuando es valor de 50 se pinta solo L
            nuevoChar = 'L';
        else if(caracter =="X" && veces > 5 && veces <9) // cuando es valor esta entre 60 y 80 se pinta L mas la veces necesarias de X
            nuevoChar = 'L' + repetirCaracter(veces % 5, 'X', 0) ;
        
        else if(caracter =="X"  && veces == 9) // cuando es valor de 90 se pinta XC
            nuevoChar= 'XC';

        // condiciones especiales para los valor de Unidades entre 4 - 9
        else if(caracter =="I" && veces == 4) // cuando es valor de 4 se pinta solo IV
            nuevoChar = 'IV';
        else if(caracter =="I" && veces == 5) // cuando es valor de 5 se pinta solo V
            nuevoChar = 'V';
        else if(caracter =="I" && veces > 5 && veces <9) // cuando es valor esta entre 6 y 8 se pinta V mas la veces necesarias de I
            nuevoChar = 'V' + repetirCaracter(veces % 5, 'I', 0) ;
        
        else if(caracter =="I"  && veces == 9) // cuando es valor de 9 se pinta solo IX
            nuevoChar= 'IX';
    }
    
    return nuevoChar;
}

var numeroRomano = (numero) =>{
    let romano = '';
    let valor = numero;
    // solo soporta hasta 3,999. mayor a 4mil ya no resuelve 
    if(numero > 3999){
        return 'No Valido'
    }
    // se divide entre 1 mil y al resultado, nuevamente se le obtiene el residuo entre 10,
    let millar =  Math.floor(numero/1000) %10 ;
        // este residuo esta entre 0 - 9, se envia a pintar la veces necesarias
        romano = romano + repetirCaracter(millar ,'M',valor);
     // se divide entre 100 y al resultado, nuevamente se le obtiene el residuo entre 10.
    let centena =  Math.floor(numero/100) %10 ;
        // este residuo esta entre 0 - 9, se envia a pintar la veces necesarias
        romano = romano + repetirCaracter(centena ,'C',valor);
     // se divide entre 10 y al resultado, nuevamente se le obtiene el residuo entre 10.
    let decena =  Math.floor(numero/10) %10 ;
        // este residuo esta entre 0 - 9, se envia a pintar la veces necesarias
        romano = romano + repetirCaracter(decena ,'X',valor);
     // se divide entre 1 y al resultado, nuevamente se le obtiene el residuo entre 10.
    let unidad =  Math.floor(numero/1) %10 ;
        // este residuo esta entre 0 - 9, se envia a pintar la veces necesarias
        romano = romano + repetirCaracter(unidad ,'I',valor);

    return romano;
};



let valorDecimal = 15
let valorDecimal1 = 3946

let valorRomano =  numeroRomano(valorDecimal);
console.log(`Numero Romano de ${valorDecimal} es: ${valorRomano}`);

let valorRomano1 =  numeroRomano(valorDecimal1);
console.log(`Numero Romano de ${valorDecimal1} es: ${valorRomano1}`);

/*************** */
//7) progrma conviete decimal a binario. ejemplo: 1000 = 1111101000. 1111101000
 

var numeroModa = (residuo) =>{
    // verificar el el valor residuo es 0
    if(residuo == 0)
        //  retorna un 0
        return '0';
    else
        // por defecto retorna 1
        return  '1';
}


var numeroBinario = (numero) =>{
    // variable para contatenar los 1 y 0.
    let binario ='';

    // encuenta el valor de la division entre 2.
    // la funcion Math.floor me retorna un numero entero.
    let division =  Math.floor(numero / 2);
    //encuentra el valor de residuo de la division entre 2.
    let residuo =  Math.floor(numero % 2);
    // si el resultado de la division es mayor a 1, se vuelve a llamar a la misa funcion
    if(division > 1){
        // una llamada recursiva de la misma funcion.
        let val = numeroBinario(division);
        // usar la funcion numeroModa para validr el residuo es 0 o 1.
         // concatena los valores con los valores ya obtenidos
        binario = binario + val +numeroModa(residuo);
    }
    else if(division == 1){
        // usar la funcion numeroModa para validr el residuo es 0 o 1.
         // concatena los valores con los valores ya obtenidos
        binario = binario + division +numeroModa(residuo);
    }

    else {
        // usar la funcion numeroModa para validr el residuo es 0 o 1.
        // concatena los valores con los valores ya obtenidos
        binario =  binario  +numeroModa(residuo);
    }
    return binario

};

//envia el numero 6 esperando un resultado en binario
let numeroDecimal = 6;
let valorBinario =  numeroBinario(numeroDecimal);
console.log(`El numero ${numeroDecimal}  en Binario es: ${valorBinario}`);
//envia el numero 99 esperando un resultado en binario
let numeroDecimal1 = 99;
let valorBinario1 =  numeroBinario(numeroDecimal1);
console.log(`El numero ${numeroDecimal1}  en Binario es: ${valorBinario1}`);
//envia el numero 1000 esperando un resultado en binario
let numeroDecimal2 = 1000;
let valorBinario2 =  numeroBinario(numeroDecimal2);
console.log(`El numero ${numeroDecimal2}  en Binario es: ${valorBinario2}`);


/************ */
//8) Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales.

var numeroVocales = (cadena) =>{
    // obtiene la longitud de la cadena
    let long = cadena.length;
    // contador comienza en 0
    let count = 0
    // ciclo for para iterar cada caracter de la cadena
    for (const i in cadena) {
        // se obtiene 1 caracter 
        let char = cadena[i]
        // se verificar si es el caracter a (mayuscula y minuscula)
        if(char == 'a' || char == 'A' ){
            // se ser correcto se suma 1 a count.
            count ++;
        }
        // se verificar si es el caracter e o E
        else if(char == 'e' || char == 'E' ){
            // se ser correcto se suma 1 a count.
            count ++;
        }
         // se verificar si es el caracter i o I
        else if(char == 'i' || char == 'I' ){
            // se ser correcto se suma 1 a count.
            count ++; 
        }
         // se verificar si es el caracter o u O
        else if(char == 'o' || char == 'O' ){
            // se ser correcto se suma 1 a count.
            count ++; 
        }
         // se verificar si es el caracter u o U
        else if(char == 'u' || char == 'U' ){
            // se ser correcto se suma 1 a count.
            count ++; 
        }

        //NOTA: se puede agregar las vocales con tilde desde del operador || si es necesario.
    }

    return count;
}

// se enviar la palabra "Hola Mundo", y se espera el numero de vocales que tiene
let textoVocal = "Hola Mundo";
let valorVocal =  numeroVocales(textoVocal);
console.log(`El texto ${textoVocal}  tiene ${valorVocal} Vocales`);

// se enviar la palabra "HOLA Mundo", y se espera el numero de vocales que tiene
// prueba que funciona con mayusculas.
let textoVocal1 = "HOLA mundo";
let valorVocal1 =  numeroVocales(textoVocal1);
console.log(`El texto ${textoVocal1}  tiene ${valorVocal1} Vocales`);

/********** */

//9) Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.

var esPalindromo = (texto) =>{
    //se obtiene la longitud del texto, restandole 1, por la primera posicion es 0;
    let i = texto.length -1;
    let textoInveso = ''
    // se itera el texto en order inverso, es decir, del final hacia la primera posicion.
    for (i; i>-1 ; i--) {
        // se concatena cada caracter el la variable.
        textoInveso = textoInveso + texto[i];
    }
    // se compara el texto obtiene en orden inverso con la original, ambas en minusculas.
    if(textoInveso.toLowerCase() == texto.toLowerCase())
        return true;
    else 
        return false;
}
// se envia la palabra "Salas" y esperamos un True o False
let textoPalindromo = "Salas";
let valorPalindromo =  esPalindromo(textoPalindromo);
console.log(`La palabra ${textoPalindromo}  es palindromo: ${valorPalindromo}`);

// se envia la palabra "Anilina" y esperamos un True o False
let textoPalindromo1 = "Anilina";
let valorPalindromo1 =  esPalindromo(textoPalindromo1);
console.log(`La palabra ${textoPalindromo1}  es palindromo: ${valorPalindromo1}`);


/****************** */

//10) Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".


var eliminaEspacio = (texto) =>{
    //cortamos el texto, encontrando cada espacio y los almacenamos en un array
    let arrayTexto = texto.split(" ");
    let nuevoTexto = '';
    // con la funcion map, recorremos cada palabra en el array.
    // lo concatenamos en una nueva variable.
    arrayTexto.map((x)=>{
        nuevoTexto =  nuevoTexto + x;
    });

    return nuevoTexto;
}
// enviamos una palabra "Hola Mundo" y le quitamos el espacio
let textoEspacio = "Hola Mundo";
let valorSinEspacio =  eliminaEspacio(textoEspacio);
console.log(`La palabra "${textoEspacio}"  sin espacio es: "${valorSinEspacio}"`);

// enviamos una palabra "Hola que tal amigo" y le quitamos el espacio
let textoEspacio1 = "Hola que tal amigo";
let valorSinEspacio1 =  eliminaEspacio(textoEspacio1);
console.log(`La palabra "${textoEspacio1}"  sin espacio es: "${valorSinEspacio1}"`);