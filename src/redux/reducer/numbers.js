import { INPUT_NUMBER } from '../actionTypes';

const initialState = {
  number: '' 
}

export default function numbers(state = initialState, action) {
  switch(action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        number: action.number
      };

    default:
      return state;
  }
};

