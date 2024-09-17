let initialSatte = 0;
export const ChnageMyNo = (state = initialSatte, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;
    case "DECREMENT":
      return state - 1;
      break;
    default:
      return state;
      break;
  }
};
