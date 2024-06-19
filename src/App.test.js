import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders weather dashboard", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
