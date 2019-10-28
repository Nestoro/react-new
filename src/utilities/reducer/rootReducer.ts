import {combineReducers} from 'redux';
import SampleReducer from '../../components/Example/Example.reducer';

// this is the list of final reducers
export default combineReducers({
	sampleReducer: SampleReducer,
});
