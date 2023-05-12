function cambiarTitulo(event){

    //capturo el valor cargado en el input
    let input = document.querySelector('#entrada').value


    //referencia al h1 con id titulo y cambio su valor con innerhtml
    document.querySelector('#titulo').innerHTML = input
}


function crearItemTabla(event){
    let input = document.getElementById("entrada").value;
    let tabla = document.getElementById("tabla");

    const fila = document.createElement("tr");
    const celdas = document.createElement("td");

    celdas.innerHTML = input;

    fila.appendChild(celdas);

    tabla.appendChild(fila);

}




//funcion que espera que carge toda la estructura html para ejecutarse

window.onload = function(){

//acceder al boton con id crear y asigno un evento de click 
//para llamar a una funcion
let elboton = document.querySelector('#crear');
elboton.addEventListener("click",crearItemTabla);

}