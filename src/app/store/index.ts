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
        selectedpark: Reducers.ParkSelectState
  }
  
  export const reducers: ActionReducerMap<AppState> = {
      selectedpark: Reducers.saveSelectedPark
  }
  
  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
  