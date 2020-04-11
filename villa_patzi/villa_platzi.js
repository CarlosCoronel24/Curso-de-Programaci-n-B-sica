'use strict'

// id Canvas
var vp = document.getElementById("Villaplatzi");
var granja = vp.getContext("2d");

//objeto fondo
var Fondo = {
    url: "tile.png",
    cargaOK: false
}

//objeto vaca
var vaca = {
    url: "vaca.png",
    cargaOK: false
};

//objeto cerdo
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}

//objeto pollo
var pollo = {
    url: "pollo.png",
    cargaOK: false
}

//Clase del objeto imagen (Image) - DIBUJAR FONDO
Fondo.imagen = new Image();
Fondo.imagen.src = Fondo.url;
//Primero llamamos la funcion CargarFondo para que el fondo siempre quede detras de las imagenes (VACA,POLLO,CERDO)
Fondo.imagen.addEventListener("load", CargarFondo);

//Clase del objeto imagen (Image) - DIBUJAR VACA
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",CargarVaca);

//Clase del objeto imagen (Image) - DIBUJAR CERDO
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",CargarCerdo);

//Clase del objeto imagen (Image) - DIBUJAR CERDO
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",CargarPollo);

//Funcion para validar que la carga del fondo se haya realizado  
function CargarFondo()
{
    Fondo.cargaOK = true;
    Dibujar();
}
//Funcion para validar que la carga de la vaca se haya realizado  
function CargarVaca()
{
    vaca.cargaOK = true;
    Dibujar();
}

//Funcion para validar que la carga de la vaca se haya realizado  
function CargarCerdo()
{
    cerdo.cargaOK = true;
    Dibujar();
}

//Funcion para validar que la carga de la vaca se haya realizado
function CargarPollo()
{
    pollo.cargaOK = true;
    Dibujar();
}

//Funcion para dibujar
function Dibujar()
{
    //Dibujar el fondo
    if(Fondo.cargaOK == true)
    {
        granja.drawImage(Fondo.imagen,0,0);
    }


    if(vaca.cargaOK == true)
    {
        //Mandamos a llamar a la funcion para que no de de 5 a 15 vacas
        var CantidadVacas = NumerosAleatoreos(1,10);
        console.log("Numero de vacas: " + CantidadVacas);
        //Ciclo for para que dibuje vacas
        for(var v = 0; v < CantidadVacas; v++)
        {
            //Ecuacion para generar numeros aleatoreos y que no se sobre pongan tanto las imagenes
            var x = NumerosAleatoreos(0,7)
            var y = NumerosAleatoreos(0,7)
            var x = x * 60;
            var y = y * 60;
            granja.drawImage(vaca.imagen,x,y);
        }
    }

    if(cerdo.cargaOK == true)
    {
        var CantidadCerdos = NumerosAleatoreos(1,10);
        console.log("Numero de cerdos: " + CantidadCerdos);
        //Ciclo for para que dibuje Cerdos
        for(var c = 0; c < CantidadCerdos; c++)
        {
            //Ecuacion para generar numeros aleatoreos y que no se sobre pongan tanto las imagenes
            var x = NumerosAleatoreos(0,7)
            var y = NumerosAleatoreos(0,7)
            var x = x * 60;
            var y = y * 60;
            granja.drawImage(cerdo.imagen,x,y);
        }
    }

    if(pollo.cargaOK == true)
    {
        var CantidadPollos = NumerosAleatoreos(1,10);
        console.log("Numero de pollos: "+ CantidadPollos);
        for(var p = 0; p < CantidadPollos; p++)
        {
            //Ecuacion para generar numeros aleatoreos y que no se sobre pongan tanto las imagenes
            var x = NumerosAleatoreos(0,7)
            var y = NumerosAleatoreos(0,7)
            var x = x * 60;
            var y = y * 60;
            granja.drawImage(pollo.imagen,x,y);
        }
    }
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