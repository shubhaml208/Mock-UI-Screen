import { configureStore } from "@reduxjs/toolkit";
import { AppSlice } from "./indexes/Index";
import { useDispatch } from "react-redux";

const Store = configureStore({
    reducer: {
        // Define your reducers here
        app:AppSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default Store;