import svg1 from "./assets/green-1.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";

export const getInvolvedSection = {
  title: "Unite a Nosotros",
  subheading1_1: "Construyamos Juntos ",
  subheading1_2: "Espacios Verdes Sustentables",
  initiatives: [
    {
      title: "Asesoramiento Gratuito",
      description:
        "Aprovecha nuestro servicio de asesoramiento sin cargo en cuidado de espacios verdes. Nuestros ingenieros agrónomos te guiarán para crear y mantener jardines saludables y sustentables.",
      visual: svg2,
    },
    {
      title: "Programa de Compostaje",
      description:
        "Participa en nuestro programa de reciclaje de residuos orgánicos. Convertimos los desechos de poda y césped en compost natural, eliminando quemas contaminantes y creando fertilizantes ecológicos.",
      visual: svg4,
    },
    {
      title: "Alianzas con Proveedores Premium",
      description:
        "Benefíciate de nuestras alianzas con marcas líderes como Toro, Scotts y Jacklin. Accede a productos de primera línea con precios preferenciales para el cuidado profesional de tus espacios verdes.",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Comienza Hoy tu Proyecto de Paisajismo Sustentable",
  button: "Solicitar Asesoramiento",
};