import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const navigation = [
  {
    name: 'Mezcla',
    content: 'Calienta 200 ml de leche y disuelve la levadura en ella. En otro recipiente, mezcla la sal, el azúcar y la harina. Luego, derrite la mantequilla y agrégala a la mezcla seca. Añade 3 huevos y, finalmente, incorpora la mezcla de leche con levadura.',
    img: "https://cdn.discordapp.com/attachments/986781545379561512/1299160982949462098/6fe10d42-bf31-42e2-985a-3c5e0ef91dae.png?ex=671c3173&is=671adff3&hm=12a00b0fc626e3f075bc4675f4a7c9cffdc61e0cdc45af12c92ce431eef90eba&",
  },
  {
    name: 'Amasado',
    content: 'Amasar la masa durante 10 min hasta que esté elástica y suave.',
    img: "https://sharex.host/ixJcewtmwN.jfif?key=shRDFWQqeG5JFw",
  },
  {
    name: 'Fermentación',
    content: 'Te ayudamos durante tus compras y entregamos tus paquetes y documentos de manera rápida y segura.',
    img: "https://sharex.host/zokqKaavGM.jfif?key=Z1SIEkAlz4oCV2",
  },
];

export default function CarouselSize() {
  return (
    <div className="w-full flex justify-center  rounded-lg">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full max-w-3xl  rounded-lg  bg-transparent border-none shadow-none"
      >
        <CarouselContent className="flex space-x-4 bg-zinc-800 rounded-lg">
          {navigation.map((item, index) => (
            <CarouselItem key={index} className="flex-shrink-0 w-64 ">
          <Card className="bg-zinc-800 border-none rounded-lg">
  <CardContent className="flex flex-col items-center justify-center p-4">
    <img
      src={item.img}
      alt={item.name}
      className="w-[200px] h-[200px] mb-4"
    />
    <span className="text-2xl font-semibold text-white">{item.name}</span>
    <p className="text-center text-white">{item.content}</p>
  </CardContent>
</Card>

            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
