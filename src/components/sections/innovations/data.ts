import imgGrid from "./assets/13.webp";
import imgSolar from "./assets/10.webp";
import imgWind from "./assets/05.webp";

export const innovationsSection = {
  title: "Servicios Complementarios",
  subheading1_1: "Soluciones prácticas para",
  subheading1_2: " espacios públicos y privados",
  innovations: [
    {
      title: "Saneamiento ambiental",
      description:
        "Realizamos limpieza, desinfección, control de vectores y recuperación de espacios verdes. Eliminamos focos de riesgo y dejamos el entorno en condiciones seguras.",
      visual: imgGrid,
    },
    {
      title: "Poda de árboles de gran porte",
      description:
        "Contamos con equipo capacitado y maquinaria especializada para podas complejas. Trabajamos con responsabilidad, seguros al día y todo en regla.",
      visual: imgSolar,
    },
    {
      title: "Mantenimiento de plantas de interior",
      description:
        "Ofrecemos cuidado integral de plantas para oficinas, halls y espacios cerrados. Control, riego y renovación para que el verde se mantenga sano todo el año.",
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Consultanos por estos servicios adicionales para tu espacio o institución",
  button: "Ver servicios",
};
