const COUNTER_ACTION_TYPE = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const initialState = {
  count: 0,
};

export const incrementCounter = () => ({ type: COUNTER_ACTION_TYPE.INCREMENT });
export const decrementCounter = () => ({ type: COUNTER_ACTION_TYPE.DECREMENT });

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};
