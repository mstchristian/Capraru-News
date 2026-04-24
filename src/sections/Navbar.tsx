import "./navbar.css";

function Navbar({ children }: { children: any }) {
  return <nav className="navbar">{children}</nav>;
}

export default Navbar;
