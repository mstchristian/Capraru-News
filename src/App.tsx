import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import CenterLinkList from "./components/navbar/link-lists/CenterLinkList";
import LeftLinkList from "./components/navbar/link-lists/LeftLinkList";
import RightLinkList from "./components/navbar/link-lists/RightLinkList";
import LinkListContainer from "./components/navbar/LinkListContainer";
import DefaultLink from "./components/navbar/links/DefaultLink";
import NavbarTitle from "./components/navbar/NavbarTitle";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <Navbar>
        <NavbarTitle>Capraru</NavbarTitle>
        <LinkListContainer>
          <LeftLinkList>
            <DefaultLink href="/">Inicio</DefaultLink>
          </LeftLinkList>
          <CenterLinkList>
            <DefaultLink href="/news">Noticias</DefaultLink>
            <DefaultLink>Categorías</DefaultLink>
            <DefaultLink href="/contact-us">Contáctanos</DefaultLink>
          </CenterLinkList>
          <RightLinkList>
            <DefaultLink href="/account">Cuenta</DefaultLink>
          </RightLinkList>
        </LinkListContainer>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
