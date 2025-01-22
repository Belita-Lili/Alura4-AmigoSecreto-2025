// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el nombre del amigo del input
    let nombre = document.getElementById("amigo").value.trim();

    // Verificar si el nombre no está vacío
    if (nombre !== "") {
        amigos.push(nombre); // Añadir el nombre al array de amigos
        document.getElementById("amigo").value = ""; // Limpiar el campo de texto
        actualizarLista(); // Actualizar la lista en la página
    }
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos amigos

    amigos.forEach(function(amigo) {
        let li = document.createElement("li"); // Crear un nuevo elemento de lista
        li.textContent = amigo; // Asignar el nombre al elemento
        lista.appendChild(li); // Agregar el elemento a la lista
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
        let amigoSeleccionado = amigos[indice]; // Obtener el nombre del amigo seleccionado
        mostrarResultado(amigoSeleccionado); // Mostrar el resultado
    } else {
        mostrarResultado("No hay amigos para sortear."); // Mensaje si no hay amigos
    }
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar el resultado anterior

    let li = document.createElement("li"); // Crear un nuevo elemento de lista
    li.textContent = "El amigo seleccionado es: " + amigo; // Asignar el resultado
    resultado.appendChild(li); // Agregar el resultado a la lista de resultados
}
