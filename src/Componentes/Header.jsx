import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Hola } from "./Hola";

export const Header = ({ searchQuery, setSearchQuery, setPagina, setTipoBusqueda }) => {
  const [ola, setola] = useState(false);

  const handleInicioClick = () => {
    setSearchQuery(""); 
    setPagina(1); 
    setTipoBusqueda("anime"); 
    setola(false);
  };

  const sobremi = () => {
    setola((prev) => !prev); 
  };

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800">
        <div className="text-2xl font-bold">Aniapi</div>
        <div className="flex space-x-6">
          <button
            onClick={sobremi} // Activar el toggle
            className="hover:text-orange-500"
          >
            Sobre mí
          </button>
          <button
            onClick={handleInicioClick}
            className="hover:text-orange-500"
          >
            Inicio
          </button>
          <button
            onClick={() => setTipoBusqueda("anime")}
            className="hover:text-orange-500"
          >
            Animes
          </button>
          <button
            onClick={() => setTipoBusqueda("manga")}
            className="hover:text-orange-500"
          >
            Mangas
          </button>
          <div className="flex justify-around items-center hover:text-orange-500">
            <input
              type="text"
              className="bg-[#1F2937] border-2 border-white rounded-lg p-2 text-white focus:outline-none focus:border-orange-500"
              placeholder="Buscar anime"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch />
          </div>
        </div>
      </nav>


      {ola && (
        <div className="mt-6">
          <Hola />
        </div>
      )}
    </>
  );
};
