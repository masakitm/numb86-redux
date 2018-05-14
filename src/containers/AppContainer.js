import { connect } from 'react-redux';
import App from '../components/App';

// actionCreators
import { incActionCreator, decActionCreator, mulActionCreator, divActionCreator } from '../actions';

// for connect
const mapStateToProps = state => ({ counter: state.math.counter });
const mapDispatchToProps = dispatch => ({
  incCounter(value) {
    dispatch(incActionCreator(value));
  },
  decCounter(value) {
    dispatch(decActionCreator(value));
  },
  mulCounter(value) {
    dispatch(mulActionCreator(value));
  },
  divCounter(value) {
    dispatch(divActionCreator(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
