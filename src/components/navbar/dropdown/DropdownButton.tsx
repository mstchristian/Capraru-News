import type { MouseEventHandler } from "react";
import "./dropdown-button.css";

function DropdownButton({
  children,
  onClick,
}: {
  children: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="dropdown__button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default DropdownButton;
