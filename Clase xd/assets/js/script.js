console.log("Hola Mundo");

let nombreV = "";
let apellidoV = "";
/* let edadV = 0; */

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
/* let edad = document.getElementById("edad"); */

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar .addEventListener("click", (e) => {
    e.preventDefault();
    nombreV = nombre.value;
    apellidoV = apellido.value;
    edadV = edad.value;

    if(nombreV === ""){
        alert("Falta Nombre")
        return;
    };

    if(apellidoV === ""){
        alert("Falta Apellido")
        return;
    };

    if(edadV === ""){
        alert("Falta Edad")
        return;
    };

    console.log("Nombre " +nombreV+ " Apellido " +apellidoV+ " Edad "+edadV);

});