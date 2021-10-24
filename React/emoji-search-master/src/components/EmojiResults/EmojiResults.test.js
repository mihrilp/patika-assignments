import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EmojiResults from "./EmojiResults";

test("header", async () => {
  render(<EmojiResults />);
  const items = await screen.findAllByText(/^[0-9]+$/);
  expect(items).toHaveLength(20);
});
