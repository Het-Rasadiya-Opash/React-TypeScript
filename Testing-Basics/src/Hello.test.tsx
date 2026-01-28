import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("renders greeting with name", () => {
  render(<Hello name="Het" />);

  const heading = screen.getByText("Hello, Het");
  expect(heading).toBeInTheDocument();
});
