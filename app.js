let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let valor = input.value.trim();
    
    if (valor === '') {
        alert('Ingresar un Nombre Válido');
    } else {
        amigos.push(valor);
        input.value = "";
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo (){
    if (amigos == "") {
        alert("agrega primero amigos")
    } else {
        let indiceAleatorio = Math.floor(Math.random()*amigos.length)
        document.getElementById("resultado").innerHTML = amigos[indiceAleatorio]
    }
}
