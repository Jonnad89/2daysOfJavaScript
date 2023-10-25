/*
Datos primitivos
    - String / cadenas de texto
    - Number / Numericos
    - Booleanos
    - Null
    - Undefined
*/

// Cadenas de texto

// Comillas simples 'Hola, mundo'
// Comillas dobles "Hola, cómo están?"
// Backticks (comillas invertidas) `Hola a todos`


let cadenaDeTexto = "¡Hola mundo!"

// ¡ H o l a   m u n d o !
// 0 1 2 3 4 5 6 7 8 9 10 11

let cadenaIndice = cadenaDeTexto[3]

console.log( cadenaIndice )

// length -> Cantidad total que conforman a una cadena de texto
// dato.propiedad

let longitudCadenaDeTexto = cadenaDeTexto.length;
console.log( longitudCadenaDeTexto )

let numeroString = "100"; 
let numeroString2 = 40;
let resultado = numeroString + numeroString2
console.log(resultado)

// Number / Numerico

let numeroEntero = 5;

let numeroFlotante = 5.8;

let numeroNegativo = -10;

// Infinity -infinity 
// NaN -> Not a Number

console.log( "Esta es una string" * 5 )
console.log("cadena uno" * "cadena dos")


console.log(100 / 0) // Infinity
console.log(0 / 100) // 0
console.log(-100 / 0) // - Infinity

// Booleans

let booleanoTrue = true;
let booleanoFalse = false;

console.log(booleanoTrue)
console.log(booleanoFalse)

console.log(10 < 15) // true

console.log( 0 < -15 ) // false

// Null & undefined -> Ausencia de valor significativo

let nombreDelMejorEstudiante = null;

console.log(nombreDelMejorEstudiante)

let variableSinIniciar;
console.log(variableSinIniciar)

variableSinIniciar = "un valor"

console.log(variableSinIniciar)

//typeOf

console.log(typeof(100))
console.log(typeof("100"))
console.log(typeof( 5 < 6 ))
console.log(typeof(10 - null))