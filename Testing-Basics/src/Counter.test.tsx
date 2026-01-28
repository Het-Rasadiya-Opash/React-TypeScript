import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments count on button click", () => {
  render(<Counter />);

  const button = screen.getByText("+");
  fireEvent.click(button);

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
