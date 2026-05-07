import "./new.css";

function New({ children, category }: { children: any; category?: string }) {
  return (
    <div className="new">
      {children}
      {category && <div className="new__category">{category}</div>}
    </div>
  );
}

export default New;
