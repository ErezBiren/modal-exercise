import { render, screen } from "@testing-library/react";
import Backdrop from "./Backdrop";

it("render same background color passed into color props", async () => {
  render(<Backdrop color="red" />);
  const element = screen.getByTitle("backdrop-root");
  const style = window.getComputedStyle(element);
  expect(style.background).toBe("red");
});
