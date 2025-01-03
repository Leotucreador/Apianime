
  import React from 'react'
  
  export const VerMasTarde = ({ anime, agregarALista }) => {
    return (
      <button onClick={() => agregarALista(anime)}className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Ver más tarde</button>
    )
  }
  