import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative" style={{ height: "968px", }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url('/bg.png')` }} />
        <div className="absolute inset-0 bg-slate-500 opacity-70 flex flex-col items-center justify-center">
          <main className="flex flex-col items-center justify-center p-6 h-screen w-screen">
            <div className="bg-black p-6 text-center">
              <div className="p-6">
                <h1 className="text-4xl sm:text-6x font-extrabold">Webgrafia</h1>
                <h1 className ="py-6 font-extrabold"> <a href="https://pea.ucr.ac.cr/wp-content/uploads/2020/08/Balanceo-por-Tanteo.pdf">Ley de conservacion de la materia</a></h1>
              
                <h1 className="py-3 font-extrabold"> <a href="https://www.youtube.com/watch?v=f9bix7MlQhg">Como se hacen los espejos?</a></h1>
              
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}