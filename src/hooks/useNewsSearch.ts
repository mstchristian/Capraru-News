import { useMemo, useState } from "react";
import { newsItems } from "../data/newsData";

export function useNewsSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = useMemo(() => {
    if (!searchTerm.trim()) {
      return newsItems;
    }

    return newsItems.filter((news) =>
      news.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredNews,
  };
}
