import { createReducer } from "@ngrx/store";
import { setActiveUser, clearActiveUser } from '../actions';
import { on } from '@ngrx/store'

export interface ActiveUserState {
    activeusername: string,
    activeuserid: string,
    activeuserzip: string
}

export const initialActiveUserState: ActiveUserState = {
        activeusername: "",
        activeuserid: "",
        activeuserzip: ""
}



const activeuserreducer = createReducer(initialActiveUserState,
    on(setActiveUser, (state, { activeuser }) => ({...state, activeusername: activeuser.username, activeuserid: activeuser.id, activeuserzip: activeuser.zipcode})),
    on(clearActiveUser, (state)=>({...initialActiveUserState}))
);


export function saveActiveUser(state, action) {
    return activeuserreducer(state, action)
}
