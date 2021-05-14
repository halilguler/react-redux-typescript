import {ActionType} from "../action-types";

interface Insert {
    type: ActionType.INSERT
    payload: number,
}

interface Delete {
    type: ActionType.DELETE,
    payload: number,
}

interface Alter {
    type: ActionType.ALTER,
}

export type Action = Insert | Delete | Alter