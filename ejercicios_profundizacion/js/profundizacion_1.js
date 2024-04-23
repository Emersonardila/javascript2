"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.
let numero1=parseInt(prompt("ingresa un numero"));
let numero2=parseInt(prompt("ingresa otro numero"));
if(numero1 > 0){
    console.log("numero 1 es +")
} else if  ( numero1 < 0){
    console.log(" numero 1 es = a 0")
}
if(numero2 > 0){
    console.log("numero 2 es +")
} else if ( numero2 < 0){
    console.log(" numero 2 es = a 0")
}