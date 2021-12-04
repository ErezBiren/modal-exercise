import { render, screen } from "@testing-library/react";
import Dialog from "./Dialog";

it("render same header passed into props", async () => {
  render(<Dialog open dialogHeader={<div>custom header</div>} />);
  const headerElement = screen.getByText("custom header");
  expect(headerElement).toBeInTheDocument();
});

it("render same content passed into props", async () => {
  render(<Dialog open dialogHeader={<div>custom content</div>} />);
  const contentElement = screen.getByText("custom content");
  expect(contentElement).toBeInTheDocument();
});

it("render same footer passed into props", async () => {
  render(<Dialog open dialogHeader={<div>custom footer</div>} />);
  const footerElement = screen.getByText("custom footer");
  expect(footerElement).toBeInTheDocument();
});
