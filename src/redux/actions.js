import { INPUT_NUMBER } from './actionTypes.js';

export const inputNumber = (number) => {

  return {
    type: INPUT_NUMBER,
    number
  }
};

