import "./category-search-bar.css";

function CategorySearchBar({ children }: { children: any }) {
  return (
    <div className="category-search">
      <div className="category-search__container">{children}</div>
    </div>
  );
}

export default CategorySearchBar;
