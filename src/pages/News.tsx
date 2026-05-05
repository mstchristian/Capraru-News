import { useState, useMemo } from "react";
import NewsSection from "../components/layout/NewsSection";
import NewContent from "../components/new/NewContent";
import NewTitle from "../components/new/NewTitle";
import { categoryLabels, newsItems } from "../data/newsData";
import New from "../components/new/New";
import NewSummary from "../components/new/NewSummary";
import NewImage from "../components/new/NewImage";
import NewText from "../components/new/NewText";
import NoNewsText from "../components/layout/no-news/NoNewsText";
import NewsSearchBar from "../components/news-search-bar/NewsSearchBar";

function News() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = useMemo(() => {
    if (!searchTerm.trim()) {
      return newsItems;
    }
    return newsItems.filter((news) =>
      news.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div className="news">
      <NewsSearchBar value={searchTerm} onChange={setSearchTerm} />
      <NewsSection>
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
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
