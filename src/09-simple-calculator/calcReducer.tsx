export default function calcReducer(
  state: { number1: number; number2: number; result: number },
  action: { type: string; text?: number }
) {
  switch (action.type) {
    case "selectedNumber1": {
      return {
        ...state,
        number1: action.text ? action.text : 0,
      };
    }
    case "selectedNumber2": {
      return {
        ...state,
        number2: action.text ? action.text : 0,
      };
    }
    case "added": {
      return {
        ...state,
        result: state.number1 + state.number2,
      };
    }
    case "subtract": {
      return {
        ...state,
        result: state.number1 - state.number2,
      };
    }
    case "reset": {
      return {
        number1: 0,
        number2: 0,
        result: 0,
      };
    }
    default: {
      return state;
    }
  }
}
