import { useEffect, useMemo, useState } from "react";
import { categories, newsItems } from "../data/newsData";

export function useNewsFilter() {
  const getInitialCategory = () => {
    const hash = window.location.hash.replace("#", "");

    return categories.includes(hash) ? hash : "all";
  };

  const [selectedCategory, setSelectedCategory] =
    useState(getInitialCategory());

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      setSelectedCategory(categories.includes(hash) ? hash : "all");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filteredNews = useMemo(() => {
    return selectedCategory === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredNews,
    filteredPreviews: filteredNews,
  };
}
