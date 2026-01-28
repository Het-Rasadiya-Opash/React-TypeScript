import { render, screen } from "@testing-library/react";
import Auth from "./Auth";

test("shows welcome when logged in", () => {
  render(<Auth isLoggedIn={true} />);
  expect(screen.getByText("Welcome")).toBeInTheDocument();
});

test("shows login when logged out", () => {
  render(<Auth isLoggedIn={false} />);
  expect(screen.getByText("Login Please")).toBeInTheDocument();
});
