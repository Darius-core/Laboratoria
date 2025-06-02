import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PlayerStatus from './PlayerStatus';




function App() {

  const [player, setPlayer] = useState({});



  return (
    <div className="App">
      <PlayerStatus player={player} />
    </div>
  );
}

export default App;
