import {combineReducers} from 'redux';
import SampleReducer from './sampleReducer';

// this is the list of final reducers
export default combineReducers({
	sampleReducer: SampleReducer,
});
