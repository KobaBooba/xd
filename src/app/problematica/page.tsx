import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative items-center justify-between w-full h-full" style={{ backgroundImage: `url('/bg.png')` }}>
        <div className="absolute inset-0  bg-black opacity-70" />
        <main className="relative">
          <div className="px-6 md:px-0">
            <div className="mx-auto max-w-2xl py-5 sm:py-10 md:py-20 lg:py-40">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-relaxed font-extrabold">
                  ¿Cómo se puede aplicar la ley de la conservación de la materia
                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-relaxed font-extrabold">
                para reducir el desperdicio de materiales                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-relaxed font-extrabold">
                y promover la sostenibilidad ambiental?                </h1>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-8 font-extrabold">
                  Establecer sistemas eficientes de reciclaje permite recuperar materiales valiosos de los productos desechados, evitando la necesidad de extraer nuevas materias primas y reduciendo el volumen de residuos en los vertederos.
                </p>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-8 font-extrabold">
                  La reutilización de materiales, como el uso de envases retornables, también contribuye a disminuir el desperdicio.
                </p>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-8 font-extrabold">
                  Promover la educación y concienciación sobre la importancia de la conservación de la materia puede influir en el comportamientos de los consumidores, fomentando practicas sostenibles como la reducción del uso de materiales, la preferencia por productos reciclados y el apoyo a políticas ambientales.
                </p>
                <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-8 font-extrabold">
                  Aplicar la ley de la conservación de la materia de estas maneras no solo reduce el desperdicio de materiales, sino que también disminuye el impacto ambiental, preserva los recursos naturales y contribuye a la sostenibilidad a largo plazo.
                </p>

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