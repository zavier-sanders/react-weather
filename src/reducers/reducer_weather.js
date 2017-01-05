import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //never mutate state, instead create new array
      return [ action.payload.data, ...state ];
      // return state.concat([ action.payload.data ]);
  }
  return state;
}
