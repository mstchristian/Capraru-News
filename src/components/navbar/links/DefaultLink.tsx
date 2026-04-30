import "./default-link.css";

function DefaultLink({
  children,
  href = "#",
}: {
  children: any;
  href?: string;
}) {
  return (
    <li className="site-navbar__link-item">
      <a href={href} className="site-navbar__link">
        {children}
      </a>
    </li>
  );
}

export default DefaultLink;
