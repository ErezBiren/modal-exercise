import { render, screen } from "@testing-library/react";
import DialogContent from "./DialogContent";

it("render same text passed into title props", async () => {
  render(<DialogContent>test content</DialogContent>);
  const content = screen.getByText("test content");
  expect(content).toBeInTheDocument();
});
