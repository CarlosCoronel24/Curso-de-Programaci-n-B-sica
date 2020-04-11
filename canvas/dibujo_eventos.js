//Boton y Cuadro de texto
var CuadroTexto  = document.getElementById("texto_lineas");
var boton = document.getElementById("Button_lineas");
var Borrador = document.getElementById("Boton_borrar");

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

//Sacar el ancho de canvas con su atributo
var ancho = d.width;
//Lineas a dibujar
var lineas = 0;

//variables para el ciclo
var xFinalCiclo = 0;
var yIncialCiclo = 0;

MarcoCanvas();

//Escuchador de eventos para el click
boton.addEventListener("click",EventoClick);
Borrador.addEventListener("click",EventoBorrar);

//Funcion del click
function EventoClick()
{
    //variable del contador
    var k = 0;

    /*Para tomar el valor del cuadro de texto
        1. parseInt: convierte en entero el valor.
        2. Guardamos el valor del texto en la variable CuadroTexto.
        3. Pasamos el valor de la variable  CuadroTexto a la variable lineas.
    */
    lineas  = parseInt(CuadroTexto.value);

    //ciclo while
    while(k < lineas)
    {
        //formula para las lineas
        NumeroLineas = ancho/lineas;
     
        yIncialCiclo = NumeroLineas * k;
        xFinalCiclo = NumeroLineas * (1 + k);
    
        dibujarLinea("blue",0,yIncialCiclo,xFinalCiclo,300);
        dibujarLinea("blue",300,yIncialCiclo,xFinalCiclo,0);
        console.log("Iteracion del ciclo :" + k);
        console.log("Valor de X Final :" + xFinalCiclo);
        console.log("Valor de Y Inicial :" + yIncialCiclo);
    
        k++
        //o tambien 
        //k = k + 1;
    }
    /*
    //do while
    do
    {
        yIncialCiclo = 10 * k;
        xFinalCiclo = 10 * (1 + k);
    
        dibujarLinea("blue",0,yIncialCiclo,xFinalCiclo,300);
        dibujarLinea("blue",300,yIncialCiclo,xFinalCiclo,0);
        console.log("Iteracion del ciclo :" + k);
        console.log("Valor de X Final :" + xFinalCiclo);
        console.log("Valor de Y Inicial :" + yIncialCiclo);   
    
        k++
    }
    while(k < lineas)
    
    //ciclo for
    for( k = 0 ; k < lineas ; k = k + 1)
    {
        yIncialCiclo = 10 * k;
        xFinalCiclo = 10 * (1 + k);
    
        dibujarLinea("blue",0,yIncialCiclo,xFinalCiclo,300);
        dibujarLinea("blue",300,yIncialCiclo,xFinalCiclo,0);
        console.log("Iteracion del ciclo :" + k);
        console.log("Valor de X Final :" + xFinalCiclo);
        console.log("Valor de Y Inicial :" + yIncialCiclo);
    }*/
}

function EventoBorrar()
{
   lienzo.clearRect(0,0,d.width,d.height);
   MarcoCanvas();
}

function MarcoCanvas()
{
    //Marcos del canvas 
    dibujarLinea("blue",1,299,299,299)
    dibujarLinea("blue",299,299,299,1)
    dibujarLinea("blue",1,1,1,299)
    dibujarLinea("blue",299,1,1,1)
}

//xinicial y yinicial: es donde comienza a pintar el lapiz.
//xfinal y yfinal: es donde termina de pintar el lapiz.
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
