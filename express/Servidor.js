
//Libreria express para guardarlo en una variable
var express = require("express");
//mandar a llamar la libreria
var aplicacion  = express();

//aplicacion.get funciona igual que un addEventListener
// "/" <<-- el home
aplicacion.get("/", inicio);
aplicacion.get("/Cursos", Cursos);


function inicio(peticion, resultado)
{

    resultado.send("Este es el <strong> home </strong>");
}


function Cursos(peticion, resultado)
{

    resultado.send("Estos son los <strong> Cursos </strong>");
}

aplicacion.listen(8989);