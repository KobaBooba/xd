export default function Header() {
  return (
      <header className="bg-slate-600 bg-opacity">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6" aria-label="Global">
              <div className="flex lg:flex-1 justify-center items-center">
                  <a href="#" className="">
                      <img className="h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/3081/3081530.png" alt="Logo"/>
                  </a>
              </div>
              <div className="hidden lg:flex lg:gap-x-12 justify-center items-center">
                  <a href="/" className="text-sm font-semibold leading-6 ">Inicio</a>
                  <a href="/infografias" className="text-sm font-semibold leading-6 ">Infografias</a>
                  <a href="/analisis" className="text-sm font-semibold leading-6 ">Analisis</a>
                  <a href="/webgrafia" className="text-sm font-semibold leading-6 ">Webgrafia</a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              </div>
          </nav>
      </header>
  )
}