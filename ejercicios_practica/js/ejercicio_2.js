"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda
console.log(texto1.localeCompare(texto2));
console.log(texto2.localeCompare(texto1));






const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda
if(copiaTexto1===texto1){
    console.log(copiaTexto1 + "es igual a" + texto1) 
}else{
    console.log(copiaTexto1 + "no es igual a" + texto1) 
}
// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
if( copiaTexto1===texto2){
    console.log(copiaTexto1 + "es iguala" + texto2)
}else{
    console.log(copiaTexto1 + "es distinto" + texto2)
}