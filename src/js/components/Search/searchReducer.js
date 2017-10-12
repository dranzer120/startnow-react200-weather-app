import { types } from './searchActions';

const defaultState = {
    input: ''
};

export default function searchReducer (state = defaultState, action) {
  
  const { type, payload } = action;

  switch (type) {
    case types.UPDATE_INPUT: {
      return {
        ...state,
        input: payload.input
      };
    }
    
    default: {
      return state;
    }
  }
}