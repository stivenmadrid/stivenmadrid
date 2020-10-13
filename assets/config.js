'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "EDGAR STIBEN MADRID LONDOÑO",
	profesion: "TECNICO EN SISTEMAS, DESAROLLADOR",
	correo: "stivenmadrid6@gmail.com",
	telefono: "+57 3216499744",
	perfil: "Soy una persona organizada que cumple con los labores y requerimientos que se le exige, capaz de liderar y solucionar problemas rápidamente. poseo valores como la responsabilidad, el respeto, la honestidad, la puntualidad y el trabajo en equipo, me considero una persona con alta facilidad en absorber conocimientos teóricos y prácticos, tengo facilidad para la comunicación y atención al usuario. con el fin de demostrar mis capacidades y conocimientos adquiridos una experiencia laboral.",
	habilidades: {
		comunicativas:['Actitud Positiva, ','Tolerancia, ','Respeto, ','Diálogo Abierto, ','Orden, ','Apoyo'],
		gestion: ['Liderazgo, ' ,'Responsabilidad, ','Estrategico, ',],
		tecnicas: ['Mantenimiento y monitoreo de equipos de cómputo','Manejo de directorio activo','Configuración de switchs','  Soporte de usuario final','Cableado estructurado y dispositivos de red','javascript ','Bases de Datos SQL','Analisis de Datos'],
          
          
           

	},
	hobbies: ['Escuchar Música, ', 'Ver Peliculas, ', 'fotografia, ',]
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://www.ilunionitservices.com/sites/itservices-ilunion.e-fti.com/files/diagnostico_ordenador.jpg";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}