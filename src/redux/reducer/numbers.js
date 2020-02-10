import { INPUT_NUMBER, INPUT_OPERATOR } from '../actionTypes';

const initialState = {
  numbers: [],
  number: '' ,
  operators: []
}

export default function numbers(state = initialState, action) {
  switch(action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        number: action.number
      };

    case INPUT_OPERATOR:
      return {
        ...state,
        numbers: state.numbers.concat(new Array(state.number)),
        operators: state.operators.concat(new Array(action.operator))
      };

    default:
      return state;
  }
};

