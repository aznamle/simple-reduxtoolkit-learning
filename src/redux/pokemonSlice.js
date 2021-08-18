import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getPokemon = createAsyncThunk(
    'getPokemon',
    async () => {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/')
        if(resp.ok) {
            const pokemon = await resp.json()
            return { pokemon }
        }
    }
)


export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: [],
    extraReducers: {
        [getPokemon.fulfilled]: (state, action) => {
            return action.payload.pokemon
        }
    }

})

export const { } = pokemonSlice.actions
export default pokemonSlice.reducer