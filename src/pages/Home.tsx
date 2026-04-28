import "./home.css";
import Category from "../components/category-seach-bar/Category";
import CategorySearchBar from "../sections/CategorySearchBar";
import New from "../components/New";
import NewContent from "../components/new/NewContent";
import NewSummary from "../components/new/NewSummary";
import NewImage from "../components/new/NewImage";
import NewText from "../components/new/NewText";
import tres_aguas from "../images/news/tres-aguas.png";
import incendio_restaurante from "../images/news/incendio-restaurante.png";
import parque_urbano from "../images/news/parque-urbano.png";
import NewTitle from "../components/new/NewTitle";

function Home() {
  return (
    <div className="home">
      <CategorySearchBar>
        <Category>Deportes</Category>
        <Category>Tecnología</Category>
        <Category>Entretenimiento</Category>
        <Category>Educación</Category>
        <Category>Películas</Category>
      </CategorySearchBar>
      <div className="content">
        <div className="left-section">
          <New>
            <NewContent>
              <NewTitle>Robo en el NewYorker</NewTitle>
            </NewContent>
            <NewContent>
              <NewSummary>Sebastian David roba en el NewYorker</NewSummary>
              <NewImage image_src={tres_aguas} />
              <NewText>
                Un joven identificado como Sebastián David protagonizó un robo
                en una tienda de ropa de la cadena NewYorker durante la tarde
                del pasado viernes. El incidente tuvo lugar en un centro
                comercial concurrido, generando sorpresa entre clientes y
                empleados que se encontraban en el establecimiento en ese
                momento.
              </NewText>
              <NewText>
                Según testigos presenciales, el individuo accedió a la tienda
                con aparente normalidad y, tras recorrer varias secciones,
                sustrajo varios artículos sin realizar el pago correspondiente.
                Entre los objetos robados se encontrarían accesorios de valor
                moderado, lo que llevó a los trabajadores a alertar rápidamente
                al personal de seguridad.
              </NewText>
              <NewText>
                El sospechoso abandonó el local con rapidez, aprovechando un
                momento de distracción, lo que dificultó su detención inmediata.
                Sin embargo, las cámaras de seguridad del establecimiento
                habrían captado con claridad lo sucedido, y las autoridades ya
                se encuentran revisando las grabaciones para proceder con la
                identificación completa y posible localización del implicado.
              </NewText>
              <NewText>
                Fuentes cercanas a la investigación han señalado que no se
                registraron heridos ni incidentes violentos durante el suceso,
                aunque sí se ha reforzado la vigilancia en la zona para evitar
                hechos similares.
              </NewText>
              <NewText>
                El caso continúa en investigación, mientras se espera que en los
                próximos días se obtengan más detalles sobre lo ocurrido y las
                posibles consecuencias legales para el autor del robo.
              </NewText>
            </NewContent>
          </New>
          <New>
            <NewContent>
              Incendio controlado en un restaurante del centro
            </NewContent>
            <NewContent>
              <NewSummary>
                Un incendio obliga a desalojar un restaurante céntrico
              </NewSummary>
              <NewImage image_src={incendio_restaurante} />
              <NewText>
                Un incendio se declaró en la cocina de un restaurante situado en
                el centro de la ciudad durante la noche del sábado, provocando
                la rápida evacuación de clientes y trabajadores presentes en el
                local.
              </NewText>
              <NewText>
                Según fuentes oficiales, el fuego se originó por un fallo en uno
                de los electrodomésticos de cocina, lo que generó una gran
                cantidad de humo en pocos minutos. El personal actuó con
                rapidez, alertando a los servicios de emergencia.
              </NewText>
              <NewText>
                Los bomberos acudieron al lugar en cuestión de minutos y
                lograron controlar el incendio antes de que se propagara a otras
                zonas del establecimiento o edificios cercanos.
              </NewText>
              <NewText>
                Afortunadamente, no se registraron heridos, aunque varias
                personas tuvieron que ser atendidas por inhalación leve de humo
                en el lugar de los hechos.
              </NewText>
              <NewText>
                Las autoridades han iniciado una investigación para determinar
                las causas exactas del incidente, mientras el local permanecerá
                cerrado temporalmente para su reparación.
              </NewText>
            </NewContent>
          </New>
          <New>
            <NewContent>
              Nuevo parque urbano abre sus puertas al público
            </NewContent>
            <NewContent>
              <NewSummary>
                Un nuevo espacio verde impulsa el ocio al aire libre
              </NewSummary>
              <NewImage image_src={parque_urbano} />
              <NewText>
                El ayuntamiento ha inaugurado un nuevo parque urbano diseñado
                para fomentar el ocio y las actividades al aire libre entre los
                ciudadanos. La apertura tuvo lugar durante la mañana del domingo
                con una gran asistencia de vecinos.
              </NewText>
              <NewText>
                El espacio cuenta con zonas ajardinadas, áreas deportivas,
                parques infantiles y carriles para bicicletas, convirtiéndose en
                un punto de encuentro para personas de todas las edades.
              </NewText>
              <NewText>
                Durante la inauguración, representantes municipales destacaron
                la importancia de invertir en espacios verdes para mejorar la
                calidad de vida y promover hábitos saludables.
              </NewText>
              <NewText>
                Los asistentes pudieron disfrutar de actividades organizadas
                como talleres, música en directo y exhibiciones deportivas a lo
                largo del día.
              </NewText>
              <NewText>
                Este nuevo parque se suma a otras iniciativas similares que
                buscan transformar la ciudad en un entorno más sostenible y
                accesible para todos.
              </NewText>
            </NewContent>
          </New>
        </div>
        <div className="right-section">
          <p>Right</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
