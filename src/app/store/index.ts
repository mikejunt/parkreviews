import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import * as Reducers from './reducers';
  
  
  export interface AppState {
        selectedpark: Reducers.ParkSelectState,
        activeuser: Reducers.ActiveUserState
  }
  
  export const reducers: ActionReducerMap<AppState> = {
      selectedpark: Reducers.saveSelectedPark,
      activeuser: Reducers.saveActiveUser
  }
  
  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
  