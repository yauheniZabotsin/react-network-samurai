import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const div = screen.getByRole(/main/i);
  expect(div).toBeInTheDocument();
});

test("renders without crashing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(<SamuraiJSApp tab="home" />);
  root.unmount();
});
