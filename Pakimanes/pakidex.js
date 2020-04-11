//Creando una Clase para los pakimanes y crear los objetos
class Pakiman
{
    //Funciona igual que una funcion
    constructor(n , v , a)
    {
        //this es un indicador de la estancia en donde estoy
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        //Agregando un hijo a la clase para mostrar los pakimanes
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<hr />");
    }
}