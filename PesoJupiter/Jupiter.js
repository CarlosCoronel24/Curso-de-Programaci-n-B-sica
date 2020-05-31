'use strict'
// Declarando variables
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var gravedad = 0;
var Planeta = "";
var jupiter = "";
var marte = "";

// Listener para cuando se de click en el boton
BotonCalcular.addEventListener('click',TomandoDatos)

// Funcion donde saca los datos
function TomandoDatos(){

    var peso = "";
    var jupiter = "";
    var marte = "";

    //declarando Variables
    var usuario = document.getElementById("PesoProporcionado");
    var peso = parseFloat(usuario.value); // Convirtiendo en numero entero
    
    var jupiter = document.getElementById("jupiter");
    var marte = document.getElementById("marte");
    
    //validamos la opcion
    if(jupiter.checked == true)
    {
        gravedad = g_jupiter;
        Planeta = "jupiter";
    }
    else if (marte.checked == true)
    {   
        gravedad = g_marte; 
        Planeta = "marte";
    }
    else
    {
        alert("Favor de proporcionar una opcion correcta.");
    } 

    console.log("El valor del peso es: " + peso);  
    console.log("El valor de planeta es: " + Planeta);

    //Mandando a llamar la funcion 
    CalcularDatos(peso,Planeta)
}


// Funcion donde calcula la información
function CalcularDatos(peso,Planeta){

        var peso_final = 0;
        console.log("El valor del peso es: " + peso);  
        console.log("El valor de planeta es: " + Planeta);     
        
        while(peso <= 0 || isNaN(peso))
        {
            alert("Favor de proporcionar un numero valid para calcular el peso!");
            //importante recordar que siempre que uno pide un dato este lo marca como caracter por eso se utilzia parceInt
            var peso = parseInt(prompt("Favor de proporcionar un peso valido para realizar el calculo!."));
        }

        //Ecuacion del codigo
        peso_final = (peso * gravedad) / g_tierra;
        peso_final = parseInt(peso_final);

        Resultado.innerHTML += "<h1>Tu peso en " + Planeta + " es <strong> " + peso_final + " kilos.     </strong></h1>";
        //document.write("Tu peso en " + Planeta + " es <strong>" + peso_final + " kilos </strong>");   


}
