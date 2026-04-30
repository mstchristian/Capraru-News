import "./link-list.css";
import "./center-link-list.css";

function CenterLinkList({ children }: { children: any }) {
  return (
    <ul className="site-navbar__link-list site-navbar__link-list--center">
      {children}
    </ul>
  );
}

export default CenterLinkList;
