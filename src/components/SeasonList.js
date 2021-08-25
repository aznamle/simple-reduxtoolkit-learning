import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSeason } from '../redux/AnimeSeasonSlice'

function SeasonList() {

    const dispatch = useDispatch()
    const { anime } = useSelector((state) => state.anime)

    useEffect(() => {
        dispatch(getSeason())
    }, [dispatch])

    console.log(anime)
    return (
        <div>
        {/* {seasonList.data.map(item => (
        <div>
          <p>{item.title}</p>
        </div>
        ))} */}
</div>
    )
}

export default SeasonList
