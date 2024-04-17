// store.ts
// Set up the Redux Store: Create the Redux store and combine reducers.

import { createStore } from "redux";
import appReducer from "./reducers";

export const store = createStore(appReducer);
