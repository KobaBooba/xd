"use client"
import { useState } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Header from "@/components/header";


export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
  
    const onOpenModal = () => {
      setIsOpen(true);
    };
  
    const onCloseModal = () => {
      setIsOpen(false);
    };
  
    return (
        <div className="min-h-screen bg-gray-100">
          <Header />
          <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: `url('/bg.png')` }}>
            <div className="absolute inset-0 bg-slate-500 opacity-70" /> {/* Added this line */}
            <div className="absolute inset-0 flex flex-col items-center justify-center"> {/* Modified this line */}
  <div className="flex flex-col items-center justify-center w-full  pt-5 "> {/* Modified this line */}
    <h1 className="text-2xl font-bold mb-2">Análisis</h1> {/* Added this line */}
    <iframe 
  className="w-full sm:w-64 md:w-96" // Ajusta el ancho del video dependiendo del tamaño de la pantalla
  height="235" 
  src="https://www.youtube.com/embed/f9bix7MlQhg" 
  title="YouTube video player" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
></iframe>
  </div>
  <div className="flex flex-col items-center justify-center w-full p-8"> {/* Modified this line */}
    <h1 className="text-2xl  font-extrabold">¿Cómo se hacen los vidrios?</h1> {/* Moved this line */}
    <img 
      src="/1.png" 
      alt="" 
      className="w-48 h-auto cursor-pointer border-2 border-gray-300" /* Modified this line */
      onClick={onOpenModal}
    />
    <Modal open={isOpen} onClose={onCloseModal} center>
      <img src="/1.png" alt="" className="w-full max-h-full object-contain" />
    </Modal>
  </div>
</div>
          </div>
        </div>
      );
  }