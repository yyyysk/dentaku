import { INPUT_NUMBER, INPUT_OPERATOR } from './actionTypes.js';

export const inputNumber = (number) => {

  return {
    type: INPUT_NUMBER,
    number
  }
};

export const inputOperator = (operator) => {

  return {
    type: INPUT_OPERATOR,
    operator
  }
};

