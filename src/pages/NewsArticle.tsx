import { Link, useParams } from "react-router-dom";
import { categoryLabels, newsItems } from "../data/newsData";
import New from "../components/new/New";
import NewContent from "../components/new/NewContent";
import NewText from "../components/new/NewText";
import NewImage from "../components/new/NewImage";
import NewSummary from "../components/new/NewSummary";
import NewTitle from "../components/new/NewTitle";
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

  return (
    <div className="news-article">
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
  );
}

export default NewsArticle;
