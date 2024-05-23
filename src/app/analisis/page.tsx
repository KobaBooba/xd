"use client"
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Header from '@/components/header';
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };
  const onOpenModal2 = () => {
    setIsOpen2(true);
  };

  const onCloseModal2 = () => {
    setIsOpen2(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="relative min-h-screen bg-center bg-cover" style={{ backgroundImage: `url('/bg.png')` }}>
        <div className="absolute inset-0 bg-slate-500 opacity-70"></div>
        <div className="relative flex flex-col items-center w-full h-full p-8">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center mr-16">
              <h1 className="text-2xl font-extrabold pt-5">Infografía</h1>
              <img
                src="/1.png"
                alt=""
                className="w-64 h-auto cursor-pointer border-2 border-gray-300"
                onClick={onOpenModal}
              />
              <Modal open={isOpen} onClose={onCloseModal} center>
                <img src="/1.png" alt="" className="w-full max-h-full object-contain" />
              </Modal>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold mb-2 justify-center">Análisis</h1>
              <img 
                src="/5.png"
                alt=""
                className="w-full sm:w-48 md:w-80 cursor-pointer"
                onClick={onOpenModal2}
              />
              <Modal open={isOpen2} onClose={onCloseModal2} center>
                <img src="/5.png" alt="" className="w-full max-h-full object-contain" />
              </Modal>
            </div>
          </div>
          <h1 className=" pt-5 text-2xl font-bold mb-2 justify-center">Video</h1>
          <iframe 
            src="https://www.youtube.com/embed/f9bix7MlQhg" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            className="w-1/2 md:h-96"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;