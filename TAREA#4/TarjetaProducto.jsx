import React from 'react';

// Un componente es solo una función que devuelve HTML
export function TarjetaProducto(props) {
  return (
    <div className="tarjeta">
      <img src={props.imagen} alt={props.nombre} width="200" />
      <h3>{props.nombre}</h3>
      <p>Categoría: {props.categoria}</p>
      <p>Precio: ${props.precio}</p>
    </div>
  );
}