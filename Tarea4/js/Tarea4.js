//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
let textoContar = document.getElementById('textoContar');
let resultadoContar = document.getElementById('resultadoContar');
//# es una funcion flecha (lamda) que recibe un string y devuelve su longitud
const contadorCaracteres = ()=>{

    

    console.log(textoContar.value);
    // recive el text y mediante la funcion length se obtiene el tamano y se guardar en longitud
    let longitud =  textoContar.value.length;
    // retorna el valor de longitud
    resultadoContar.value = longitud
    
}


/*****************************/
//2)Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

let textoCortar = document.getElementById('textoRecortar');
let longitudCortar = document.getElementById('longitudRecortar');
let resultadoCortar = document.getElementById('resultadoCortar');
var acortadorPosicion = () =>{
    // la funcion substing del string obtiene el rango de posiciones en el texto.
    /// en este caso corta el texto del inicio hasta la posicion indicada
    let resultado = textoCortar.value.substring(0,longitudCortar.value);
    resultadoCortar.value = resultado
};



/*****************/
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let textoArray = document.getElementById('textoArray');
let separadorArray = document.getElementById('sepradorArray');
let resultadoArray = document.getElementById('resultadoArray');

var separadorTexto = (texto, separador) =>{
    // la funcion split corta el texto en mediante el separador y retorna un array
    let resultado = textoArray.value.split(separadorArray.value);
    resultadoArray.value = resultado;
};




/************ */
//4) Programa una fucion para que calcule el precio de un producto aplicando un descuento, pe. miFuncion(1000, 20) devolverá 800.
let precio = document.getElementById('valorProducto');
let PorcentajeDescuento = document.getElementById('valorDescuento');
let resultadoDescuento = document.getElementById('precioDescuento');

var descuentoProducto = () =>{
    // encuenta el total del descuento usando una regla de 3 simple
    // precio    ->  100%                    ->  descuento=    (precio * PorcentajeDescuento) / 100
    // descuento ->  PorcentajeDescuento   
    let valorDescuento = ((precio.value*PorcentajeDescuento.value)/100);
    // al precio original se le resta  el valor de descuento.
    let valorconDescuento = precio.value - valorDescuento;
    resultadoDescuento.value = valorconDescuento;
};


/****** */

//5) Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolverá 35 años.

let fechaPersona = document.getElementById('fecha');
let resultadoEdad = document.getElementById('resultadoEdad');

var edadPersona = () =>{
    let fechaNacimiento = Date.parse(fechaPersona.value)
    // se establece la fecha de nacimiento con los datos año, mes y dia
    //let fechaNacimiento =   Date(ano,mes,dia);
    // se obtiene la fecha de actual
    let fechaHoy = new Date();

    //se encuentra la diferencia en entre las 2 fechas.

    let Diferencia = fechaHoy - fechaNacimiento;
    // se establece una nueva fecha con la diferencia anterior
    let nuevaFecha = new Date(Diferencia);
    // para obtener la edad, de la fecha solo extraemos el año y le estamos 1970 (Fecha base de una maquina)
    let edad = nuevaFecha.getFullYear() -1970;
    

    resultadoEdad.value = edad
    
};




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


let numeroDecimalRomano = document.getElementById('numeroDecimalRomano');
let resultadoRomano = document.getElementById('resultadoRomano');
var numeroRomano = () =>{
    let romano = '';
    let valor = numeroDecimalRomano.value;
    let numero = numeroDecimalRomano.value;
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

    resultadoRomano.value =  romano;
};




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


let numeroDecimalBinario = document.getElementById('numeroDecimalBinario');
let resultadoBinario = document.getElementById('resultadoBinario');

const decimalBinario=()=>{
    
    resultadoBinario.value = numeroBinario(numeroDecimalBinario.value)
}



/************ */
//8) Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales.
let stringConVocales = document.getElementById('stringConVocales');
let resultadoNumeroVocales = document.getElementById('resultadoNumeroVocales');

var numeroVocales = () =>{
    let cadena = stringConVocales.value
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

    resultadoNumeroVocales.value= count;
}


/********** */

//9) Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.
let stringPalindromo = document.getElementById('stringPalindromo');
let resultadoPalindromo = document.getElementById('resultadoPalindromo');


var esPalindromo = () =>{
    let texto = stringPalindromo.value;
    //se obtiene la longitud del texto, restandole 1, por la primera posicion es 0;
    console.log(texto)
    let i = texto.length -1;
    let textoInveso = ''
    // se itera el texto en order inverso, es decir, del final hacia la primera posicion.
    for (i; i>-1 ; i--) {
        // se concatena cada caracter el la variable.
        textoInveso = textoInveso + texto[i];
    }
    // se compara el texto obtiene en orden inverso con la original, ambas en minusculas.
    if(textoInveso.toLowerCase() == texto.toLowerCase()){
        resultadoPalindromo.value =  true;
        console.log("ES");
    }
        
    else {
        resultadoPalindromo.value =  false;
        console.log("NO ES");
    }
    console.log(resultadoPalindromo);
}

/****************** */

//10) Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".
let stringConEspacio = document.getElementById('stringConEspacio');
let resultadoSinEspacio = document.getElementById('resultadoSinEspacio');

var eliminaEspacio = () =>{
    let texto = stringConEspacio.value;
    //cortamos el texto, encontrando cada espacio y los almacenamos en un array
    let arrayTexto = texto.split(" ");
    let nuevoTexto = '';
    // con la funcion map, recorremos cada palabra en el array.
    // lo concatenamos en una nueva variable.
    arrayTexto.map((x)=>{
        nuevoTexto =  nuevoTexto + x;
    });

    resultadoSinEspacio.value= nuevoTexto;
}

/********** */
//11) Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE".

