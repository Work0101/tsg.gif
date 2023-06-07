import {configureStore} from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import resetPasswordSlice from './resetPaswordSlice'

const store = configureStore({
    reducer:{language: languageSlice, resetPassword:resetPasswordSlice}
})

export default store