// Reducer
const math = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter + action.num,
      });
    case 'DEC_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter - action.num,
      });
    case 'MUL_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter * action.num,
      });
    case 'DIV_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter / action.num,
      });
    default:
      return state;
  }
};

export default math;
