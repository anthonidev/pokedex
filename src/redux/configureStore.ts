import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slice/alertSlice";
import pokemonReducer from "./slice/pokemonSlice";

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        prokemon: pokemonReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch