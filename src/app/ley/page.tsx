"use client"
import { useState } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Header from "@/components/header";

export default function HomePage() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false); 

    const onOpenModal1 = () => {
      setIsOpen1(true);
    };

    const onCloseModal1 = () => {
      setIsOpen1(false);
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
            <h1 className="text-2xl font-bold mb-4">Ley de conservación de la materia</h1>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-center w-1/2 p-8">
                <img 
                  src="/2.png" 
                  alt="" 
                  className="w-64 h-auto cursor-pointer" 
                  onClick={onOpenModal2}
                />
                <Modal open={isOpen2} onClose={onCloseModal2} center>
                  <img src="/2.png" alt="" className="w-full max-h-full object-contain" />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}