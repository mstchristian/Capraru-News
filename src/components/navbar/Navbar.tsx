import "./navbar.css";

function Navbar({ children }: { children: any }) {
  return <nav className="site-navbar">{children}</nav>;
}

export default Navbar;
