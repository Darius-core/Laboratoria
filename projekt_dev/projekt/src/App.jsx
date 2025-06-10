import './App.css';
import { useState, useEffect } from 'react';
import PlayerStatus, {EnemyStatus} from './Status.jsx';
import CharacterSelect from './CharacterSelect.jsx';
import enemiesData from './data/enemy.json';

function App() {

  const [player, setPlayer] = useState(null);
  const [enemy, setEnemy] = useState(null);
  const [log, setLog] = useState([]);

  useEffect(() =>{
    if(player){
      const enemyKeys = Object.keys(enemiesData);
      const randomKey = enemyKeys[Math.floor(Math.random()*enemyKeys.length)];
      const selectedEnemy = enemiesData[randomKey];
      setEnemy({ ...selectedEnemy });
    }
  }, [player])

  const handleAttack = () => {
    if(!enemy || !player) return;

    const logEntry = [];

    const enemyDodge = Math.random() < enemy.dodge/100;
    if(enemyDodge){
      logEntry.push(`${enemy.name} unika ataku!`)
    }else{
      const damageToEnemy = Math.max(0, player.attack - enemy.defense);
      const newEnemyHP = Math.max(0, enemy.hp - damageToEnemy);
  
      logEntry.push(`${player.name} zadaje ${damageToEnemy} obrażeń ${enemy.name}`);
    }

    let newPlayerHP = player.hp;
    if(newEnemyHP > 0){
      
      const playerDodge = Math.random() < player.dodge/100;
      if(playerDodge){
        logEntry.push(`${player.name} unika ataku przeciwnika!`)
      }else{
        const damageToPlayer = Math.max(0, enemy.attack - player.defense);
        newPlayerHP = Math.max(0, player.hp - damageToPlayer);
  
        logEntry.push(`${enemy.name} zadaje ${damageToPlayer} obrażeń ${player.name}`);
      }
    }

    setEnemy(prev => ({...prev, hp:newEnemyHP}));
    setPlayer(prev => ({...prev, hp:newPlayerHP}));
    setLog(prev => ({...prev, ...logEntry}));
  }

  return (
    <div className="App">
      {!player ? (
        <CharacterSelect onSelect={setPlayer} />
        ):(
        <div> 
          <div style={{display: "flex", justifyContent: "space-between"}}> 
            <div style={{border: "solid 3px gray"}}>
              
              <PlayerStatus character={player} />
            </div>
            <div style={{border: "solid 3px red"}}>
              
              {enemy && <EnemyStatus enemy={enemy} />}
            </div>
          </div>
          {enemy?.hp > 0 || player?.hp > 0 && (
            <button onClick={handleAttack} style={{marginTop: "20px"}} >Atakuj</button>
          )}

          {enemy?.hp === 0 || player?.hp === 0 && ( 
            <div style={{marginTop: "20px", fontWeight: "bold"}} >
              {enemy?.hp === 0 ? `Pokonałeś ${enemy.name}!` : `${player.name} został pokonany...`}
            </div>
          )}

          <div style={{marginTop: "20px"}}>
            <h4>Historia Walki:</h4>
            <ul>
              {log.map((entry, index) => (
                <li key={index}>{ entry }</li>
              ))}
            </ul>
          </div>


        </div>
        )}
    </div>
  );
}

export default App;
