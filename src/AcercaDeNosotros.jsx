const SERVICIOS = ["Desayuno incluido", "Wi-Fi gratuito", "Pileta climatizada", "Estacionamiento", "Recepción 24 hs"];

export default function AcercaDeNosotros() {
  return (
    <section className="seccion">
      <h2>Acerca de nosotros</h2>
      <p>
        El Hotel Termas abrió sus puertas en 1998 como un emprendimiento familiar. Hoy
        cuenta con cuatro tipos de habitación pensadas para viajeros solos, parejas y familias,
        y un equipo que se ocupa de que cada estadía sea cómoda y tranquila.
      </p>
      <h3>Nuestros servicios</h3>
      <ul className="servicios">
        {SERVICIOS.map((servicio) => (
          <li key={servicio}>{servicio}</li>
        ))}
      </ul>
    </section>
  );
}
