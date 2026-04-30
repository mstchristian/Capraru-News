import "./category.css";

function Category({
  children,
  selected = false,
  onSelect,
}: {
  children: any;
  selected?: boolean;
  onSelect?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`category-search__pill${selected ? " category-search__pill--selected" : ""}`}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}

export default Category;
