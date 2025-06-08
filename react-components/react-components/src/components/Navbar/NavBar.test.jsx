import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Navbar from "./Navbar";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Navbar />);
  // screen.debug();

  // ACT
  // await userEvent.click(screen.getByText("Load Greeting"));
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});
