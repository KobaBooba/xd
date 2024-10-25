import * as React from "react";

export default function Metodos() {
  return (
    <main className="flex flex-col flex-grow justify-center items-center text-center">
      {/* Sección superior */}
      <section className="w-full flex flex-col items-center justify-center h-full">
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2"></div>
      </section>

      {/* Sección de contenido principal */}
      <section className="bg-zinc-800 p-10 mt-12 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center">
          {/* Lista de pasos */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Pasos para hacer pan</h2>
            <ul className="text-left list-disc list-inside text-white space-y-4">
              <li className="text-base text-white">
                <span className="font-bold ">Forma</span>: Preparar la masa y dividir las porciones.
              </li>
              <li className="text-base">
                <span className="font-bold">Precalentamiento</span>: Precalentar el horno a 200°C antes de hornear.
              </li>
              <li className="text-base">
                <span className="font-bold">Enfriamiento</span>: Dejar enfriar el pan antes de servirlo.
              </li>
              <li className="text-base">
                <span className="font-bold">Horneado</span>: Hornear la masa por 25-30 minutos hasta dorar.
              </li>
            </ul>
          </div>

          {/* Texto "Resultado" centrado y separado abajo */}
          <div className=" flex flex-col items-center justify-center">
            <p className="text-2xl font-bold mb-4 text-white">Resultado</p>
            
            {/* Imagen centrada y ampliada verticalmente */}
            <div className="w-full  flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src="https://sharex.host/M8sRgSbZ8v.jfif?key=gCuo344XqfQbqz"
                alt="Imagen del proceso de hacer pan"
                className="h-44 w-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
