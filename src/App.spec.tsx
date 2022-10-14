import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App test", () => {
  test("App title", async () => {
    const { getByTestId } = render(<App />);
    const title = await waitFor(() => getByTestId("title").textContent);
    expect(title).toBe("Open Modal with XState");
  });

  test("Open modal", async () => {
    const { getByTestId } = render(<App />);
    const btn = await waitFor(() => getByTestId("button"));
    fireEvent.click(btn);
    const modal = await waitFor(() => getByTestId("modal"));
    expect(modal).toBeInTheDocument();
  });

  test("Close modal", async () => {
    const { getByTestId } = render(<App />);
    const btn = await waitFor(() => getByTestId("button"));
    fireEvent.click(btn);
    const modal = await waitFor(() => getByTestId("modal"));
    const btnCloseModal = await waitFor(() => getByTestId("btn-close-modal"));
    fireEvent.click(btnCloseModal);
    expect(modal).not.toBeInTheDocument();
  });
});
