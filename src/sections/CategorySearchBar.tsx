import "./category-search-bar.css";

function CategorySearchBar({ children }: { children: any }) {
  return (
    <div className="category-search-bar">
      <div className="categories-container">{children}</div>
    </div>
  );
}

export default CategorySearchBar;
