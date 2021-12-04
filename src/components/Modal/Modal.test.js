import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

it("backdrop should not be displayed if hideBackdrop=true", () => {
  render(
    <Modal hideBackdrop open>
      hellow world
    </Modal>
  );
  const children = screen.getByTitle("backdrop-root");
  console.log(children);
  expect(children).not.toBeInTheDocument();
});

// it("backdrop should be displayed if hideBackdrop=true is not specified", () => {
//   render(<Modal open>hellow world</Modal>);
//   const children = screen.getByTitle("backdrop-root");
//   expect(children).toBeInTheDocument();
// });
