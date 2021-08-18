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

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Pokemon } from './types'

// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })