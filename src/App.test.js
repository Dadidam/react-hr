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

  // check if APPROVE button exists
  const approveBtn = screen.getByRole("button", {
    name: "APPROVE"
  });
  expect(approveBtn).toBeInTheDocument();

  // check if REJECT button exists
  const rejectBtn = screen.getByRole("button", {
    name: "REJECT"
  });
  expect(rejectBtn).toBeInTheDocument();

  // check if counter increased after APPROVE button clicked
  fireEvent.click(approveBtn);

  const counter = screen.getByText("1");
  expect(counter).toBeInTheDocument();

  // now click 2 more times...
  fireEvent.click(approveBtn);
  fireEvent.click(approveBtn);
  // ... and 1 more on the REJECT button as well
  fireEvent.click(rejectBtn);

  // now the counter should be equal the number of total clicks we made
  const lastCounter = screen.getByText("4");
  expect(lastCounter).toBeInTheDocument();
});
