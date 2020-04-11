/*Un programa que me de los numeros divisibles entre 3  (fizz) y 5 (buzz) y que muestre (fizzbuzz) 
cuando los dos sean divisibles*/
'use strict'

//Accion para empezar a calcular
BotonCalcular.addEventListener('click',TomarDatos)

//Funcion para comenzar a tomar los datos de el html por sus id's
function TomarDatos()
{
    //Tomando los datos de los id's
    var NumeroFizz = document.getElementById("Fizz");
    var NumeroBuzz = document.getElementById("Buzz");
    var NumeroTope = document.getElementById("NumeroTope");

    //Convirtiendolos en Enteros
    NumeroFizz = parseInt(NumeroFizz.value);
    NumeroBuzz = parseInt(NumeroBuzz.value);
    NumeroTope = parseInt(NumeroTope.value);
    
    CalcularDatos(NumeroFizz,NumeroBuzz,NumeroTope);
}

//Funcion con la ecuacion matematica para calcular
function CalcularDatos(NumeroFizz,NumeroBuzz,NumeroTope)
{
    console.log(NumeroFizz);
    console.log(NumeroBuzz);
    console.log(NumeroTope);

    var mensaje = "";

    //Ecuacion
    for(var i = 1; i <= NumeroTope; i++)
    {
        if(i % NumeroFizz == 0 && i % NumeroBuzz== 0)
        {
            mensaje = " es divisible entre los dos numeros FIZZBUZZ!.";
        }
        else if(i % NumeroFizz == 0)
        {
            mensaje = " es divisible entre el primero numero FIZZ!.";
        }
        else if (i % NumeroBuzz == 0) 
        {
            mensaje = " es divisible entre el segundo numero BUZZ!.";
        } 
        else
        {
            mensaje = " no es divisible con los numeros proporcionados."
        }
        //Para mostrar el resultado en pantalla
        document.write("El numero " + i + mensaje + "<br><br>");
    }
}




