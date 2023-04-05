import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";

test("The display of ON/OFF change with click the button", () => {
  render(<SimpleButton/ >);
  const simpleButton = screen.getByRole("button");
  expect(simpleButton).toHaveTextContent("OFF");
});
