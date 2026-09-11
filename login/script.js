let btn = document.getElementById("btn")
let mensaje = document.getElementById("mensaje")
let usuario = document.getElementById("usuario")
let contraseña = document.getElementById("contraseña")
let mostrarContraseña = document.getElementById("mostrarPassword");

mostrarContraseña.addEventListener("click", function() {

    if (contraseña.type == "password") {
        contraseña.type = "text";
    } else {
        contraseña.type = "password";
    }

});




btn.addEventListener("click", alerta)

function alerta() {
    if (
        (usuario.value == "juan" && contraseña.value == "1234") || 
        (usuario.value == "william" && contraseña.value== "4321") 
       )
    {

        mensaje.innerHTML = "Acceso permitido";
        mensaje.className = "exito";

    } else {

        mensaje.innerHTML = "Usuario o contraseña incorrectos";
        mensaje.className = "error";

    }
}