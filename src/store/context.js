import React, { createContext, useState, useEffect } from 'react'

const AnimeContext = createContext()

const API = "https://api.jikan.moe/v4"


const AnimeProvider = (props) => {

    const [watchList, setWatchList] = useState([])
    const [seasonList, setSeasonList] = useState([])

    async function getSeasonList() {
        const res = await fetch(`https://api.jikan.moe/v4/seasons/2021/fall}`)
        const data = await res.json()
    
        setSeasonList(data.data)
    }

    // function setWatch(show){
    //     setWatchList(state => {
    //       const showExists = (state.filter(item => show.mal_id === item.mal_id).length > 0)
    
    //       if(showExists) {
    //         state = [...state]
    //       } else {
    //         state = [...state, show]
    //       }
          
    //       return state
    //     })
    // }

    useEffect(() => {
        getSeasonList()
    }, [])

    return (
        <AnimeContext.Provider value={{
          getSeasonList,
          watchList,
          setWatchList,
          seasonList,
          setSeasonList
        }}>
            {props.children}
        </AnimeContext.Provider>
    )
}

export default { AnimeProvider, AnimeContext }