import "./new.css";

function New({ children, category }: { children: any; category?: string }) {
  return (
    <div className="new">
      {category && <div className="new__category">{category}</div>}
      {children}
    </div>
  );
}

export default New;
