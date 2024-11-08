import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarCollapse: false,
    isDarkModal: false,
}

const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        // Define your reducers here
        sidebarCollapser: (state) => {
            state.sidebarCollapse = !state.sidebarCollapse;
        },
        toggleDarkModal: (state) => {
            state.isDarkModal =!state.isDarkModal;
        },
        // Add more reducers as needed
    },
})

export const { sidebarCollapser,toggleDarkModal } = AppSlice.actions
export default AppSlice.reducer
