import { INPUT_NUMBER, INPUT_OPERATOR, CALCULATE, ALL_CLEAR } from '../actionTypes';

const initialState = {
  numbers: [],
  number: '' ,
  operators: []
}

export default function numbers(state = initialState, action) {
  switch(action.type) {
    // 数値入力
    case INPUT_NUMBER:
      return {
        ...state,
        number: action.number
      };

    // 演算子入力
    case INPUT_OPERATOR:
      return {
        ...state,
        number: '',
        numbers: state.numbers.concat(new Array(state.number)),
        operators: state.operators.concat(new Array(action.operator))
      };

    // 計算
    case CALCULATE:
      return {
        ...state,
        numbers: [],
        operators: [],
        number: action.result,
      };
      
    case ALL_CLEAR:
      return Object.assign({}, initialState);

    default:
      return state;
  }
};

