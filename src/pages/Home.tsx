import Category from "../components/category-seach-bar/Category";
import CategorySearchBar from "../sections/CategorySearchBar";

function Home() {
  return (
    <CategorySearchBar>
      <Category>Deportes</Category>
      <Category>Tecnología</Category>
      <Category>Entretenimiento</Category>
      <Category>Educación</Category>
      <Category>Películas</Category>
    </CategorySearchBar>
  );
}

export default Home;
