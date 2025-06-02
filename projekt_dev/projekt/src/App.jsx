import './App.css';
import { useState, useEffect } from 'react';
import PlayerStatus from './PlayerStatus.jsx';
import CharacterSelect from './CharacterSelect.jsx';

function App() {

  const [player, setPlayer] = useState(null);


  return (
    <div className="App">
      {!player ? (
        <CharacterSelect onSelect={setPlayer} />
        ):(
        <PlayerStatus character={player} />
        )}
      
    </div>
  );
}

export default App;
