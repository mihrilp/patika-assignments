import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EmojiResults from "./EmojiResults";

const testData = [
  {
    title: "Yum",
    symbol: "😋",
    keywords:
      "face savouring delicious food happy silly smiley emotion emotion sarcastic sarcastic good good",
  },
  {
    title: "Relieved",
    symbol: "😌",
    keywords: "relieved face smiley emotion emotion",
  },
  {
    title: "Heart Eyes",
    symbol: "😍",
    keywords:
      "smiling face with heart-shaped eyes happy smiley love sex heart eyes emotion emotion beautiful beautiful",
  },
  {
    title: "Kissing Heart",
    symbol: "😘",
    keywords: "face throwing a kiss smiley love sexy",
  },
];

test("Emoji results", () => {
  render(<EmojiResults emojiData={testData} />);
  const items = screen.getAllByRole("img");
  expect(items).toHaveLength(testData.length);
});
