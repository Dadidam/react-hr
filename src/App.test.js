import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders landing page", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "GO!" });
  expect(button).toBeInTheDocument();
});

test("displays profile photo fetched from the server", async () => {
  render(<App />);
  fireEvent.click(screen.getByText("GO!"));

  // check if avatar displayed
  const avatar = await screen.findByRole("img", { class: "card-img-top" });
  expect(avatar).toBeInTheDocument();

  // check if ACCEPT button exists
  const acceptBtn = screen.getByRole("button", {
    name: "ACCEPT"
  });
  expect(acceptBtn).toBeInTheDocument();

  // check if REJECT button exists
  const rejectBtn = screen.getByRole("button", {
    name: "REJECT"
  });
  expect(rejectBtn).toBeInTheDocument();

  // check if counter increased after ACCEPT button click
  fireEvent.click(acceptBtn);
  fireEvent.click(acceptBtn);
  fireEvent.click(acceptBtn);
  const counter = screen.getByText("3");
  expect(counter).toBeInTheDocument();
});
