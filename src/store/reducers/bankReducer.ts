import {Action} from '../actions';
import {ActionType} from "../action-types";

const initialState = 0;

const reducers = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.INSERT:
            return state + action.payload;
        case ActionType.DELETE:
            return state - action.payload;
        case ActionType.ALTER:
            return 0;
        default:
            return state;
    }
}

export default reducers;