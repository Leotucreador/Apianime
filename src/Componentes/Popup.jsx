import React from "react";
import { IoIosClose } from "react-icons/io";

export const Popup = ({ anime, cerrar }) => {
  if (!anime) return null;

  return (
    <section className="fixed inset-0 w-full bg-gray-900 bg-opacity-10 flex  items-center justify-center p-2">
      <div className="bg-[#080C13] rounded-lg shadow-lg p-6 w-full relative ">
        <button
          onClick={cerrar}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-5xl">
          <IoIosClose />
        </button>
        <img
          alt={anime.title}
          src={anime.images.jpg.image_url}
          className="w-auto rounded-lg"
        />
        <div className="text-white">
        <h2 className="mt-4 text-3xl font-bold text-white">{anime.title}</h2>
        <p className="mt-2 ">{anime.synopsis}</p>
        <p className="mt-4 text-sm">Tipo: {anime.type}</p>
        <p className="mt-2 text-sm">Episodios: {anime.episodes}</p>
        </div>
      </div>
    </section>
  );
};

export default Popup;
