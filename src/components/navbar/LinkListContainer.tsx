import "./link-list-container.css";

function LinkListContainer({ children }: { children: any }) {
  return <div className="site-navbar__links">{children}</div>;
}

export default LinkListContainer;
