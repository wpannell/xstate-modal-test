import { Machine } from "xstate";

const modalMachine = Machine({
  id: "modal",
  initial: "closed",
  states: {
    closed: {
      on: { OPEN: "open" }
    },
    open: {
      on: { CLOSE: "closed" }
    }
  }
});

export default modalMachine;
