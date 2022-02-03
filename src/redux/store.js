import { act } from 'react-test-renderer';
import { createStore } from 'redux';

const initialState = {
  loading: false,
  name: 'Axel Berkati',
  adress: 'Palangka Raya',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
