'use strict'
var z;

//Se ejecutara 10 veces y nos retornara 10 numeros aleatoreos entre 10 y 20
for(var i = 0; i < 10; i++ )
{   
    //Mandamos a llamar la funcion para que nos retorne un numero aleatorio
    z = NumerosAleatoreos(10 , 20);
    //Numeros Aletareos
    document.write(z + " ");
}

/*Ecuacion Matematica Para los Numeros Aleatoreos
Math.floor() devuelve el número entero por debajo de los decimales.
Math.random() devuelve un número aleatorio de 0 a 0.999..*/
function NumerosAleatoreos(minimo,maximo)
{
    var Resultado;
    Resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return Resultado;
}