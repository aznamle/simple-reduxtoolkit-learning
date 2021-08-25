import React, { useContext, useState, useEffect } from 'react'

const animeContext = React.createContext()

const API = "https://api.jikan.moe/v4"

const [watchList, setWatchList] = useState([])
const [seasonList, setSeasonList] = useState([])

 const animeContext = ({ children }) => {


    async function getSeasonList() {
        const res = await fetch(`{${API}/seasons/2021/fall}`)
        const data = await res.json()
    
        setSeasonList(data.data)
    }

    const setWatch = (show) => {
        setWatchList(state => {
          const showExists = (state.filter(item => show.mal_id === item.mal_id).length > 0)
    
          if(showExists) {
            state = [...state]
          } else {
            state = [...state, show]
          }
          
          return state
        })
    }

    useEffect(() => {
        getSeasonList()
    }, [])

    return (
        <animeContext.Provider value={{
          getSeasonList,
          setWatch,
          watchList,
          seasonList  
        }}>
            {children}
        </animeContext.Provider>
    )
}

export { animeContext }