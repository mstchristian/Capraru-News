import "./category.css";

function Category({ children }: { children: any }) {
  return (
    <a href="#" className="category-search__pill">
      {children}
    </a>
  );
}

export default Category;
