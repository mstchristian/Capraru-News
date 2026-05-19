import "./dropdown-link.css";

function DropdownLink({ children, href }: { children: any; href: string }) {
  return (
    <a className="dropdown__link" href={href}>
      {children}
    </a>
  );
}

export default DropdownLink;
