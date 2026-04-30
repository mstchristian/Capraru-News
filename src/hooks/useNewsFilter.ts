import { useMemo, useState } from "react";
import { categories, newsItems, previewItems } from "../data/newsData";

export function useNewsFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNews = useMemo(() => {
    if (selectedCategory === "all") {
      return newsItems;
    }
    return newsItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const filteredPreviews = useMemo(() => {
    if (selectedCategory === "all") {
      return previewItems;
    }
    return previewItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredNews,
    filteredPreviews,
  };
}
