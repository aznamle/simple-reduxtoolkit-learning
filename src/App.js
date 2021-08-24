import { useState, useEffect } from 'react';

import './App.css';

import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import List from './components/List';
import SeasonList from './components/SeasonList';

function App() {

  // const [watchList, setWatchList] = useState([])
  // const [seasonList, setSeasonList] = useState([])


  // useEffect(() => {
  //   getSeasonList()
  // }, [])

  
  // const getSeasonList = async() => {
  //   const res = await fetch('https://api.jikan.moe/v4/seasons/2021/fall')
  //   const data = await res.json()

  //   setSeasonList(data.data)
  // }

  // const setWatch = (show) => {
  //   setWatchList(state => {
  //     const showExists = (state.filter(item => show.mal_id === item.mal_id).length > 0)

  //     if(showExists) {
  //       state = [...state]
  //     } else {
  //       state = [...state, show]
  //     }
      
  //     return state
  //   })
  // }
  return (
    <div className="App">
      {/* <Profile />
      <Login /> */}
      {/* <ChangeColor /> */}
      {/* <List /> */}

      {/* {seasonList.map(item => (
        <div>
          <p>{item.title}</p>
          <button onClick={() => setWatch(item)}>set watch</button>
        </div>
      ))} */}

      <SeasonList />

    </div>
  );
}

export default App;
