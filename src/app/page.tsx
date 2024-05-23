import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative items-center justify-between p-24" style={{ backgroundImage: `url('/bg.png')`, height: "968px", }}>
        <div className="absolute inset-0 bg-slate-500 opacity-70" />
        <main className="relative">
  <div className="px-6 md:px-0">
    <div className="mx-auto max-w-2xl py-10 sm:py-20 md:py-40 lg:py-56 text-white">
      <div className="text-center">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl pt-10 sm:pt-20 font-extrabold">Ley de la conservación de la Materia</h1>
        <p className="text-white mt-4 sm:mt-6 text-sm sm:text-lg leading-8 font-extrabold">Presentado por: Santiago Redondo・Tomas Casas・Paula Gutierrez</p>
        <p className="text-white mt-4 sm:mt-6 text-sm sm:text-lg leading-8 font-extrabold">Presentado a: Nicolas Rico・Paola Lopez </p>

        <div className="mt-5 sm:mt-10 flex items-center justify-center gap-x-6">
        </div>
      </div>
    </div>
  </div>
</main>
      </div>
    </>
  );
}
