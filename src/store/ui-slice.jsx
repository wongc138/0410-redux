import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui", 
    initialState: { cartIsVisible: false}, 
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
    })

export const uiActions = uiSlice.actions; // Export the actions for use in components
// The actions are functions that can be dispatched to update the state

export default uiSlice; // Export the reducer to be used in the store
// The reducer is a function that takes the current state and an action, and returns the new state