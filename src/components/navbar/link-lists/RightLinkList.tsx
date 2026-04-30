import "./link-list.css";
import "./right-link-list.css";

function RightLinkList({ children }: { children: any }) {
  return (
    <ul className="site-navbar__link-list site-navbar__link-list--right">
      {children}
    </ul>
  );
}

export default RightLinkList;
