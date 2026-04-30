import "./link-list.css";
import "./left-link-list.css";

function LeftLinkList({ children }: { children: any }) {
  return (
    <ul className="site-navbar__link-list site-navbar__link-list--left">
      {children}
    </ul>
  );
}

export default LeftLinkList;
