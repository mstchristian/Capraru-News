import "./dropdown-content.css";

function DropdownContent({
  children,
  id,
  isOpen = false,
}: {
  children: any;
  id: string;
  isOpen?: boolean;
}) {
  return (
    <div
      className={`dropdown__content${isOpen ? " dropdown__content--visible" : ""}`}
      id={id}
    >
      {children}
    </div>
  );
}

export default DropdownContent;
