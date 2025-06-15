import './App.css';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import Login from './Login.jsx';
import CharacterSlots from './CharacterSlots.jsx';
import Intro from './game/Intro.jsx';
import BattleSys from './game/BattleSys.jsx';
import StartStory from './game/StartStory.jsx';
import PostBattleStory from './game/PostBattleStory.jsx';


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
      {screen === "login" && (<Login onLogin={(user) => {setUser(user); setScreen("intro")}} />)}
      
      {screen === "intro" && (
        <Intro onStart={() => setScreen("slots")} />
      )}
      
      {screen === "slots" && user && (
        <CharacterSlots 
          user={user}
          onSelectCharacter={(character) => {
            setSelectedCharacter(character);
            setScreen("start-story");
          }}
        />
      )}

      {screen === "start-story" && selectedCharacter && (
        <StartStory 
        character={selectedCharacter}
        onContinue={() => setScreen("battle")}
        />
      )}

      {screen === "battle" && selectedCharacter && (
        <BattleSys 
          player={selectedCharacter}
          setPlayer={setSelectedCharacter}
          onBattleEnd={(victory) => {
            console.log("Bitwa zakończona: ", victory ? "Zwycięstwo" : "Porażka");
            if(victory){
              setScreen("post-battle-story");
            }else{
              setScreen("slots");
            }
            
          }} />
      )}

      {screen === "post-battle-story" && selectedCharacter && (
        <PostBattleStory 
        character={selectedCharacter}
        onContinue={() => setScreen("end")}
        />
      )}

      {screen === "end" && selectedCharacter && (
        <div>
          <div>
            Na chwilę obecną to tyle, pewnie będzie jeszce kontynuowany projekt...  ^_^
          </div>
          <button onClick={() => setScreen("slots")} >Powrót do wyboru postać </button>
          <button onClick={() => setScreen("battle")} >Powrót do walki </button>
          
        </div>
      )}

    </div>
  );
}

export default App;
