import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import { differenceInCalendarDays, format } from "date-fns";
import "react-day-picker/style.css";

const HABITACIONES = [
  { id: 1, nombre: "Habitación Simple", capacidad: 1, precio: 45000, descripcion: "Cama individual, escritorio y baño privado." },
  { id: 2, nombre: "Habitación Doble", capacidad: 2, precio: 70000, descripcion: "Cama matrimonial, TV y vista a la ciudad." },
  { id: 3, nombre: "Habitación Familiar", capacidad: 4, precio: 110000, descripcion: "Dos camas dobles, kitchenette y balcón." },
  { id: 4, nombre: "Suite Premium", capacidad: 2, precio: 160000, descripcion: "Cama king, jacuzzi y sala de estar." },
];

const formatearPrecio = (valor) => `$${valor.toLocaleString("es-AR")}`;
const formatearFecha = (fecha) => format(fecha, "dd/MM/yyyy");

export default function Reservas() {
  const [habitacionId, setHabitacionId] = useState(null);
  const [rango, setRango] = useState();

  const habitacion = HABITACIONES.find((h) => h.id === habitacionId);
  const rangoCompleto = rango?.from && rango?.to;
  const noches = rangoCompleto ? differenceInCalendarDays(rango.to, rango.from) : 0;

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const confirmar = () => {
    alert(
      `¡Reserva confirmada!\n\n` +
        `${habitacion.nombre}\n` +
        `Desde: ${formatearFecha(rango.from)}\n` +
        `Hasta: ${formatearFecha(rango.to)}\n` +
        `${noches} ${noches === 1 ? "noche" : "noches"} · Total: ${formatearPrecio(noches * habitacion.precio)}`
    );
    setHabitacionId(null);
    setRango(undefined);
  };

  return (
    <section className="seccion">
      <h2>Reservas</h2>

      <h3>1. Elegí tu habitación</h3>
      <div className="habitaciones">
        {HABITACIONES.map((h) => (
          <article
            key={h.id}
            className={`habitacion ${h.id === habitacionId ? "habitacion--elegida" : ""}`}
          >
            <h4>{h.nombre}</h4>
            <p>{h.descripcion}</p>
            <p className="habitacion__detalle">
              Hasta {h.capacidad} {h.capacidad === 1 ? "persona" : "personas"}
            </p>
            <p className="habitacion__precio">{formatearPrecio(h.precio)} / noche</p>
            <button className="boton" onClick={() => setHabitacionId(h.id)}>
              {h.id === habitacionId ? "Seleccionada" : "Seleccionar"}
            </button>
          </article>
        ))}
      </div>

      <h3>2. Elegí el rango de fechas</h3>
      <div className="calendario">
        <DayPicker
          mode="range"
          locale={es}
          numberOfMonths={2}
          selected={rango}
          onSelect={setRango}
          disabled={{ before: hoy }}
          startMonth={hoy}
        />
      </div>

      <div className="resumen">
        {habitacion && rangoCompleto && noches > 0 ? (
          <>
            <p>
              <strong>{habitacion.nombre}</strong> · {formatearFecha(rango.from)} al{" "}
              {formatearFecha(rango.to)} ({noches} {noches === 1 ? "noche" : "noches"})
            </p>
            <p className="resumen__total">Total: {formatearPrecio(noches * habitacion.precio)}</p>
          </>
        ) : (
          <p>Seleccioná una habitación y un rango de fechas (día de ingreso y día de salida).</p>
        )}
        <button
          className="boton"
          disabled={!habitacion || !rangoCompleto || noches < 1}
          onClick={confirmar}
        >
          Confirmar reserva
        </button>
      </div>
    </section>
  );
}
