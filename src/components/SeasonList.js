import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSeasonList } from '../redux/AnimeSeasonSlice'

const SeasonList = () => {

    const dispatch = useDispatch()
    const seasonList = useSelector(state => state.seasonList)

    useEffect(() => {
        dispatch(getSeasonList())
    }, [dispatch])

    return (
        <div>
            
        </div>
    )
}

export default SeasonList
