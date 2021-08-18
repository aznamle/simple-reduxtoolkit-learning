import './App.css';

import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      <List />
    </div>
  );
}

export default App;
