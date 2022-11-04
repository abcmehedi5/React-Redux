// initial Reducer
const initialCounter = {
  count: 0,
};

// reducer function
const CounterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };

      // example payload
    case "INCREASEBY5":
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};
export default CounterReducer;
