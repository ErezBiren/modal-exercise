import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

it("backdrop should be displayed", () => {
  render(<Modal open>hello world</Modal>);
  const children = screen.getByTitle("backdrop-root");
  expect(children).toBeInTheDocument();
});

it("backdrop should not be displayed if hideBackdrop=true", () => {
  render(
    <Modal hideBackdrop open>
      hello world
    </Modal>
  );
  const children = screen.queryByTitle("backdrop-root");
  expect(children).not.toBeInTheDocument();
});
