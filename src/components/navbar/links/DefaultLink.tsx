import "./default-link.css";

function DefaultLink({
  children,
  href = "#",
}: {
  children: any;
  href?: string;
}) {
  return (
    <li className="link-holder">
      <a href={href} className="link">
        {children}
      </a>
    </li>
  );
}

export default DefaultLink;
