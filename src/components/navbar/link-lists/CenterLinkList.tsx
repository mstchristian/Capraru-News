import "./link-list.css";
import "./center-link-list.css";

function CenterLinkList({ children }: { children: any }) {
  return <ul className="center-link-list link-list">{children}</ul>;
}

export default CenterLinkList;
