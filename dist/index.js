import { assign, createMachine, interpret } from "xstate";
const toggleMachine = createMachine({
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
//# sourceMappingURL=index.js.map