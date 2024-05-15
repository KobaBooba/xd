import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative items-center justify-between p-24" style={{ backgroundImage: `url('/bg.png')`, height: "968px", }}>
        <div className="absolute inset-0 bg-slate-500 opacity-70" />
        <main className="relative">
          <div className="px-6">
            <div className="mx-auto max-w-2xl py-40 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl sm:text-6x pt-20 font-extrabold">Ley de la conservacion de la Materia</h1>
                <p className="mt-6 text-lg leading-8 font-extrabold">Santiago Redondo ・ Tomas Casas ・ Paula Gutierrez</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}