import * as types from '../actions/ActionTypes';

export default function logReducer(state = {}, action: any) {
	switch (action.type) {

		case types.SOMETHING_HAPPENED_SUCCESSFULLY:
			return {
				...state, ...action.data, somethingHappeningStatus: 'successful',
			};
		case types.SOMETHING_FAILED:
			return {
				...state, ...action.data, somethingHappeningStatus: 'failed',
			};
		default:
			return state;
	}
}
