### README - Juego del **Amigo Secreto** 🎁

Este proyecto es una aplicación web interactiva que permite agregar amigos a una lista y posteriormente sortear aleatoriamente a uno de ellos, ideal para organizar un **Amigo Secreto** de forma rápida y divertida.

---

## 🚀 Características
✅ Agregar amigos a una lista.  
✅ Visualizar en tiempo real la lista de amigos agregados.  
✅ Función para sortear aleatoriamente a uno de los amigos de la lista.  
✅ Interfaz amigable con un diseño atractivo.  

---

## 📋 Instrucciones de Uso

### 1. **Clonar el repositorio**
```bash
git clone https://github.com/ErickGonzalezF/amigoSecreto.git
cd /amigoSecreto
```

### 2. **Abrir el archivo `index.html`**  
Utiliza tu navegador web favorito para visualizar la interfaz.

### 3. **Agregar amigos a la lista**
- Escribe el nombre de un amigo en el campo de texto.  
- Haz clic en el botón **"Añadir"** para agregarlo a la lista.  

### 4. **Sortear un amigo**
- Haz clic en el botón **"Sortear amigo"**.  
- Se mostrará en pantalla el nombre del amigo seleccionado de forma aleatoria.  

---

## 🖥️ Estructura del Proyecto
```
/proyecto-amigo-secreto
 ├── index.html
 ├── style.css
 ├── app.js
 └── assets
     ├── amigo-secreto.png
     └── play_circle_outline.png
```

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
        alert("Agrega primero amigos");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = `🎉 ${amigos[indiceAleatorio]} 🎉`;
    }
}
```

---

## 🎨 Estilo Visual
El proyecto utiliza la fuente **Inter** y **Merriweather**, proporcionando una estética moderna y limpia. Además, incluye imágenes para mejorar la experiencia visual del usuario.

---

## 🧩 Mejoras Futuras
🔹 Agregar opción para eliminar amigos de la lista.  
🔹 Permitir múltiples sorteos sin repetir nombres.  
🔹 Incluir una función para reiniciar la lista.  

---

## 📄 Licencia
Este proyecto es de código abierto y puede ser utilizado libremente.  
