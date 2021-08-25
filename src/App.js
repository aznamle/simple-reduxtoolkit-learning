import { useState, useEffect, useContext } from 'react';

import './App.css';

// --------- REDUXTOOLKIT COMPONENTS -------------
// import Profile from './components/Profile';
// import Login from './components/Login';
// import ChangeColor from './components/ChangeColor';
// import List from './components/List';
// import SeasonList from './components/SeasonList';
// ------------------------------------------------

import AnimeContext from './store/context'

function App() {

  const { seasonList, watchList } = useContext(AnimeContext)


  console.log(seasonList)
  return (
    <div className="App">
      {/* <Profile />
      <Login /> */}
      {/* <ChangeColor /> */}
      {/* <List /> */}



    </div>
  );
}

export default App;
