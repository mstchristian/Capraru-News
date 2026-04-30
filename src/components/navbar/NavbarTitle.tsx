import "./navbar-title.css";

function NavbarTitle({ children }: { children: any }) {
  return <h1 className="site-navbar__title">{children}</h1>;
}

export default NavbarTitle;
