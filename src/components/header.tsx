export default function Header() {
    return (
      <header className="bg-slate-600 bg-opacity">
        <nav className="mx-auto flex flex-wrap max-w-7xl items-center justify-between p-4 lg:px-6" aria-label="Global">
          <div className="flex w-full lg:w-auto lg:flex-1 justify-center items-center mb-4 lg:mb-0">
            <a href="#" className="">
              <img className="h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/3081/3081530.png" alt="Logo"/>
            </a>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-12 w-full lg:w-auto justify-center items-center">
            <a href="/" className="text-sm font-semibold leading-6 mb-2 lg:mb-0">Inicio</a>
            <a href="/infografias" className="text-sm font-semibold leading-6 mb-2 lg:mb-0">Infografias</a>
            <a href="/analisis" className="text-sm font-semibold leading-6 mb-2 lg:mb-0">Analisis</a>
            <a href="/webgrafia" className="text-sm font-semibold leading-6 mb-2 lg:mb-0">Webgrafia</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
      </header>
    );
  }