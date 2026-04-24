import "./link-list.css";
import "./right-link-list.css";

function RightLinkList({ children }: { children: any }) {
  return <ul className="right-link-list link-list">{children}</ul>;
}

export default RightLinkList;
