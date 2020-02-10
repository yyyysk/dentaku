import { connect } from 'react-redux';
import App from '../component/App';
import { inputNumber } from '../redux/actions';

const mapStateToProps = (state) => {

  return {
    number: state.numbers.number
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    inputNumber(number) {
      dispatch(inputNumber(number));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

