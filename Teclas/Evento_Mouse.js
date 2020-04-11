//Buscando el Id
var Cuadrito = document.getElementById("area_de_dibujo");
var Papel = Cuadrito.getContext("2d");

//En esta posicion del canvas comienza el dibujo
var x;
var y;

//Declaramos esta variable para saber cuando el usuario esta presionando el mouse para dibujar de tipo (BOOLEANO)
var EstoyDibujando = false;



//addEventListener cuando el usuario da click para comenzar a dibujar
document.addEventListener('mousedown', evento => {
    EstoyDibujando = true // como se dio el evento del click entonces se cambia a true 
    x = evento.x;
    y = evento.y;
    DibujandoConMouse(evento);
    console.log("click");
});

//addEventListener cuando el usuario dejo de hacer click para dejar de dibujar
document.addEventListener('mouseup', evento => {
    EstoyDibujando = false; // dejo de hacer click entonces se cambia a falso
    DibujandoConMouse(evento);
});

//Detectar el click
function DibujandoConMouse(evento){
    if(evento.target.id === 'area_de_dibujo'){
        console.log("hago click en canvas");
        document.addEventListener('mousemove',DibujarMovimientoMouse);
    }
}

//Detectar el movimiento
function DibujarMovimientoMouse(evento){
    var ColorLinea = "green";
    if(evento.target.id === 'area_de_dibujo' && EstoyDibujando){
        console.log("Envio parametros para dibujar");
        dibujarLinea(ColorLinea,evento.x - 2, evento.y - 2,evento.x + 2,evento.y + 2,Papel)
    }

}

//xinicial y yinicial: es donde comienza a pintar el lapiz.
//xfinal y yfinal: es donde termina de pintar el lapiz.
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 4;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//addEventListener para el boton Borrador
Borrador.addEventListener('click',BorrarCanvas);

//Funcion para borrar
function BorrarCanvas(){
    Papel.clearRect(0,0,Cuadrito.width,Cuadrito.height);
}

