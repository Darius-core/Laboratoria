import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PlayerStatus from './PlayerStatus';




function App() {

  const [player, setPlayer] = useState({
        name: "",
        level: 1,
        exp: 0,
        hp: 100,
        maxHP: 100,
        mp: 50,
        maxMP: 50,
        atack: 5,
    });



  return (
    <div className="App">
      <PlayerStatus player={player} />
    </div>
  );
}

export default App;
