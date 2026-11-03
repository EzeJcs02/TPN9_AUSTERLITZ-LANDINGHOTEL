import { useState } from "react";
import Header from "./Header.jsx";
import Inicio from "./Inicio.jsx";
import AcercaDeNosotros from "./AcercaDeNosotros.jsx";
import Reservas from "./Reservas.jsx";

export default function App() {
  const [seccion, setSeccion] = useState("inicio");

  return (
    <>
      <Header seccion={seccion} onNavegar={setSeccion} />
      <main>
        {seccion === "inicio" && <Inicio onReservar={() => setSeccion("reservas")} />}
        {seccion === "acerca" && <AcercaDeNosotros />}
        {seccion === "reservas" && <Reservas />}
      </main>
      <footer className="footer">© 2026 Hotel Termas · UCASAL</footer>
    </>
  );
}
