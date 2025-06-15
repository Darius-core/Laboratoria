import './App.css';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import Login from './Login.jsx';
import CharacterSlots from './CharacterSlots.jsx';

import BattleSys from './game/BattleSys.jsx';


function App() {

  const [user, setUser] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [screen, setScreen] = useState("login");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, [])

  return (
    <div className="App">
      {screen === "login" && (<Login onLogin={(user) => {setUser(user); setScreen("slots")}} />)}
      
      {screen === "slots" && user && (
        <CharacterSlots 
          user={user}
          onSelectCharacter={(character) => {
            setSelectedCharacter(character);
            setScreen("battle");
          }}
        />
      )}

      {screen === "battle" && selectedCharacter && (
        <BattleSys 
          player={selectedCharacter}
          setPlayer={setSelectedCharacter}
          onBattleEnd={(victory) => {
            console.log("Bitwa zakończona: ", victory ? "Zwycięstwo" : "Porażka");
            setScreen("story");
          }} />
      )}
    </div>
  );
}

export default App;
