import { connect } from 'react-redux';
import App from '../component/App';
import { inputNumber, inputOperator } from '../redux/actions';

const mapStateToProps = (state) => {

  return {
    number: state.numbers.number,
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

