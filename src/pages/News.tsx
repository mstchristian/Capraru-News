import NewsSection from "../components/layout/NewsSection";
import NewContent from "../components/new/NewContent";
import NewTitle from "../components/new/NewTitle";
import { categoryLabels, newsItems } from "../data/newsData";
import New from "../components/new/New";
import NewSummary from "../components/new/NewSummary";
import NewImage from "../components/new/NewImage";
import NewText from "../components/new/NewText";
import NoNewsText from "../components/layout/no-news/NoNewsText";

function News() {
  return (
    <div className="news">
      <NewsSection>
        {newsItems.length > 0 ? (
          newsItems.map((news) => (
            <New key={news.id} category={categoryLabels[news.category]}>
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
          ))
        ) : (
          <NoNewsText />
        )}
      </NewsSection>
    </div>
  );
}

export default News;
