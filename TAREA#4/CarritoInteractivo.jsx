import React, { useState } from 'react';

export function CarritoInteractivo() {
  // Guardamos un número en memoria que empieza en 0
  const [cantidad, setCantidad] = useState(0);

  // Función para sumar 1
  function presionarAgregar() {
    setCantidad(cantidad + 1);
  }

  // Función para restar 1 (sin bajar de cero)
  function presionarQuitar() {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div>
      <h2>🛒 Mi Carrito</h2>
      <p>Productos en el carrito: <b>{cantidad}</b></p>
      
      {/* Al hacer clic, llamamos a nuestras funciones */}
      <button onClick={presionarAgregar}>Agregar uno</button>
      <button onClick={presionarQuitar}>Quitar uno</button>
    </div>
  );
}