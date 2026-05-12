import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import CenterLinkList from "./components/navbar/link-lists/CenterLinkList";
import LeftLinkList from "./components/navbar/link-lists/LeftLinkList";
import LinkListContainer from "./components/navbar/LinkListContainer";
import DefaultLink from "./components/navbar/links/DefaultLink";
import NavbarTitle from "./components/navbar/NavbarTitle";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import Dropdown from "./components/navbar/dropdown/Dropdown";
import DropdownButton from "./components/navbar/dropdown/DropdownButton";
import DropdownContent from "./components/navbar/dropdown/DropdownContent";
import DropdownLink from "./components/navbar/dropdown/DropdownLink";
import { useDropdown } from "./hooks/useDropdown";
import { categories, categoryLabels } from "./data/newsData";
import NewsArticle from "./pages/NewsArticle";

function App() {
  const { activeDropdownId, toggleDropdown } = useDropdown();

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
            <Dropdown>
              <DropdownButton
                onClick={() => toggleDropdown("categories-dropdown")}
              >
                Categorías
              </DropdownButton>
              <DropdownContent
                id="categories-dropdown"
                isOpen={activeDropdownId === "categories-dropdown"}
              >
                {categories.slice(1, 4).map((category) => (
                  <DropdownLink key={category}>
                    {categoryLabels[category]}
                  </DropdownLink>
                ))}
              </DropdownContent>
            </Dropdown>
            <DefaultLink href="/contact-us">Contáctanos</DefaultLink>
          </CenterLinkList>
        </LinkListContainer>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
