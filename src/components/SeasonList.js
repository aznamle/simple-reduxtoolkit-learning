import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSeasonList } from '../redux/AnimeSeasonSlice'

function SeasonList() {

    const dispatch = useDispatch()
    const anime = useSelector(state => state.anime)

    useEffect(() => {
        dispatch(getSeasonList())
    }, [dispatch])

    return (
        <div>
            {anime.data.map(item => (
                <div>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default SeasonList
