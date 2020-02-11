import { connect } from 'react-redux';
import App from '../component/App';
import { inputNumber, inputOperator, calculate, allClear } from '../redux/actions';

const mapStateToProps = (state) => {

  return {
    number: state.numbers.number,
    numbers: state.numbers.numbers,
    operators: state.numbers.operators
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    inputNumber(number) {
      dispatch(inputNumber(number));
    },
    inputOperator(operator) {
      dispatch(inputOperator(operator));
    },
    calculate(result) {
      dispatch(calculate(result));
    },
    allClear() {
      dispatch(allClear());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

