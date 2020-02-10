import { INPUT_NUMBER } from '../actionTypes';

const initialState = {
  number: 0
}

export default function numbers(state = initialState, action) {
  switch(type.action) {
    case INPUT_NUMBER:
      return {
        ...state,
        number: action.number
      };

    default:
      return state;
  }
};