const primeraPalabraMays=(texto)=>{
    let nombres = texto.split(" ");

    let iniciales = "";

    nombres.map((x)=>{
           iniciales = iniciales + x.substring(0,1).toUpperCase(); 

    });

    return iniciales;

};

const textoPalabraMys ="Yoni Escobar";
let resultadoPalabraMys = primeraPalabraMays(textoPalabraMys);
console.log(`Las iniciales de '${textoPalabraMys}' es: ${resultadoPalabraMys}`);

const textoPalabraMys1 ="carlos andy tiniguar";
let resultadoPalabraMys1 = primeraPalabraMays(textoPalabraMys1);
console.log(`Las iniciales de '${textoPalabraMys1}' es: ${resultadoPalabraMys1}`);

//12) Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras.
const countarPalabras=(texto)=>{
    let nombres = texto.split(" ");

    return nombres.length;
};

const textoPalabras ="Yoni Escobar";
let numeroPalabras = countarPalabras(textoPalabras);
console.log(`El frase '${textoPalabras}' tiene : ${numeroPalabras} palabras`);

const textoPalabras1 ="Carlos Andy Timoteo Tiniguar";
let numeroPalabras1 = countarPalabras(textoPalabras1);
console.log(`El frase '${textoPalabras1}' tiene : ${numeroPalabras1} palabras`);


//13) Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".

const palabraInicialMys=(texto)=>{
    let nombres = texto.split(" ");
    let nuevoNombre='';

    nombres.map((x)=>{
        nuevoNombre =  nuevoNombre + x.replace(x.substring(0,1),x.substring(0,1).toUpperCase()) + " " ; 

 });

    return nuevoNombre;
};

const textoPalabrasMiniscula ="yoni escobar";
let resultadoPalabrasMiniscula = palabraInicialMys(textoPalabrasMiniscula);
console.log(`El texto  '${textoPalabras}' con inicial mayuscula : ${resultadoPalabrasMiniscula}`);

const textoPalabrasMiniscula1 ="carlos andy timoteo tiniguar";
let resultadoPalabrasMiniscula1 = palabraInicialMys(textoPalabrasMiniscula1);
console.log(`El texto '${textoPalabras1}' con inicial mayuscula  : ${resultadoPalabrasMiniscula1} palabras`);


//14) Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".


const inversionDeTexto =(texto)=>{
    let textoArray = texto.split("");
    let arrayInvertido = textoArray.reverse();
    let invertido = arrayInvertido.join("");


    let longitud = texto.length-1;
    let textoInvertido ="";

    for(var i=longitud; i>=0; i--){
        textoInvertido += texto[i];
    }

    console.log(textoInvertido,invertido);

    if(textoInvertido == invertido)

        return invertido;
    else
        return textoInvertido
};

const textoPalabrasNormal ="Hola Mundo";
let resultadoInverso = inversionDeTexto(textoPalabrasNormal);
console.log(`El texto  '${textoPalabrasNormal}' con inicial mayuscula : ${resultadoInverso}`);

const textoPalabrasNormal1 ="Andy Tiniguar";
let resultadoInverso1 = inversionDeTexto(textoPalabrasNormal1);
console.log(`El texto  '${textoPalabrasNormal1}' con inicial mayuscula : ${resultadoInverso1}`);


//15) Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los números es 150".

const sumaArray =(arrayNumero)=>{
    let suma =0;
    arrayNumero.map((x)=>{
        suma += x;

    });
    
    return suma;  
};

const arraySumar =[10, 20, 30, 40, 50];
let restultaSuma = sumaArray(arraySumar);
console.log(`la suma de  '${arraySumar}' hace un total de : ${restultaSuma}`);

const arraySumar1 =[20, 25, 30, 35, 40,45,50];
let restultaSuma1 = sumaArray(arraySumar1);
console.log(`la suma de  '${arraySumar1}' hace un total de : ${restultaSuma1}`);


//16) Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50) = "La edad mayor es 50 y la edad menor es 10".

const numeroMayorMenor =(arrayNumero)=>{
    let menor;
    let mayor;
    
    arrayNumero.map((x)=>{
        
        if(menor == undefined || mayor ==  undefined)
        {
            menor = x;
            mayor = x;
        }
        menor =  x<menor?x:menor;
        mayor= x>mayor?x:mayor;



    });
    
    return `La edad mayor es ${mayor} y la edad menor es ${menor}`;  
};

const arrayEdad =[10, 20, 30, 40, 50];
let resultadoEdades = numeroMayorMenor(arrayEdad);
console.log(resultadoEdades);

const arrayEdad1 =[20, 25, 30, 35, 40,45,50,55];
let resultadoEdades1 = numeroMayorMenor(arrayEdad1);
console.log(resultadoEdades1);


//17) programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente".
let numeroNota = document.getElementById('numeroNota');
let resultadoNota = document.getElementById('resultadoNota');
const escalaNotas = () =>{
    let nota = numeroNota.value;
    let valor;
    if(nota>=0 && nota <=5){
        valor= 'Pésimo';
    }
    else if(nota>=6 && nota <=7){
        valor= 'Regular';
    }
    else if(nota>=8 && nota <=9){
        valor= 'Bueno';
    }
    else if(nota==10){
        valor= 'Excelente';
    }
    else {
        valor = 'Debe ingresar un valor de 0 - 10';

    }

    resultadoNota.value =valor;
}




//18) programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras.
let numeroDecimalCifra = document.getElementById('numeroDecimalCifra');
let resultadoDecimalCifra = document.getElementById('resultadoDecimalCifra');
const numeroCifras = () =>{
    let numero = numeroDecimalCifra.value;
    resultadoDecimalCifra.value= numero.toString().length;
}
