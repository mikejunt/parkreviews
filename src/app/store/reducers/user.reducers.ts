import { createReducer } from "@ngrx/store";
import { setActiveUser, clearActiveUser } from '../actions';
import { on } from '@ngrx/store'

export interface ActiveUserState {
    activeuser: string
}

export const initialActiveUserState: ActiveUserState = {
        activeuser: ""
}



const activeuserreducer = createReducer(initialActiveUserState,
    on(setActiveUser, (state, { username }) => ({...state, activeuser: username})),
    on(clearActiveUser, (state)=>({...initialActiveUserState}))
);


export function saveActiveUser(state, action) {
    return activeuserreducer(state, action)
}