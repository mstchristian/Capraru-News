import { Link, useParams } from "react-router-dom";
import { categoryLabels, newsItems } from "../data/newsData";
import New from "../components/new/New";
import NewContent from "../components/new/NewContent";
import NewText from "../components/new/NewText";
import NewImage from "../components/new/NewImage";
import NewSummary from "../components/new/NewSummary";
import NewTitle from "../components/new/NewTitle";
import NewPreview from "../components/new-preview/NewPreview";
import "./news-article.css";

function NewsArticle() {
  const { id } = useParams();
  const news = newsItems.find((item) => item.id === Number(id));

  if (!news) {
    return (
      <div>
        <p>Noticia no encontrada-</p>
        <Link to="/news">Volver a noticias</Link>
      </div>
    );
  }

  // Obtener noticias similares (misma categoría, excluyendo la actual)
  const similarNews = newsItems
    .filter((item) => item.category === news.category && item.id !== Number(id))
    .slice(0, 3); // Mostrar máximo 3 noticias similares

  return (
    <div className="news-article">
      <div className="news-article__left-section">
        <New category={categoryLabels[news.category]}>
          <NewContent>
            <NewTitle>{news.title}</NewTitle>
          </NewContent>
          <NewContent>
            <NewSummary>{news.summary}</NewSummary>
            <NewImage image_src={news.image} />
            {news.texts.map((text, index) => (
              <NewText key={index}>{text}</NewText>
            ))}
          </NewContent>
        </New>
      </div>
      <div className="news-article__right-section">
        <h3 className="news-article__similar-title">Noticias similares</h3>
        <div className="news-article__similar-grid">
          {similarNews.length > 0 ? (
            similarNews.map((item) => (
              <Link
                key={item.id}
                to={`/news-article/${item.id}`}
                className="news-article__similar-link"
              >
                <NewPreview
                  image_src={item.image}
                  image_alt={item.image_alt || item.title}
                >
                  {item.title}
                </NewPreview>
              </Link>
            ))
          ) : (
            <p className="news-article__no-similar">
              No hay noticias similares
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;
