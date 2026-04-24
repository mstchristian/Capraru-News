import "./app.css";
import CenterLinkList from "./components/navbar/link-lists/CenterLinkList";
import LeftLinkList from "./components/navbar/link-lists/LeftLinkList";
import RightLinkList from "./components/navbar/link-lists/RightLinkList";
import LinkListContainer from "./components/navbar/LinkListContainer";
import DefaultLink from "./components/navbar/links/DefaultLink";
import NavbarTitle from "./components/navbar/NavbarTitle";
import Navbar from "./Navbar";

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
    </>
  );
}

export default App;
