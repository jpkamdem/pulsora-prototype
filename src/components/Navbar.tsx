export default function Navbar() {
  return (
    <>
      <section className="flex w-full flex-col items-center">
        <Header />
        <nav className="w-[80vw]  border-t-2 border-b-2 border-gray-400">
          <ul className="uppercase w-full inline-flex justify-evenly">
            <li className="p-2 pb-2 hover:cursor-pointer">Menu</li>
            <li className="p-2 pb-2 hover:cursor-pointer">Actualités</li>
            <li className="p-2 pb-2 hover:cursor-pointer">Suivis</li>
            <li className="p-2 pb-2 hover:cursor-pointer">Match</li>
            <li className="p-2 pb-2 hover:cursor-pointer">Calendrier</li>
            <li className="p-2 pb-2 hover:cursor-pointer">Contact</li>
            <li className="p-2 pb-2 hover:cursor-pointer">Aide</li>
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
