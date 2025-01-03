import React from 'react'
export const QuitarDeLista = ({ animeId, quitarDeLista }) => {
  return (
    <button
    onClick={() => quitarDeLista(animeId)}
    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Quitar</button>
  )
}
