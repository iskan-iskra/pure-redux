const createStore = (reducer) => {
  let state = reducer(undefined, { type: "__INIT__" });
  let subscribers = [];
  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      subscribers.forEach((cb) => cb());
    },
    subscribe: (cb) => {
      cb();
      subscribers.push(cb);
    },
  };
};
export { createStore };
