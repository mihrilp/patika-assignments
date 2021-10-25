import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EmojiResultRow from "./EmojiResultRow";

const testData = {
  title: "Kissing Heart",
  symbol: "😘",
  keywords: "face throwing a kiss smiley love sexy",
};

test("Render Emoji results row title", () => {
  const { container } = render(
    <EmojiResultRow title={testData.title} symbol={testData.symbol} />
  );
  const title = container.querySelector(".title");
  expect(title.textContent).toBe(testData.title);
});
