import "./home.css";
import Category from "../components/category-seach-bar/Category";
import CategorySearchBar from "../sections/CategorySearchBar";
import New from "../components/new/New";
import NewContent from "../components/new/NewContent";
import NewSummary from "../components/new/NewSummary";
import NewImage from "../components/new/NewImage";
import NewText from "../components/new/NewText";
import NewTitle from "../components/new/NewTitle";
import NewPreview from "../components/new-preview/NewPreview";
import NewsSection from "../sections/NewsSection";
import NewsPreviewSection from "../sections/NewsPreviewSection";
import test_image from "../images/test_image.png";

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
          <NewsSection>
            <New>
              <NewContent>
                <NewTitle>Nueva IA revoluciona el desarrollo web</NewTitle>
              </NewContent>
              <NewContent>
                <NewSummary>
                  Herramientas inteligentes aceleran la creación de aplicaciones
                </NewSummary>
                <NewImage image_src={test_image} />
                <NewText>
                  Una nueva generación de inteligencia artificial está
                  transformando la forma en la que los desarrolladores crean
                  aplicaciones web. Estas herramientas permiten generar código,
                  detectar errores y optimizar rendimiento en tiempo real.
                </NewText>
                <NewText>
                  Empresas tecnológicas han comenzado a integrar estas
                  soluciones en sus flujos de trabajo, reduciendo
                  significativamente los tiempos de desarrollo y mejorando la
                  calidad del software.
                </NewText>
                <NewText>
                  Expertos aseguran que esta tendencia continuará creciendo,
                  marcando un antes y un después en la industria del desarrollo
                  web.
                </NewText>
              </NewContent>
            </New>
            <New>
              <NewContent>
                <NewTitle>Victoria histórica en la final de liga</NewTitle>
              </NewContent>
              <NewContent>
                <NewSummary>
                  Un partido emocionante se decide en los últimos minutos
                </NewSummary>
                <NewImage image_src={test_image} />
                <NewText>
                  El equipo local logró una victoria histórica tras un partido
                  muy igualado que se decidió en los últimos minutos con un gol
                  espectacular.
                </NewText>
                <NewText>
                  La afición celebró intensamente el resultado, que marca un
                  hito en la temporada y posiciona al equipo como uno de los
                  favoritos.
                </NewText>
              </NewContent>
            </New>
            <New>
              <NewContent>
                <NewTitle>Aumenta el uso de bicicletas en la ciudad</NewTitle>
              </NewContent>
              <NewContent>
                <NewSummary>
                  La movilidad sostenible gana protagonismo entre los ciudadanos
                </NewSummary>
                <NewImage image_src={test_image} />
                <NewText>
                  Cada vez más personas optan por la bicicleta como medio de
                  transporte diario, impulsando una movilidad más sostenible.
                </NewText>
                <NewText>
                  Las autoridades han ampliado los carriles bici y fomentan el
                  uso de este transporte con nuevas iniciativas.
                </NewText>
              </NewContent>
            </New>
          </NewsSection>
        </div>
        <div className="right-section">
          <NewsPreviewSection>
            <NewPreview image_src={test_image} image_alt="Nuevo smartphone">
              Nuevo smartphone promete revolucionar el mercado
            </NewPreview>
            <NewPreview image_src={test_image} image_alt="Energía renovable">
              Descubren avances clave en energía renovable
            </NewPreview>
            <NewPreview image_src={test_image} image_alt="Festival de música">
              Festival de música reúne a miles de personas
            </NewPreview>
            <NewPreview image_src={test_image} image_alt="Seguridad online">
              Nueva actualización mejora la seguridad online
            </NewPreview>
            <NewPreview image_src={test_image} image_alt="Centro deportivo">
              Apertura de centro deportivo en la ciudad
            </NewPreview>
            <NewPreview
              image_src={test_image}
              image_alt="Tendencias diseño web"
            >
              Tendencias en diseño web para 2026
            </NewPreview>
          </NewsPreviewSection>
        </div>
      </div>
    </div>
  );
}

export default Home;
