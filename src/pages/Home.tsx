import "./home.css";
import Category from "../components/category-seach-bar/Category";
import CategorySearchBar from "../sections/CategorySearchBar";
import New from "../components/New";
import NewContent from "../components/new/NewContent";
import NewSummary from "../components/new/NewSummary";
import NewImage from "../components/new/NewImage";
import tres_aguas from "../images/news/tres-aguas.png";
import NewText from "../components/new/NewText";

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
          <New title="Sebastian David roba en el NewYorker">
            <NewContent>
              <NewSummary>Sebastian David roba en el NewYorker</NewSummary>
              <NewImage image_src={tres_aguas} />
              <NewText>Esto es un texto</NewText>
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
