'use client'
import React from 'react';
import Sobre from '@/components/sobre-nosotros';
import Servicios from '@/components/servicios';

import fondo from '../../public/fondo.jpeg';
import Image from 'next/image';
import fondo2 from '../../public/fondo.jpg';
import Metodos from '@/components/metodos';




const HomePage = () => {
  return (
    <div className="bg-blanco min-h-screen flex flex-col w-full">
      <div className="relative h-[690px]">
        <Image
          src={fondo}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 bg-black bg-opacity-50 h-full flex flex-col">
          <main className="flex flex-col flex-grow justify-center items-center text-center">
            <section className="w-full flex flex-col items-center justify-center h-full">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-custom">Formas de hacer Pan</h1>
                <p className="text-lg md:text-xl mb-4 text-gray-300 font-custom1"> Santiago Redondo, Tomas Casas, Paula Gutierrez</p>
                <p className="text-lg md:text-xl text-gray-300 font-custom1">Presentado para: Nicolas Rico, Paola Lopez</p>
              </div>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2"></div>
            </section>
          </main>
        </div>
      </div>

      <div className="relative z-0">
        <Image
          src={fondo2}
          alt="Imagen de fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 text-center py-4">
        <div className="mt-4 p-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center text-negro font-custom">Objetivos</h2>
            <p className="text-2xl text-white mb-2 font-bold">- General: Relacionar la preparación del pan con la biotecnología.</p>
            <p className="text-2xl text-white mb-2 font-bold">- Específico: Observar el proceso de fermentación en el pan.</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center text-negro font-custom">Ingredientes</h1>
          <Sobre />
          <hr className="my-4 border-t-2 border-gray-300 opacity-10" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center text-negro font-custom">Preparación Masa</h1>
          <Servicios />
          <hr className="my-4 border-t-2 border-gray-300 opacity-10" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center text-negro font-custom">Preparación Pan</h1>
          <Metodos />
         
        </div>
      </div>
    </div>
  );
};



export default HomePage;
