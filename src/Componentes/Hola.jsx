import React from "react";

export const Hola = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Hola mundo soy Leo</h1>
      <p className="text-lg mb-2">
        Tengo <span className="text-blue-400 font-semibold">18 años</span> y me dedico al{" "}
        <span className="text-green-400 font-semibold">desarrollo de software</span>.
      </p>
      <p className="text-md text-gray-400 text-center max-w-lg">
        Apasionado por la tecnología, disfruto crear soluciones prácticas y aprender algo nuevo
        cada día. Siempre estoy buscando formas de mejorar mis habilidades y contribuir al mundo
        del desarrollo.
      </p>
    </section>
  );
};
