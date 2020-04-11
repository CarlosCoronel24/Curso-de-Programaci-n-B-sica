'use strict'

// hacer que el cajero reste la cantidad por si alguien quiere hacer un segun retiro
// mostrar imagenes de los billetes
// optimizar el codigo

var papeles = 0;
var RestanteDivision = 0;

var Resultado = document.getElementById("resultado");

//addEventListener para Mandar a llamar la funcion para entregar el dinero
var LlamarFuncion = document.getElementById("ExtraerDinero");
LlamarFuncion.addEventListener("click",EcuacionCajero);

//Funcion para sacar las cuentas del cajero
function EcuacionCajero()
{   
    //Sacamos el valor del dinero solicitado por el usuario
    var DineroUsuario = document.getElementById("Dinero_Usuario");
    //Declaramos la variable y cambiamos su valor a int
    var Dinero = 0;
    Dinero = parseInt(DineroUsuario.value);
    
    //ECUACION MATEMATICA CAJERO
    for(var Billetes of caja)
    {
        if (Dinero > 0)
        {   
            //Sacando La Cantidad de billetes que se necesita para la cantidad solicitada
            //El método floor () redondea un número HACIA ABAJO al 
            //entero más cercano y devuelve el resultado
            RestanteDivision = Math.floor(Dinero / Billetes.valor);

            //Validando cuantos Billetes nos quedan
            if(RestanteDivision > Billetes.cantidad)
            {
                papeles = Billetes.cantidad;
            }
            else
            {
                papeles = RestanteDivision;
            }

            //Guardando en el array la cantidad de billetes a entregar
            EntregandoBilletes.push(new Billete(Billetes.valor, papeles));
            //Restamos el valor de los billetes a la cantidad a retirar
            Dinero = Dinero - (Billetes.valor * papeles);
        }
    }

    //si sobra dinero (falta por entregar) manda el mensaje
    if(Dinero > 0)
    {
        Resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :( <br />";
    }
    else
    {
        for(var entregado of EntregandoBilletes)
        {
            if(entregado.cantidad > 0)
            {
                Resultado.innerHTML += entregado.cantidad + " Billetes de $" + entregado.valor + "<br />";                
            }
        }
    }
}


/******************************************************************
*******************************************************************
******************************************************************/


//Clase Billete
class Billete
{
    //Para determinar el valor y la cantidad de billetes que tengamos
    constructor(v,c)
    {
        this.valor = v; // Valor del billete
        this.cantidad = c; // Cantidad de billetes
    }
}

//Array de la caja para los billetes
var caja = [];
//Agregando billetes (Valor del billete / Cantidad de billestes)
caja.push(new Billete(50, 5));
caja.push(new Billete(20, 3));
caja.push(new Billete(10, 3));

//Array con los billetes que se le entregan al usuario
var EntregandoBilletes = [];