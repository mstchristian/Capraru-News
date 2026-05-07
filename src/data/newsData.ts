import test_image from "../images/test_image.png";

export type NewsItem = {
  id: number;
  category: string;
  title: string;
  summary: string;
  image: string;
  image_alt?: string;
  texts: string[];
};

export const categories = [
  "all",
  "sports",
  "technology",
  "science",
  "health",
  "education",
  "entertainment",
  "movies",
  "economy",
  "environment",
  "gaming",
];

export const categoryLabels: Record<string, string> = {
  all: "Todas",
  sports: "Deportes",
  technology: "Tecnología",
  science: "Ciencia",
  health: "Salud",
  education: "Educación",
  entertainment: "Entretenimiento",
  movies: "Películas",
  economy: "Economía",
  environment: "Medio Ambiente",
  gaming: "Videojuegos",
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "technology",
    title: "Nueva IA revoluciona el desarrollo web",
    summary: "Herramientas inteligentes aceleran la creación de aplicaciones",
    image: test_image,
    image_alt: "IA en desarrollo web",
    texts: [
      "Una nueva generación de inteligencia artificial está transformando profundamente la forma en la que los desarrolladores crean aplicaciones web modernas. Estas herramientas son capaces de generar código automáticamente, detectar errores en tiempo real y optimizar el rendimiento de las páginas sin intervención manual constante.",

      "Grandes empresas tecnológicas ya están incorporando estas soluciones en sus procesos diarios para acelerar el lanzamiento de productos y mejorar la calidad del software. Muchas compañías afirman que los tiempos de desarrollo se han reducido considerablemente gracias a la automatización inteligente.",

      "Los asistentes de programación basados en IA también ayudan a los desarrolladores principiantes a comprender estructuras complejas de código y mejores prácticas. Esto ha provocado un aumento del interés por el desarrollo web entre estudiantes y nuevos profesionales.",

      "Expertos del sector consideran que esta evolución representa uno de los mayores cambios en la industria tecnológica de la última década. Algunas herramientas incluso pueden analizar proyectos completos y proponer mejoras de arquitectura automáticamente.",

      "Sin embargo, varios especialistas advierten que la supervisión humana seguirá siendo fundamental para evitar errores críticos y garantizar la seguridad de las aplicaciones. La IA todavía puede generar código ineficiente o vulnerable si no se revisa adecuadamente.",

      "Además, el crecimiento de estas plataformas está impulsando nuevas oportunidades laborales relacionadas con la automatización, el análisis de datos y la supervisión de sistemas inteligentes. Empresas de todo el mundo continúan invirtiendo millones en investigación y desarrollo.",

      "A medida que la inteligencia artificial evolucione, muchos analistas creen que cambiará completamente la manera en la que se construyen productos digitales, permitiendo experiencias más rápidas, personalizadas y eficientes para millones de usuarios.",
    ],
  },

  {
    id: 2,
    category: "sports",
    title: "Victoria histórica en la final de liga",
    summary: "Un partido emocionante se decide en los últimos minutos",
    image: test_image,
    image_alt: "Final de liga",
    texts: [
      "El equipo local consiguió una victoria histórica en una de las finales más emocionantes de los últimos años. Desde el inicio del encuentro ambos conjuntos mostraron una gran intensidad y ofrecieron un espectáculo deportivo de alto nivel.",

      "La afición llenó completamente el estadio y creó un ambiente impresionante que acompañó al equipo durante los noventa minutos. Los cánticos y celebraciones se escucharon constantemente desde las gradas.",

      "Durante gran parte del partido el marcador permaneció igualado, con ocasiones claras para ambos equipos y actuaciones destacadas de los porteros. Los jugadores demostraron una enorme entrega física y táctica.",

      "El momento decisivo llegó en los últimos minutos cuando el delantero estrella anotó el gol de la victoria tras una rápida jugada colectiva. La emoción se desató inmediatamente entre jugadores y aficionados.",

      "Tras el pitido final, miles de seguidores salieron a las calles para celebrar el campeonato hasta altas horas de la madrugada. Las imágenes de la celebración rápidamente se volvieron virales en redes sociales.",

      "El entrenador destacó el esfuerzo colectivo y aseguró que este triunfo es el resultado de años de trabajo, disciplina y confianza dentro del vestuario. También dedicó la victoria a la afición por su apoyo constante.",

      "Analistas deportivos consideran que esta final será recordada durante muchos años por la intensidad del encuentro y el impacto emocional que generó tanto dentro como fuera del estadio.",
    ],
  },

  {
    id: 3,
    category: "education",
    title: "Aumenta el uso de bicicletas en la ciudad",
    summary: "La movilidad sostenible gana protagonismo entre los ciudadanos",
    image: test_image,
    image_alt: "Uso de bicicletas en la ciudad",
    texts: [
      "Cada vez más ciudadanos optan por utilizar la bicicleta como principal medio de transporte en sus desplazamientos diarios. Esta tendencia ha crecido especialmente en las zonas urbanas con mayor tráfico y contaminación.",

      "Las autoridades locales han ampliado significativamente la red de carriles bici y han impulsado campañas para fomentar hábitos de movilidad más sostenibles. También se han instalado nuevos aparcamientos y estaciones de reparación.",

      "Muchos ciudadanos aseguran que utilizar bicicleta les permite ahorrar tiempo y dinero en comparación con otros medios de transporte. Además, destacan los beneficios relacionados con la salud física y mental.",

      "Comercios, oficinas y centros educativos han comenzado a adaptar sus instalaciones para facilitar el acceso de los usuarios que utilizan bicicleta diariamente. Algunas empresas incluso ofrecen incentivos a sus trabajadores.",

      "Expertos en movilidad urbana consideran que esta transformación ayudará a reducir la contaminación y mejorar la calidad del aire en las grandes ciudades. Varias organizaciones medioambientales han apoyado públicamente estas iniciativas.",

      "Sin embargo, algunos colectivos reclaman mayores medidas de seguridad y más espacios adaptados para evitar accidentes y mejorar la convivencia entre peatones, ciclistas y vehículos.",

      "Analistas urbanos creen que el crecimiento del uso de bicicletas continuará durante los próximos años y cambiará de forma importante la manera en la que las personas se desplazan dentro de las ciudades modernas.",
    ],
  },

  {
    id: 4,
    category: "entertainment",
    title: "Festival de cine local estrena producciones independientes",
    summary: "Las películas emergentes captan la atención del público joven",
    image: test_image,
    image_alt: "Festival de cine",
    texts: [
      "El festival de cine local ha inaugurado una nueva edición centrada en producciones independientes y documentales realizados por jóvenes directores emergentes. El evento reúne a miles de asistentes apasionados por el cine alternativo.",

      "Las películas proyectadas abordan temas sociales, culturales y personales que han conectado especialmente con el público joven. Muchas de las obras destacan por su estilo visual innovador y sus historias originales.",

      "Los organizadores aseguran que el objetivo principal del festival es ofrecer un espacio para nuevos talentos y fomentar la creatividad dentro de la industria audiovisual. Varias productoras también participaron en encuentros profesionales.",

      "Durante el fin de semana se realizaron coloquios, entrevistas y talleres relacionados con dirección, guion y producción cinematográfica. Los asistentes pudieron interactuar directamente con los creadores de las películas.",

      "Críticos culturales han valorado positivamente la calidad artística de las producciones presentadas y consideran que el cine independiente atraviesa uno de sus mejores momentos en años recientes.",

      "Además del impacto cultural, el festival también ha generado un importante movimiento económico para hoteles, restaurantes y comercios de la región. Las autoridades locales celebraron el éxito de participación.",

      "Muchos participantes consideran que este tipo de eventos son fundamentales para impulsar nuevas voces dentro del cine y fortalecer la cultura audiovisual entre las generaciones más jóvenes.",
    ],
  },

  {
    id: 5,
    category: "movies",
    title: "Estreno de la nueva superproducción rompe récords de taquilla",
    summary:
      "La película se convierte en el mayor éxito del año en su primer fin de semana",
    image: test_image,
    image_alt: "Película en estreno",
    texts: [
      "La nueva superproducción cinematográfica se ha convertido en el estreno más exitoso del año tras recaudar cifras históricas durante su primer fin de semana en cartelera. Los cines registraron llenos absolutos en numerosos países.",

      "La campaña promocional generó una enorme expectativa semanas antes del lanzamiento gracias a avances espectaculares y una intensa presencia en redes sociales. Millones de espectadores esperaban el estreno con gran entusiasmo.",

      "Críticos y especialistas destacan especialmente la calidad de los efectos visuales, la fotografía y la banda sonora de la película. Muchos consideran que representa un nuevo estándar técnico dentro de la industria.",

      "El reparto principal también ha recibido elogios por sus interpretaciones y la química mostrada en pantalla. Varias escenas emocionales fueron especialmente comentadas por los espectadores tras las primeras proyecciones.",

      "Las entradas llegaron a agotarse rápidamente en numerosas ciudades, obligando a varios cines a añadir sesiones adicionales para satisfacer la demanda del público.",

      "Analistas de la industria cinematográfica creen que la película continuará dominando la taquilla durante las próximas semanas y podría convertirse en uno de los mayores éxitos comerciales de la década.",

      "El estudio responsable de la producción ya estudia posibles secuelas y nuevos proyectos relacionados con este universo cinematográfico debido al enorme impacto conseguido tras su estreno mundial.",
    ],
  },

  {
    id: 6,
    category: "technology",
    title: "Avances en realidad virtual cambian la forma de estudiar",
    summary:
      "Nuevos dispositivos permiten experiencias de aprendizaje inmersivo",
    image: test_image,
    image_alt: "Realidad virtual educativa",
    texts: [
      "La realidad virtual está comenzando a transformar la educación gracias al desarrollo de dispositivos cada vez más avanzados y accesibles. Diversas instituciones educativas ya utilizan esta tecnología dentro de sus aulas.",

      "Los estudiantes pueden recorrer escenarios históricos, explorar el cuerpo humano o participar en simulaciones científicas sin salir de clase. Estas experiencias inmersivas aumentan el interés y la participación del alumnado.",

      "Profesores de diferentes centros educativos aseguran que las herramientas de realidad virtual ayudan a comprender conceptos complejos de una manera mucho más visual e interactiva.",

      "Además de mejorar la motivación, varios estudios indican que este tipo de aprendizaje favorece la retención de información y estimula la curiosidad de los estudiantes.",

      "Empresas tecnológicas continúan invirtiendo millones en plataformas diseñadas específicamente para la educación inmersiva. Algunos dispositivos ya incluyen inteligencia artificial para adaptar contenidos a cada alumno.",

      "A pesar de sus ventajas, especialistas señalan que todavía existen desafíos relacionados con el coste de implementación y la necesidad de formación para los docentes.",

      "Muchos expertos consideran que la realidad virtual tendrá un papel clave en el futuro de la enseñanza y cambiará completamente la forma en la que millones de estudiantes aprenden en todo el mundo.",
    ],
  },

  {
    id: 7,
    category: "health",
    title:
      "Nuevos avances médicos mejoran la detección temprana de enfermedades",
    summary:
      "La inteligencia artificial ayuda a identificar diagnósticos con mayor precisión",
    image: test_image,
    image_alt: "Tecnología médica avanzada",
    texts: [
      "Diversos centros médicos están incorporando sistemas de inteligencia artificial capaces de analizar pruebas clínicas en cuestión de segundos. Estas herramientas permiten detectar patrones difíciles de identificar para el ojo humano y facilitan diagnósticos más rápidos y precisos.",

      "Los especialistas aseguran que esta tecnología puede resultar especialmente útil en enfermedades donde la detección temprana es fundamental para aumentar las probabilidades de recuperación. Hospitales de distintos países ya realizan pruebas piloto con resultados prometedores.",

      "Además de acelerar los diagnósticos, los nuevos sistemas también ayudan a reducir la carga de trabajo del personal sanitario. Muchos médicos consideran que estas herramientas complementarán el trabajo humano y mejorarán la atención a los pacientes.",

      "Sin embargo, varios expertos recuerdan la importancia de proteger los datos médicos y garantizar que los algoritmos sean transparentes y seguros. La privacidad continúa siendo uno de los principales desafíos del sector.",

      "Empresas tecnológicas y universidades continúan colaborando en el desarrollo de plataformas médicas más avanzadas y accesibles. La inversión en innovación sanitaria ha aumentado notablemente durante los últimos años.",

      "Pacientes y profesionales destacan que estas soluciones podrían reducir los tiempos de espera y facilitar el acceso a diagnósticos especializados en zonas con menos recursos médicos.",

      "Analistas consideran que la combinación entre medicina e inteligencia artificial marcará una nueva etapa en el sistema sanitario mundial durante la próxima década.",
    ],
  },

  {
    id: 8,
    category: "science",
    title: "Astrónomos descubren señales sorprendentes en una galaxia lejana",
    summary:
      "El hallazgo despierta interés en la comunidad científica internacional",
    image: test_image,
    image_alt: "Galaxia en el espacio",
    texts: [
      "Un grupo internacional de astrónomos ha detectado señales inusuales procedentes de una galaxia situada a millones de años luz de la Tierra. El descubrimiento fue posible gracias a nuevos telescopios capaces de captar información con una precisión sin precedentes.",

      "Los investigadores explican que las emisiones registradas no coinciden completamente con fenómenos espaciales conocidos hasta el momento. Esto ha generado un intenso debate dentro de la comunidad científica internacional.",

      "Varios centros de investigación ya trabajan en nuevos análisis para comprender el origen exacto de las señales y descartar posibles interferencias técnicas. El proceso podría durar meses debido a la complejidad de los datos obtenidos.",

      "Especialistas en astronomía consideran que este descubrimiento podría ayudar a entender mejor la formación y evolución de galaxias extremadamente antiguas.",

      "La noticia ha despertado gran interés entre aficionados a la ciencia y usuarios de redes sociales, donde miles de personas siguen las actualizaciones sobre el hallazgo.",

      "Las agencias espaciales también estudian la posibilidad de utilizar otros observatorios internacionales para obtener información complementaria y confirmar los resultados iniciales.",

      "Aunque todavía no existen conclusiones definitivas, muchos expertos coinciden en que este descubrimiento podría convertirse en uno de los acontecimientos científicos más importantes del año.",
    ],
  },

  {
    id: 9,
    category: "economy",
    title: "El comercio digital continúa creciendo a nivel mundial",
    summary: "Las compras online alcanzan cifras récord durante este año",
    image: test_image,
    image_alt: "Compras online",
    texts: [
      "El comercio electrónico continúa expandiéndose rápidamente y registra cifras récord en numerosos países. Cada vez más consumidores realizan compras a través de plataformas digitales debido a la comodidad y variedad de productos disponibles.",

      "Empresas del sector aseguran que las mejoras en logística y métodos de pago han aumentado la confianza de los usuarios. Los envíos rápidos y las políticas de devolución sencillas son algunos de los factores más valorados.",

      "Pequeños negocios también han aprovechado el crecimiento digital para llegar a nuevos clientes y competir en mercados internacionales. Muchas tiendas tradicionales han comenzado a combinar ventas físicas y online.",

      "Analistas económicos consideran que el crecimiento del comercio digital continuará durante los próximos años gracias al avance tecnológico y al cambio de hábitos de consumo.",

      "Sin embargo, especialistas advierten sobre el aumento de fraudes y ataques informáticos relacionados con las compras online. Las plataformas continúan reforzando sus sistemas de seguridad.",

      "Los consumidores destacan que las aplicaciones móviles y las recomendaciones personalizadas han mejorado considerablemente la experiencia de compra en internet.",

      "Expertos creen que la inteligencia artificial y la automatización transformarán todavía más el sector comercial en el futuro cercano.",
    ],
  },

  {
    id: 10,
    category: "technology",
    title: "Los robots domésticos ganan popularidad en miles de hogares",
    summary: "La automatización llega cada vez más a la vida cotidiana",
    image: test_image,
    image_alt: "Robot doméstico",
    texts: [
      "Los robots domésticos se están convirtiendo en una presencia habitual dentro de miles de hogares gracias a los avances en inteligencia artificial y automatización. Estos dispositivos pueden realizar tareas de limpieza, vigilancia y asistencia personal.",

      "Fabricantes tecnológicos aseguran que los nuevos modelos son más eficientes, silenciosos y fáciles de utilizar que generaciones anteriores. Algunos incluso aprenden rutinas y preferencias de los usuarios.",

      "El crecimiento de este mercado ha provocado una fuerte competencia entre empresas internacionales que buscan lanzar dispositivos cada vez más avanzados y accesibles.",

      "Muchos consumidores consideran que estos robots permiten ahorrar tiempo y facilitan la organización diaria dentro del hogar, especialmente en familias con poco tiempo disponible.",

      "Sin embargo, algunos especialistas muestran preocupación por la dependencia tecnológica y los riesgos relacionados con la privacidad y recopilación de datos.",

      "Expertos en innovación creen que los hogares inteligentes evolucionarán rápidamente durante los próximos años gracias a la integración entre robots, asistentes virtuales y dispositivos conectados.",

      "Analistas del sector consideran que la automatización doméstica será uno de los mercados tecnológicos con mayor crecimiento en la próxima década.",
    ],
  },

  {
    id: 11,
    category: "environment",
    title: "Nuevas iniciativas buscan recuperar espacios naturales urbanos",
    summary: "Las ciudades apuestan por zonas verdes y sostenibilidad",
    image: test_image,
    image_alt: "Parque urbano sostenible",
    texts: [
      "Numerosas ciudades están impulsando proyectos destinados a recuperar espacios naturales y aumentar las zonas verdes urbanas. Las autoridades consideran que estas iniciativas son fundamentales para mejorar la calidad de vida.",

      "Los nuevos parques y jardines también ayudan a reducir la contaminación ambiental y combatir las altas temperaturas provocadas por el crecimiento urbano.",

      "Vecinos y organizaciones medioambientales han participado activamente en campañas de reforestación y actividades relacionadas con el cuidado de espacios públicos.",

      "Expertos en urbanismo sostenible aseguran que las ciudades del futuro necesitarán integrar más naturaleza dentro de su planificación para hacer frente al cambio climático.",

      "Además de los beneficios ecológicos, estas áreas verdes fomentan actividades deportivas, culturales y sociales entre los ciudadanos.",

      "Algunas administraciones también están instalando sistemas de riego inteligente y energías renovables para reducir el impacto ambiental de los nuevos proyectos.",

      "Analistas consideran que la sostenibilidad urbana se convertirá en una prioridad cada vez más importante durante los próximos años.",
    ],
  },

  {
    id: 12,
    category: "gaming",
    title: "La industria del videojuego alcanza cifras históricas",
    summary: "El sector continúa creciendo con nuevos lanzamientos y torneos",
    image: test_image,
    image_alt: "Videojuegos y esports",
    texts: [
      "La industria del videojuego continúa creciendo a nivel mundial y alcanza cifras históricas de ingresos y participación. Nuevos lanzamientos y competiciones internacionales han impulsado enormemente la popularidad del sector.",

      "Los esports también han experimentado un crecimiento espectacular, reuniendo millones de espectadores en plataformas digitales y eventos presenciales.",

      "Desarrolladores independientes y grandes estudios compiten por ofrecer experiencias más inmersivas gracias a tecnologías como la realidad virtual y la inteligencia artificial.",

      "Muchos jugadores destacan la importancia de las comunidades online y el aspecto social que ofrecen los videojuegos modernos.",

      "Especialistas consideran que el sector se ha consolidado como una de las industrias culturales y tecnológicas más importantes del mundo.",

      "Las empresas continúan invirtiendo en nuevos motores gráficos y servicios en la nube para mejorar la experiencia de juego.",

      "Analistas creen que el crecimiento de los videojuegos continuará acelerándose durante los próximos años gracias al avance tecnológico y al aumento del público global.",
    ],
  },
];
