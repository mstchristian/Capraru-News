import "./app.css";
import CenterLinkList from "./components/navbar/link-lists/CenterLinkList";
import LeftLinkList from "./components/navbar/link-lists/LeftLinkList";
import RightLinkList from "./components/navbar/link-lists/RightLinkList";
import DefaultLink from "./components/navbar/links/DefaultLink";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar>
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
      </Navbar>
    </>
  );
}

export default App;
