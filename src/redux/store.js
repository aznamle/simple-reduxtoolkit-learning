import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import themeReducer from "./themeSlice";
import pokemonReducer from './pokemonSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        pokemon: pokemonReducer,
        

    },
})