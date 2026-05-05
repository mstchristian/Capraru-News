import { useCallback, useState } from "react";

export function useDropdown() {
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  const toggleDropdown = useCallback((id: string) => {
    setActiveDropdownId((currentId) => (currentId === id ? null : id));
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdownId(null);
  }, []);

  return {
    activeDropdownId,
    toggleDropdown,
    closeDropdown,
  };
}
