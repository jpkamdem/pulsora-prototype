import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section className="flex w-full flex-col items-center">
        <Header />
        <nav className="w-[80vw]  border-t-2 border-b-2 border-gray-400">
          <ul className="uppercase w-full inline-flex justify-evenly">
            <li className="p-2 pb-2 hover:cursor-pointer">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="p-2 pb-2 hover:cursor-pointer">
              <Link to="/actus">Actualités</Link>
            </li>
            <li className="p-2 pb-2 hover:cursor-pointer">
              <Link to="/suivis">Suivis</Link>
            </li>
            <li className="p-2 pb-2 hover:cursor-pointer">
              <Link to="/calendrier">Calendrier</Link>
            </li>
            <li className="p-2 pb-2 hover:cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2 pb-2 hover:cursor-pointer">
              <Link to="/aide">Aide</Link>
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
      <Link to="/">
        <h1 className="font-bold uppercase m-2 text-2xl">Pulsora</h1>
      </Link>
    </>
  );
}
