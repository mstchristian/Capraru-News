import "./news-search-bar.css";

interface NewsSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function NewsSearchBar({ value, onChange }: NewsSearchBarProps) {
  return (
    <div className="news-search-bar">
      <div className="news-search-bar__container">
        <input
          type="text"
          placeholder="Buscar noticias por título..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="news-search-bar__input"
        />
      </div>
    </div>
  );
}

export default NewsSearchBar;
