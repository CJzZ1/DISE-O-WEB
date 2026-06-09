$(document).ready(function() {

    $("#formularioMatricula").on("submit", function(event) {
        
        event.preventDefault();

        let nombreEstudiante = $("#nombre").val();
        let edadEstudiante = parseInt($("#edad").val());
        let cantidadCursos = parseInt($("#cursos").val());

        const COSTO_POR_CURSO = 50; 

        let mensajeResultado = "";

        if (edadEstudiante >= 18) {
            
            let costoTotal = cantidadCursos * COSTO_POR_CURSO;

            mensajeResultado = "<strong>¡Registro Exitoso!</strong><br>" +
                               "Estudiante: " + nombreEstudiante + "<br>" +
                               "Cursos inscritos: " + cantidadCursos + "<br>" +
                               "Total a pagar: $" + costoTotal + " USD.";
            $("#resultado")
                .html(mensajeResultado)
                .css({
                    "background-color": "#c6f6d5",
                    "color": "#22543d",
                    "border": "1px solid #9ae6b4"
                })
                .fadeIn(); 

        } else {
            mensajeResultado = "<strong>Error en el registro:</strong> El estudiante " + nombreEstudiante + " es menor de edad (" + edadEstudiante + " años). Requiere la presencia de un representante legal.";

            $("#resultado")
                .html(mensajeResultado)
                .css({
                    "background-color": "#fed7d7",
                    "color": "#742a2a",
                    "border": "1px solid #feb2b2"
                })
                .fadeIn();
        }

    });

});