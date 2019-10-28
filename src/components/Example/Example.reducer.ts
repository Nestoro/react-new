import { SOMETHING_FAILED, SOMETHING_HAPPENED_SUCCESSFULLY } from '../../utilities/ActionTypes';

export default function logReducer(state = {}, action: any) {
	switch (action.type) {

		case SOMETHING_HAPPENED_SUCCESSFULLY:
			return {
				...state, ...action.data, somethingHappeningStatus: 'successful',
			};
		case SOMETHING_FAILED:
			return {
				...state, ...action.data, somethingHappeningStatus: 'failed',
			};
		default:
			return state;
	}
}
