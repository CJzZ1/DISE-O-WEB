# Mi Práctica con React.js: Aprendiendo las Bases

En este repositorio comparto mis primeros dos ejercicios prácticos para comprender y aplicar los fundamentos de React.js: el uso de propiedades (props) y el manejo de estados locales utilizando el hook `useState`.

---

## 📦 Ejemplo 1: Mi Componente con Props (`TarjetaProducto.jsx`)

### Explicación del problema que identifiqué
Noté que en el desarrollo web tradicional, si quería mostrar un catálogo con varios productos, tenía que copiar y pegar el mismo código HTML una y otra vez para cada elemento, cambiando los datos a mano. Me di cuenta de que esto hace que los archivos sean larguísimos, difíciles de mantener y muy propensos a que me equivoque al escribir o actualizar una etiqueta.

### Breve análisis de cómo estructuré mi funcionamiento
Para solucionarlo, decidí diseñar este componente para que funcione como una plantilla o molde reutilizable. Creé una función llamada `TarjetaProducto` que recibe un parámetro con el nombre de `props`. En lugar de escribir un texto fijo en el código, le ordené a React que pinte lo que reciba dinámicamente dentro de variables como `props.nombre` o `props.precio`. Así, uso el mismo molde y solo le paso datos distintos según el producto que necesito mostrar.

### Resultado que espero obtener
Al ejecutar el proyecto en mi navegador, espero ver una tarjeta de producto limpia con su imagen, título, categoría y precio bien ordenados, demostrando que puedo reutilizar código eficientemente sin duplicar HTML.

---

## 🛒 Ejemplo 2: Mi Estado Interactivo (`CarritoInteractivo.jsx`)

### Explicación del problema que identifiqué
Antes, con JavaScript tradicional, si yo quería cambiar un número en la pantalla cuando el usuario hacía clic en un botón, tenía que buscar el elemento de forma manual en el HTML usando su ID y modificarlo a la fuerza. Aprendí que esto se vuelve muy enredado y genera fallos a medida que la interfaz de la página se vuelve más grande y compleja.

### Breve análisis de cómo estructuré mi funcionamiento
En este ejercicio utilicé la herramienta `useState(0)` de React para indicarle al sistema que guarde un número en la memoria del navegador que comience valiendo cero. Programé dos botones que escuchan el evento `onClick`. Al hacer clic en ellos, se activan mis funciones que actualizan el valor de la variable de estado. Gracias a esto, React detecta el cambio automáticamente y redibuja en la pantalla el nuevo número de forma inmediata.

### Resultado que espero obtener
Espero que al interactuar con los botones en el navegador, el contador aumente o disminuya en tiempo real sin que la página web sufra parpadeos ni tenga que recargarse por completo. Además, agregué una condición lógica básica para asegurar que el carrito nunca muestre números negativos si sigo presionando el botón de quitar.
