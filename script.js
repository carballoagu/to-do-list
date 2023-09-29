
//tomamos los elementos 
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");

//variable ue lleva todos los elementos 
var total = 0;

btn.onclick = function (){
    // Controlamos si el campo esta vacio
    if (inputTarea.value ==""){
        return;
    }
    // Tomamos el valor del campo 
    var elemento = inputTarea.value;
    // Creo un elemento li 
    var li = document.createElement("li");
    li.textContent = elemento;
    // agrego li al listado
    listado.appendChild(li);

    total ++ ;
    cantidad.innerHTML = total;

    // agregamos el boton eliminar a cda elemento li
    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);


    //agregamos la funcionalidad que elimina a la tarea del listado
    btnEliminar.onclick = function(){
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    // Limpiamos el campo input
    inputTarea.value = "";





}