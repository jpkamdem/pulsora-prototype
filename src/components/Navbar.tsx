export default function Navbar() {
  return (
    <>
      <section className="flex w-full flex-col items-center">
        <Header />
        <nav className="w-[80vw]  border-t-4 border-b-4">
          <ul className="uppercase w-full inline-flex justify-evenly">
            <li className="pt-2 pb-2 hover:cursor-pointer hover:bg-red-300">
              Menu
            </li>
            <li className="pt-2 pb-2 hover:cursor-pointer hover:bg-red-300">
              Actualités
            </li>
            <li className="pt-2 pb-2 hover:cursor-pointer hover:bg-red-300">
              Suivis
            </li>
            <li className="pt-2 pb-2 hover:cursor-pointer hover:bg-red-300">
              Match
            </li>
            <li className="pt-2 pb-2 hover:cursor-pointer hover:bg-red-300">
              Calendrier
            </li>
            <li className="pt-2 pb-2 hover:cursor-pointer hover:bg-red-300">
              Contact
            </li>
            <li className="pt-2 pb-2 hover:cursor-pointer hover:bg-red-300">
              Aide
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

function Header() {
  return (
    <>
      <h1 className="font-bold uppercase m-2 text-2xl">Pulsora</h1>
    </>
  );
}
