import { counterReducer } from "./counter-reducer.js";
import { createStore } from "./redux.js";

export const appStore = createStore(counterReducer);
