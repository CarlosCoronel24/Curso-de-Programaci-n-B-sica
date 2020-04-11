var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

//vamos a poner una linea cada 10 pixeles y el canvas es de 300 entonces seran 30 lineas.
var lineas = 30;
//variable del contador
var k = 0;

//variables para el ciclo
var xFinalCiclo = 0;
var yIncialCiclo = 0;


//ciclo while
while(k < lineas)
{
    yIncialCiclo = 10 * k;
    xFinalCiclo = 10 * (1 + k);

    dibujarLinea("blue",0,yIncialCiclo,xFinalCiclo,300);
    dibujarLinea("blue",300,yIncialCiclo,xFinalCiclo,0);
    console.log("Iteracion del ciclo :" + k);
    console.log("Valor de X Final :" + xFinalCiclo);
    console.log("Valor de Y Inicial :" + yIncialCiclo);

    k++
    //o tambien 
    //k = k + 1;
}

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
}


//Marcos del canvas 
dibujarLinea("blue",1,299,299,299)
dibujarLinea("blue",299,299,299,1)
dibujarLinea("blue",1,1,1,299)
dibujarLinea("blue",299,1,1,1)


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
