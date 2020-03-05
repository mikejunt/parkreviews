import { createAction, props } from '@ngrx/store';


export const setActiveUser = createAction(
    '[LOGIN-LOGOUT] Set Active User Name',
    props<{username: string}>()
)

export const clearActiveUser = createAction(
    '[LOGIN-LOGOUT] Clear Active User')
