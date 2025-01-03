import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Popup from "./Popup";
import { Header } from "./Header";
export const Anime = () => {
  const [animeList, setAnimeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pagina, setPagina] = useState(1);
  const [animeSeleccionado, setAnimeSeleccionado] = useState(null);
  const [verMasTarde, setVerMasTarde] = useState([]);
  const [tipoBusqueda, setTipoBusqueda] = useState("anime"); // Manejar tipo de búsqueda (anime o manga)

  useEffect(() => {
    const fetchAnimes = async () => {
      const endpoint = searchQuery.trim()
        ? `https://api.jikan.moe/v4/anime?q=${searchQuery}&order_by=score&sort=desc`
        : tipoBusqueda === "anime"
        ? `https://api.jikan.moe/v4/top/anime?page=${pagina}`
        : `https://api.jikan.moe/v4/top/manga?page=${pagina}`;
        
      try {
        const response = await fetch(endpoint);
        const datos = await response.json();
        setAnimeList(datos.data || []);
      } catch (error) {
        console.error("Error fetching animes or mangas:", error);
        setAnimeList([]);
      }
    };

    fetchAnimes();
  }, [searchQuery, pagina, tipoBusqueda]); 

  const nextPage = () => setPagina(prev => prev + 1);
  const prevPage = () => {
    if (pagina > 1) setPagina(prev => prev - 1);
  };

  const agregarALista = (anime) => {
    if (!verMasTarde.some(item => item.mal_id === anime.mal_id)) {
      setVerMasTarde(prev => [...prev, anime]);
    }
  };

  const quitarDeLista = (animeId) => {
    setVerMasTarde(prev => prev.filter(anime => anime.mal_id !== animeId));
  };

  const verAnimeAleatorio = () => {
    if (animeList.length > 0) {
      const randomAnime = animeList[Math.floor(Math.random() * animeList.length)];
      setAnimeSeleccionado(randomAnime);
    }
  };

  return (
    <section>
      <div className="bg-gray-900 text-white min-h-screen">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPagina={setPagina}
          setTipoBusqueda={setTipoBusqueda} />

        <div className="relative bg-hero-pattern bg-cover bg-center h-96">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold mb-4">Vean anime en cualquier momento</h1>
            <p className="text-5xl mb-6">Aniapi tu espacio</p>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Animes del momento</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {animeList.length > 0 ? (
              animeList.slice(0, 12).map((anime) => (
                <div
                  key={anime.mal_id}
                  className=" border border-zinc-50 rounded-xl hover:-translate-y-8 :hover:animated duration-200 translate-x-2">
                  <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-2">{anime.title}</h3>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setAnimeSeleccionado(anime)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Ver
                      </button>
                      <button
                        onClick={() => agregarALista(anime)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                        Ver más tarde
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No se encontraron animes</p>
            )}
          </div>

          <div className="text-center mt-5">
            <button
              onClick={verAnimeAleatorio}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded text-lg">
              Ver anime aleatorio
            </button>
          </div>

          <div className="text-3xl flex justify-center gap-10 mt-5 items-center">
            <button onClick={prevPage}>
              <IoIosArrowBack />
            </button>
            <span>{pagina}</span>
            <button onClick={nextPage}>
              <MdNavigateNext />
            </button>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Ver más tarde</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {verMasTarde.length > 0 ? (
                verMasTarde.map((anime) => (
                  <div
                    key={anime.mal_id}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={anime.images.jpg.image_url}
                      alt={anime.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold mb-2">{anime.title}</h3>
                      <button
                        onClick={() => quitarDeLista(anime.mal_id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-white">No tienes animes en tu lista</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {animeSeleccionado && (
        <Popup anime={animeSeleccionado} cerrar={() => setAnimeSeleccionado(null)} />
      )}
    </section>
  );
};

export default Anime;
