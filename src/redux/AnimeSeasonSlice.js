import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSeason = createAsyncThunk(
    'getSeason',
    async () => {
        const res = await fetch('https://api.jikan.moe/v4/seasons/2021/fall')
        if(res.ok) {
            const seasonList = await res.json()
            return { seasonList }
        }
    }
)
 


export const AnimeSeasonSlice = createSlice({
    name: "seasonList",
    initialState: [],
    reducers: {
        // setWatch: (state, action) => {
        //     const showExists = (state.filter(item => state.mal_id === item.mal_id).length > 0)
        //     if(showExists) {
        //         state = [...state]
        //       } else {
        //         state = [...state, state]
        //       }
              
        //       return { ...state, watchList: [action.payload, ...state.watchList]}
        // }
    },
    extraReducers: {
        [getSeason.fulfilled]: (state, action) => {
            return action.payload.seasonList;
        }
    }
})

export const { } = AnimeSeasonSlice.actions
export default AnimeSeasonSlice.reducer