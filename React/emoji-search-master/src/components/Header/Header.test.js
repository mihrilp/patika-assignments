import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";

test("header", () => {
  render(<Header />);
});
