import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSeasonList = createAsyncThunk(
    'getSeasonList',
    async () => {
        const res = await fetch('https://api.jikan.moe/v4/seasons/2021/fall')
        if(res.ok) {
            const seasonList = await res.json()
            return { seasonList }
        }
    }
)



export const AnimeSeasonSlice = createSlice({
    name: "seasonlist",
    initialState: [],
    reducers: {
    },
    extraReducers: {
        [getSeasonList.fulfilled]: (state, action) => {
            return action.payload.seasonList
        }
    }
})

export const { setWatch } =AnimeSeasonSlice.actions
export default AnimeSeasonSlice.reducer