export default function Inicio({ onReservar }) {
  return (
    <section className="inicio">
      <div className="inicio__contenido">
        <h1>Bienvenido al Hotel Termas</h1>
        <p>
          Descanso, confort y buena atención en el corazón de la ciudad.
          Elegí tu habitación y reservá tus fechas en pocos pasos.
        </p>
        <button className="boton" onClick={onReservar}>
          Reservar ahora
        </button>
      </div>
    </section>
  );
}
