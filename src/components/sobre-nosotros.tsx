import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const navigation = [
  { 
    img: "https://imag.bonviveur.com/ingredientes-para-hacer-el-pan-chino.jpg",
  },
  { 
    img: "https://laroussecocina.mx/wp-content/uploads/2017/11/larousse-cocina-tip-sal-panificacion.jpg",
  },
];

export default function Sobre() {
  return (
    <div>
      <div className="flex justify-center py-8 px-4 md:px-0">
        <div className="text-black p-6 rounded-lg shadow-lg max-w-2xl w-full ">
          <div className="flex flex-col md:flex-row items-start text-left">
            {/* Lista de ingredientes */}
            <div className="md:w-1/2 p-4 font-bold bg-opacity-80 text-white text-2xl">
              <li>4 huevos</li>
              <li>500g harina</li>
              <li>70g azúcar</li>
              <li>10g levadura</li>
              <li>200g leche</li>
              <li>100g mantequilla</li>
              <li>70g sal</li>
            </div>

            {/* Carrusel de imágenes */}
            <div className="md:w-1/2 flex justify-center">
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="w-full max-w-2xl"
              >
                <CarouselContent className="flex space-x-2">
                  {navigation.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="flex-shrink-0 w-full md:w-60"
                    >
                      <Card className="bg-transparent border-none shadow-none"> 
                        <CardContent className="flex flex-col items-center justify-center p-0">
                          <img
                            src={item.img}
                            alt={`Imagen ${index}`}
                            className="w-full h-auto md:w-[900px] md:h-60"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
