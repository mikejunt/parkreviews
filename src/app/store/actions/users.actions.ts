import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface'


export const setActiveUser = createAction(
    '[LOGIN-LOGOUT] Set Active User Name',
    props<{activeuser:User}>()
)

export const clearActiveUser = createAction(
    '[LOGIN-LOGOUT] Clear Active User')
