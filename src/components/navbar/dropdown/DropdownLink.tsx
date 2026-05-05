import "./dropdown-link.css";

function DropdownLink({ children }: { children: any }) {
  return (
    <a className="dropdown__link" href="#">
      {children}
    </a>
  );
}

export default DropdownLink;
