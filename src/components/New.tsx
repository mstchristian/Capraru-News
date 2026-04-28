import "./new.css";

function New({ title, children }: { title: string; children: any }) {
  return (
    <div className="new">
      <div className="new-content">
        <h2 className="new-title">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default New;
