import { configureStore } from "@reduxjs/toolkit";
import TeamReducer from "./reducer";

export default configureStore({
    reducer: {
        team: TeamReducer,
    },
});
