### README - Juego para Sortear Amigos 🎯

Este proyecto es una sencilla aplicación web que permite agregar amigos a una lista y posteriormente sortearlos de forma aleatoria.

---

## 🚀 Características
- Agregar nombres de amigos a una lista.
- Visualizar en tiempo real la lista de amigos agregados.
- Función para realizar un sorteo aleatorio entre los amigos.

---

## 📋 Instrucciones de Uso

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/ErickGonzalezF/amigoSecreto.git

   ```

2. **Abrir el archivo `index.html`** en tu navegador preferido.

3. **Agregar amigos a la lista**
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón "Agregar Amigo".
   - El nombre se añadirá a la lista que se muestra debajo.

4. **Sorteo de amigos**
   - (Si deseas agregar esta función) Incluye un botón para "Sortear Amigo".
   - Al hacer clic en este botón, se seleccionará aleatoriamente uno de los amigos agregados.

---

## 🛠️ Código Destacado

### JavaScript - Lógica del Juego
```javascript
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

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.innerHTML = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega amigos antes de sortear.');
    } else {
        let ganador = amigos[Math.floor(Math.random() * amigos.length)];
        alert(`🎉 El amigo sorteado es: ${ganador} 🎉`);
    }
}
```

---

## 🖥️ Estructura del Proyecto
```
/proyecto-sorteo
 ├── index.html
 ├── style.css
 └── script.js
```

---

## 📄 Licencia
Este proyecto es de código abierto y puede ser utilizado libremente. 

---

¡Disfruta del juego y que gane el mejor amigo! 🏆