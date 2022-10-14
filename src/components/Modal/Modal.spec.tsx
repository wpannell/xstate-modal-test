import React from "react";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import { render, waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import Modal from "./Modal";

describe("Modal tests", () => {
  const setupMachine = initialState =>
    Machine({
      id: "modal",
      initial: initialState,
      states: {
        closed: {
          on: { OPEN: "open" }
        },
        open: {
          on: { CLOSE: "closed" }
        }
      }
    });

  test("Closed modal", async () => {
    const modalMachine = setupMachine("closed");
    const { result } = renderHook(() => useMachine(modalMachine));
    const { queryByTestId } = render(<Modal machine={result.current} />);
    expect(queryByTestId("modal")).toBeNull();
  });

  test("Open modal", async () => {
    const modalMachine = setupMachine("open");
    const { result } = renderHook(() => useMachine(modalMachine));
    const { getByTestId } = render(<Modal machine={result.current} />);
    const modal = await waitFor(() => getByTestId("modal"));
    expect(modal).toBeInTheDocument();
  });
});
