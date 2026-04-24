import "./default-link.css";

function DefaultLink({ children }: { children: any }) {
  return (
    <li className="link-holder">
      <a href="#" className="link">
        {children}
      </a>
    </li>
  );
}

export default DefaultLink;
