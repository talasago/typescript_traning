import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton";

test("The display of ON/OFF change with click the button", async () => {
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button");
  expect(simpleButton).toHaveTextContent("OFF");
  userEvent.click(simpleButton);
  // waitFor()を入れることでGreenになった。
  // act()を入れるのでもいいのかもしれない。こちらは未確認
  await waitFor(() => {
    expect(simpleButton).toHaveTextContent("ON");
  });
});
