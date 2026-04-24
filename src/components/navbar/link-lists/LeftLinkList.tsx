import "./link-list.css";
import "./left-link-list.css";

function LeftLinkList({ children }: { children: any }) {
  return <ul className="left-link-list link-list">{children}</ul>;
}

export default LeftLinkList;
