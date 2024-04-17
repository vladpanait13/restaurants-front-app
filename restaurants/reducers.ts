// reducers.ts
// Create Reducers: Define reducers to handle actions and update the state.

import { SET_RESTAURANTS } from "./actions";

interface AppState {
  restaurants: string[];
}

const initialState: AppState = {
  restaurants: [],
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
