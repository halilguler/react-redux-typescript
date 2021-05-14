import {ActionType} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";

export const insertMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INSERT,
            payload: amount,
        })
    }
}

export const deleteMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE,
            payload: amount,
        })
    }
}

export const alterMoney = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ALTER,
        })
    }
}