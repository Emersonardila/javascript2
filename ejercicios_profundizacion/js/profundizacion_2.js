"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.
let numero01=parseInt(prompt("ingresa el primer numero entero"))
let numero02=parseInt(prompt("ingresa el segundo numero entero"))
let numero03=parseInt(prompt("ingresa el tercer numero entero"))
if(numero01 % 2 == 0){
    console.log("el numero" + numero01 + "es par")
}else{
    console.log("el numero" + numero01 + "es impar")
}

if(numero02 % 2 == 0){
    console.log("el numero" + numero02 + "es par")
}else{
    console.log("el numero" + numero02 + "es impar")
}

if(numero03 % 2 == 0){
    console.log("el numero" + numero03 + "es par")
}else{
    console.log("el numero" + numero03 + "es impar")
}