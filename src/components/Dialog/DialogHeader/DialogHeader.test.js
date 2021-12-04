import { render, screen } from "@testing-library/react";
import DialogHeader from "./DialogHeader";

it("render same text passed into title props", async () => {
  render(<DialogHeader title="testTitle" />);
  const title = screen.getByText("testTitle");
  expect(title).toBeInTheDocument();
});
