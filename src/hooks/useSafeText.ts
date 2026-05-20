import type { ChangeEvent } from "react";

export function useSafeText() {
  const sanitizeText = (value: string) => {
    return value.replace(
      /(<[^>]*>|<\/?[a-z][\s\S]*>|function\s*\(|const\s|let\s|var\s|=>|import\s|export\s|script|style|javascript:|{|}|;)/gi,
      "",
    );
  };

  const handleSafeInput =
    (callback: (value: string) => void) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = sanitizeText(e.target.value);
      callback(value);
    };

  return {
    sanitizeText,
    handleSafeInput,
  };
}
