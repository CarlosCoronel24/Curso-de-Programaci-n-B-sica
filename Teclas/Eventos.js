var Cuadrito = document.getElementById("area_de_dibujo");
var Papel = Cuadrito.getContext("2d");

//En esta posicion del canvas comienza el dibujo
var x = 150;
var y = 150;

//Variables para las teclas de las flechas
var Teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(Teclas);

document.addEventListener("keyup",DibujarTeclado);

//Funcion para dibujar en el teclado
function DibujarTeclado(evento)
{   
    var colorcito = "blue";
    var movimiento = 10;
    //Switch para las teclas de las flechas
    switch(evento.keyCode)
    {
        case Teclas.DOWN:
                dibujarLinea(colorcito,x,y,x,y + movimiento,Papel);
                y = y + movimiento;
        break;

        case Teclas.UP:
                dibujarLinea(colorcito,x,y,x,y - movimiento,Papel);
                y = y - movimiento;
        break;

        case Teclas.LEFT:
                dibujarLinea(colorcito,x,y,x - movimiento,y,Papel);
                x = x - movimiento;
        break;

        case Teclas.RIGHT:
                dibujarLinea(colorcito,x,y,x + movimiento,y,Papel);
                x = x + movimiento;
        break;
    }
}

//dibujarLinea("Blue",100,150,200,250,Papel);

//xinicial y yinicial: es donde comienza a pintar el lapiz.
//xfinal y yfinal: es donde termina de pintar el lapiz.
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}