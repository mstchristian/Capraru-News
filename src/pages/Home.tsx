import "./home.css";
import Category from "../components/category-search-bar/Category";
import CategorySearchBar from "../components/category-search-bar/CategorySearchBar";
import New from "../components/new/New";
import NewContent from "../components/new/NewContent";
import NewSummary from "../components/new/NewSummary";
import NewImage from "../components/new/NewImage";
import NewText from "../components/new/NewText";
import NewTitle from "../components/new/NewTitle";
import NewPreview from "../components/new-preview/NewPreview";
import NewsSection from "../components/layout/NewsSection";
import NewsPreviewSection from "../components/layout/NewsPreviewSection";
import { useNewsFilter } from "../hooks/useNewsFilter";
import { categoryLabels } from "../data/newsData";
import NoNewsText from "../components/layout/no-news/NoNewsText";
import NoPreviewsText from "../components/layout/no-news/NoPreviewsText";

function Home() {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredNews,
    filteredPreviews,
  } = useNewsFilter();

  return (
    <div className="home">
      <CategorySearchBar>
        {categories.map((category) => (
          <Category
            key={category}
            selected={selectedCategory === category}
            onSelect={() => setSelectedCategory(category)}
          >
            {categoryLabels[category] || category}
          </Category>
        ))}
      </CategorySearchBar>
      <div className="home__content">
        <div className="home__left-section">
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
        <div className="home__right-section">
          <NewsPreviewSection>
            {filteredPreviews.length > 0 ? (
              filteredPreviews.map((preview) => (
                <NewPreview
                  key={preview.id}
                  image_src={preview.image_src}
                  image_alt={preview.image_alt}
                >
                  {preview.title}
                </NewPreview>
              ))
            ) : (
              <NoPreviewsText />
            )}
          </NewsPreviewSection>
        </div>
      </div>
    </div>
  );
}

export default Home;
