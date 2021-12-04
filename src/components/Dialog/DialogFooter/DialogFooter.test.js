import { render, screen } from "@testing-library/react";
import DialogFooter from "./DialogFooter";



it("render same text passed into title props", async () => {
  render(
    <DialogFooter
      actions={[
        { id: "1", name: "Confirm", callback: () => {} },
        { id: "2", name: "Cancel", callback: () => {} },
        { id: "3", name: "Cancel2", callback: () => {} },
      ]}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  // console.log(buttonElements);
  expect(buttonElements.length).toBe(3);
});
