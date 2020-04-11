    //array para las imagenes (diccionario)
    var imagenes = [];
    imagenes["Tocinauro"] = "cerdo.png";
    imagenes["Pokacho"] = "pollo.png";
    imagenes["Cauchin"] = "vaca.png";



//console.log(cauchin,pokacho,tocinauro);
//coleccion es la estancia que manda llamar la clase pakiman
var coleccion = [];
/* NOTA: Array: es como una cadena de variables
nombredelarray.push(); <--- Coloca una variable nueva al final de array
Los Arrays comienzan desde el 0, osea que lo que nosotros veriamos como la posicion 1 seria en el array nombredelarray[0];*/
coleccion.push( new Pakiman("Cauchin", 100 , 30));
coleccion.push(new Pakiman("Pokacho", 80 , 50));
coleccion.push( new Pakiman("Tocinauro", 120 , 40));

console.log(coleccion);

//Ciclo para mostrar los objetos del array
for(var coronel of coleccion)
{
    coronel.mostrar();
}