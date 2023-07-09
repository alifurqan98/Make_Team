import { createSlice } from "@reduxjs/toolkit";

const TeamReducer = createSlice({
    name: "team",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            state.push(item);
            console.log(item);
        },
        deleteCard: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addToCart, deleteCard } = TeamReducer.actions;
export default TeamReducer.reducer;
