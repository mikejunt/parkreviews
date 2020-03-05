import { createAction, props } from '@ngrx/store';


export const setSelectedPark = createAction(
    '[PARK SELECTION] Set Park Selected In Menu',
    props<{parkid: string}>()
)
