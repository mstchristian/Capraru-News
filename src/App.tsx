import "./app.css";
import Category from "./components/category-seach-bar/Category";
import CenterLinkList from "./components/navbar/link-lists/CenterLinkList";
import LeftLinkList from "./components/navbar/link-lists/LeftLinkList";
import RightLinkList from "./components/navbar/link-lists/RightLinkList";
import LinkListContainer from "./components/navbar/LinkListContainer";
import DefaultLink from "./components/navbar/links/DefaultLink";
import NavbarTitle from "./components/navbar/NavbarTitle";
import CategorySearchBar from "./sections/CategorySearchBar";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <NavbarTitle>Capraru</NavbarTitle>
        <LinkListContainer>
          <LeftLinkList>
            <DefaultLink>Inicio</DefaultLink>
          </LeftLinkList>
          <CenterLinkList>
            <DefaultLink>Noticias</DefaultLink>
            <DefaultLink>Categorías</DefaultLink>
            <DefaultLink>Contáctanos</DefaultLink>
          </CenterLinkList>
          <RightLinkList>
            <DefaultLink>Cuenta</DefaultLink>
          </RightLinkList>
        </LinkListContainer>
      </Navbar>
      <CategorySearchBar>
        <Category>Deportes</Category>
        <Category>Tecnología</Category>
        <Category>Entretenimiento</Category>
        <Category>Educación</Category>
        <Category>Películas</Category>
      </CategorySearchBar>
    </>
  );
}

export default App;
