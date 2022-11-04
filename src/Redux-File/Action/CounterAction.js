// increment counter
export const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

// decrement counter
export const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

// reset counter
export const resetAction = () => {
  return {
    type: "RESET",
  };
};

// payload example
export const increaseBy5 = (value) => {
  return {
    type: "INCREASEBY5",
    payload: value,
  };
};
