//Comentario de una sola linea 

/*Comentario multilinea*/

alert("Hola mundo")

//alumno seria variable 
let alumno = "fede" //cuando creo una variable nueva es let, no se puede crear dos veces la misma variable, si usamos var para crear una nueva variable, no te avisa si la estas creando dos veces
let nota = 9
// si es numero lo reconoce, si es texto entre comillas 

alumno="emiliano" //le cambio el contenido a la variable 

//si quiero ver que contenido tiene la variable, lo que hago es ver con console
console.log("el nombre del alumno es" + alumno + "y su nota es " + nota)
//para escribir un texto para mostrar entre comillas y para concatenar el "+"

//en java el ";" es opcional


//si quiero que algo no cambie, defino la constante 
const entidad ="Gobierno ciudad"

//no importa que yo quiera rescribir la variable, va a mantenerse constante. 



let nombreApellido = "Juan Batman"
let User = "Juan Carlos"
let _usuario = "celita"
let $nombre
let nombre_apellido
let NombreYApellido 

//estas son varias formas de declarar variables
//no podes empezar con numeros y con guion en el medio, con palabras reservadas: var break this 


//Tipos de datos 
////String 
let str1 = " String con comillas dobles "
let str2 = 'String con comillas simples'
let str3 = ` son los backticks - ALT + 96 ` 


//Esto es para mostrar un concatenado
let str4 = str1 + "y" + str2
console.log(str1 + "y" + str2)

//se usan los backsticks para no concatenar con +
let str5 = `${str1} y ${str2}`


//STR4 y STR5 son lo mismo 
console.log (str4)
console.log (str5)

////Number
//Todo lo que yo le mande es number, no importa si es entero, decimal, largo, corto

let num1 = 2
let num2 = 3.14

//operaciones basicas 

console.log (num1 + num2)

let suma1 = num1 + num2
console.log ("La suma es" + suma1)

let resta = num1 - num2
let mult = num1*num2
let division = num1/num2
console.log ("La resta es" + resta)
console.log ("La multiplicacions es" + mult)
console.log ("la division es:" + division)

//para que ingrese el valor el usuario uso PROMPT 

let num3 = prompt ("Escribe el tercer numero")
let num4 = prompt ("Escribe el cuarto numero")
let suma2 = num3 + num4
console.log ("La suma es" + suma2)

// que pasa, el resultado que me da si yo hago esto es una concatenacion porque prompt es string, lo que yo tengo que hacer es parsear a numeros 
let num5 = parseInt( prompt("escribe el 5"))
let num6 = parseInt(num4)
let suma3 = num5 + num6
console.log("La suma es" + suma3)

//Con parseInt vas a numeros enteros, con parseFloat toma los decimales 
let num7 = parseInt( prompt("escribe el 6"))
let num8 = 3.25749
let suma4 = num7 + num8
console.log("La suma es" + suma4)

//Esto es una interpolacion para escribir en el documento desde java script
document.write("<h1>Titulo</h1>")

/*
El alert te tira un pop out 
El console te lo tira en la consola y 
document.write aparece en el documento*/










