import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dataForReset: '',

}


const resetPasswordSlice = createSlice({
    name: "resetPassword", initialState: initialState,
    reducers: {
        setResetData: (state, action) => {

            state.dataForReset =action.payload.dataForReset

        }
    }
})

export const {setResetData} = resetPasswordSlice.actions

export default resetPasswordSlice.reducer