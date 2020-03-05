import { createReducer } from "@ngrx/store";
import { setSelectedPark } from '../actions';
import { on } from '@ngrx/store'

export interface ParkSelectState {
    selectedpark: string
}

export const initialParkSelectState: ParkSelectState = {
        selectedpark: "1"
}



const parkselectreducer = createReducer(initialParkSelectState,
    on(setSelectedPark, (state, { parkid }) => ({...state, selectedpark: parkid}))
);


export function saveSelectedPark(state, action) {
    return parkselectreducer(state, action)
}