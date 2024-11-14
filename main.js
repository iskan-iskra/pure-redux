import { appStore } from "./store.js";
import { decrementCounter, incrementCounter } from "./counter-reducer.js";

const counterElId = {
  wrapper: "Counter",
  state: "Counter_state",
  increment: "Counter_increment",
  decrement: "Counter_decrement",
};

const counterStateEl = document.getElementById(counterElId.state);
const counterWrapperEl = document.getElementById(counterElId.wrapper);

const renderCounterState = (count) => {
  counterStateEl.innerText = `Counter: ${count}`;
};

const withCounterData = (fn) => () => {
  const state = appStore.getState();
  fn(state.count);
};

appStore.subscribe(withCounterData(renderCounterState));

counterWrapperEl.addEventListener("click", (e) => {
  switch (e.target?.id) {
    case counterElId.increment:
      appStore.dispatch(incrementCounter());
      break;
    case counterElId.decrement:
      appStore.dispatch(decrementCounter());

      break;
    default:
      break;
  }
});
