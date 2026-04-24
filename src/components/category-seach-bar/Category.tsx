import "./category.css";

function Category({ children }: { children: any }) {
  return (
    <a href="#" className="category">
      {children}
    </a>
  );
}

export default Category;
