import test_image from "../images/test_image.png";

export type NewsItem = {
  id: number;
  category: string;
  title: string;
  summary: string;
  image: string;
  texts: string[];
};

export type PreviewItem = {
  id: number;
  category: string;
  title: string;
  image_src: string;
  image_alt: string;
};

export const categories = [
  "all",
  "sports",
  "technology",
  "entertainment",
  "education",
  "movies",
];

export const categoryLabels: Record<string, string> = {
  all: "Todas",
  sports: "Deportes",
  technology: "Tecnología",
  entertainment: "Entretenimiento",
  education: "Educación",
  movies: "Películas",
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "technology",
    title: "Nueva IA revoluciona el desarrollo web",
    summary: "Herramientas inteligentes aceleran la creación de aplicaciones",
    image: test_image,
    texts: [
      "Una nueva generación de inteligencia artificial está transformando la forma en la que los desarrolladores crean aplicaciones web.",
      "Estas herramientas permiten generar código, detectar errores y optimizar rendimiento en tiempo real.",
      "Empresas tecnológicas están integrando estas soluciones en sus flujos de trabajo.",
    ],
  },
  {
    id: 2,
    category: "sports",
    title: "Victoria histórica en la final de liga",
    summary: "Un partido emocionante se decide en los últimos minutos",
    image: test_image,
    texts: [
      "El equipo local logró una victoria histórica tras un partido muy igualado.",
      "La afición celebró intensamente el resultado y marcó un hito en la temporada.",
    ],
  },
  {
    id: 3,
    category: "education",
    title: "Aumenta el uso de bicicletas en la ciudad",
    summary: "La movilidad sostenible gana protagonismo entre los ciudadanos",
    image: test_image,
    texts: [
      "Cada vez más personas optan por la bicicleta como medio de transporte diario.",
      "Las autoridades han ampliado los carriles bici y fomentan su uso con nuevas iniciativas.",
    ],
  },
];

export const previewItems: PreviewItem[] = [
  {
    id: 1,
    category: "technology",
    title: "Nuevo smartphone promete revolucionar el mercado",
    image_src: test_image,
    image_alt: "Nuevo smartphone",
  },
  {
    id: 2,
    category: "education",
    title: "Descubren avances clave en energía renovable",
    image_src: test_image,
    image_alt: "Energía renovable",
  },
  {
    id: 3,
    category: "entertainment",
    title: "Festival de música reúne a miles de personas",
    image_src: test_image,
    image_alt: "Festival de música",
  },
  {
    id: 4,
    category: "technology",
    title: "Nueva actualización mejora la seguridad online",
    image_src: test_image,
    image_alt: "Seguridad online",
  },
  {
    id: 5,
    category: "sports",
    title: "Apertura de centro deportivo en la ciudad",
    image_src: test_image,
    image_alt: "Centro deportivo",
  },
  {
    id: 6,
    category: "technology",
    title: "Tendencias en diseño web para 2026",
    image_src: test_image,
    image_alt: "Tendencias diseño web",
  },
];
