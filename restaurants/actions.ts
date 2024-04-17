// actions.ts
// Create Actions: Define action types and action creators.

export const SET_RESTAURANTS = "SET_RESTAURANTS";

export const setRestaurants = (restaurants: string[]) => ({
  type: SET_RESTAURANTS,
  payload: restaurants,
});
