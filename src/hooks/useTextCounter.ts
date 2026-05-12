import { useState, type ChangeEvent } from "react";

export const useTextCounter = (maxLength: number) => {
  const [text, setText] = useState("");

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;

    if (inputText.length <= maxLength) {
      setText(inputText);
    } else {
      setText(inputText.slice(0, maxLength));
    }
  };

  return {
    text,
    handleTextChange,
    currentLength: text.length,
  };
};
