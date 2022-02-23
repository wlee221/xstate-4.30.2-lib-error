import { assign, createMachine, interpret } from "xstate";

interface ToggleContext {
  count: number;
}

const toggleMachine = createMachine<ToggleContext>({
  id: "toggle",
  initial: "inactive",
  context: {
    count: 0,
  },
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      entry: assign({ count: (ctx) => ctx.count + 1 }),
      on: { TOGGLE: "inactive" },
    },
  },
});

const service = interpret(toggleMachine).start();