import { combineReducers } from 'redux';
import itineraryReducer from './itineraryReducer';

const reducers = combineReducers({
  itinerary: itineraryReducer,
});

export default reducers;