$(document).ready(function() {
  var menuVisible = false;
  var grillaVisible = false;

  $("#toggleRegistro").click(function() {
    var menuRegistro = $("#menuRegistro");

    if (!menuVisible) {
      menuRegistro.show(); // Mostrar el menú de registro si está oculto
    } else {
      menuRegistro.hide(); // Ocultar el menú de registro si ya está visible
    }

    menuVisible = !menuVisible; // Alternar el estado de visibilidad del menú
  });

  $("#toggleGrilla").click(function() {
    var grilla = $(".grilla");

    if (!grillaVisible) {
      grilla.show(); // Mostrar la grilla si está oculta
    } else {
      grilla.hide(); // Ocultar la grilla si ya está visible
    }

    grillaVisible = !grillaVisible; // Alternar el estado de visibilidad de la grilla
  });

  $("#si").click(function() {
      // Mostrar la sección de gustos
    document.getElementById("gustos").style.display = "block";
  });
  

    $("#no").click(function() {
    // Ocultar la sección de gustos
    document.getElementById("gustos").style.display = "none";
  });


  $("#registrar").click(function() {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var fechaNacimiento = $("#fechaNacimiento").val();
    var correo = $("#correo").val();
    var usuario = $("#usuario").val();
    var contrasena = $("#contrasena").val();
    var confContrasena = $("#confpaswd").val();
    var patron = /^[a-zA-Z0-9]+$/;
    var enfermedad = $("#enfermedad").val();

    //validar usuario
    if (!patron.test(usuario)){
      $("#mensaje-error_user").text("El Usuario no debe tener caracteres extraños.");
      $("#mensaje-error_user").show();
      return;
    }

    // Validación de campos
    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      fechaNacimiento.trim() === "" ||
      correo.trim() === "" ||
      usuario.trim() === "" ||
      contrasena.trim() === "" ||
      confContrasena.trim() === ""
    ) {
      alert("Por favor, completa todos los campos."); // Mostrar alerta si hay campos vacíos
      return; // Detener la ejecución de la función si hay campos vacíos
    }

    // Verificar si las contraseñas coinciden
    if (contrasena !== confContrasena || !patron.test(contrasena) || !patron.test(confContrasena)) {
      $("#mensaje-error_cont").text("Las contraseñas no coinciden o tienen caracteres extraños. Por favor, verifica.");
      $("#mensaje-error_cont").show();
      return; // Detener la ejecución de la función si las contraseñas no coinciden
    }

    // Calcular la edad a partir de la fecha de nacimiento
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - new Date(fechaNacimiento).getFullYear();

    // Agregar los datos en la grilla
    var fila =
      "<tr><td>" +
      nombre +
      "</td><td>" +
      apellido +
      "</td><td>" +
      edad +
      "</td><td>" +
      correo +
      "</td><td>" +
      usuario +
      "</td><td>" +
      contrasena +
      "</td><td>" +
      enfermedad +
      "</td></tr>";
    $("#datosGrilla").append(fila);

    // Limpiar los campos de registro
    $("#nombre").val("");
    $("#apellido").val("");
    $("#fechaNacimiento").val("");
    $("#correo").val("");
    $("#usuario").val("");
    $("#contrasena").val("");
    $("#confpaswd").val("");
    $("#enfermedad").val("");
  });
});


  