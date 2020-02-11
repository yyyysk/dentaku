import { INPUT_NUMBER, INPUT_OPERATOR, CALCULATE, ALL_CLEAR } from './actionTypes.js';

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

export const calculate = (result) => {

  return {
    type: CALCULATE,
    result
  };
};

export const allClear = () => {

  return {
    type: ALL_CLEAR
  };
};

