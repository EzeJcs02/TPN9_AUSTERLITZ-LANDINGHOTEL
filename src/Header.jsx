const ENLACES = [
  { id: "inicio", texto: "Inicio" },
  { id: "acerca", texto: "Acerca de nosotros" },
  { id: "reservas", texto: "Reservas" },
];

export default function Header({ seccion, onNavegar }) {
  return (
    <header className="header">
      <div className="header__marca" onClick={() => onNavegar("inicio")}>
        Hotel Termas
      </div>
      <nav className="header__nav">
        {ENLACES.map((enlace) => (
          <button
            key={enlace.id}
            className={seccion === enlace.id ? "activo" : ""}
            onClick={() => onNavegar(enlace.id)}
          >
            {enlace.texto}
          </button>
        ))}
      </nav>
    </header>
  );
}
