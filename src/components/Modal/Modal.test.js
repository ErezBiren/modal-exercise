import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

it("backdrop should be displayed", () => {
  render(<Modal open>hello world</Modal>);
  const backdropElement = screen.getByTitle("backdrop-root");
  expect(backdropElement).toBeInTheDocument();
});

it("backdrop should not be displayed if hideBackdrop=true", () => {
  render(
    <Modal hideBackdrop open>
      hello world
    </Modal>
  );
  const backdropElement = screen.queryByTitle("backdrop-root");
  expect(backdropElement).not.toBeInTheDocument();
});
