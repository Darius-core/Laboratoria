import React, {useState, useEffect} from 'react';
import PlayerStatus, {EnemyStatus} from '../Status';
import enemiesData from '../data/enemy.json';
import {doc, setDoc} from 'firebase/firestore';
import {db, auth} from '../firebase.js';

const gainExp = (player, expAmount) => {
    let updatePlayer = { ...player};
    updatePlayer.exp += expAmount;
    
    const logMessage = [`${player.name} zdobywa ${expAmount} expa!`];

    while(updatePlayer.exp > updatePlayer.expToNextLevel){
        updatePlayer.exp -= updatePlayer.expToNextLevel;
        updatePlayer.level += 1;
        updatePlayer.expToNextLevel = Math.floor(updatePlayer.expToNextLevel * 1.5);

        updatePlayer.maxHP += 10;
        updatePlayer.attack += 2;
        updatePlayer.defense += 1;
        updatePlayer.dodge += 1;

        logMessage.push(`${player.name} awansuje na poziom ${updatePlayer.level}!`)
    }

    return{ updatePlayer, logMessage};
}

function BattleSys({player, setPlayer, onBattleEnd}){

    const [enemy, setEnemy] = useState(null);
    const [log, setLog] = useState([]);


    // ------------------------------ Losowanie przeciwnika
    useEffect(() =>{
        
        const enemyKeys = Object.keys(enemiesData);
        const randomKey = enemyKeys[Math.floor(Math.random()*enemyKeys.length)];
        const selectedEnemy = enemiesData[randomKey];
        setEnemy({ ...selectedEnemy });
        
    }, []);

    // ------------------------------ sposób liczenia obrażeni z ataku
    const handleAttack = () => {
        if(!enemy || !player) return;

        const logEntry = [];

        let newEnemyHP = enemy.hp;
        const enemyDodge = Math.random() < enemy.dodge/100;
        if(enemyDodge){
            logEntry.push(`${enemy.name} unika ataku!`)
        }else{
            const damageToEnemy = Math.max(0, player.attack - enemy.defense);
            newEnemyHP = Math.max(0, enemy.hp - damageToEnemy);
        
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
        setLog(prev => [...prev, ...logEntry]);
    };

    const isBattleOver = enemy?.hp === 0 || player?.hp === 0;

    // ------------------------------ zakończenie walki i zapis do bazy
    useEffect(() => {
        if(isBattleOver){
            const processBattleEnd = async () => {
                if(enemy?.hp === 0){
                    const expGain = enemy.exp || 50;
                    const {updatePlayer, logMessage} = gainExp(player, expGain);
                    const uid = auth.currentUser?.uid;
                    if(uid && player.slotId){
                        console.log("Zapisuję postać do slota:", player.slotId, updatePlayer);
                        await setDoc(doc(db, "users", uid, "characters", player.slotId), updatePlayer);
                    }
                    setPlayer(updatePlayer);
                    setLog(prev => [...prev, ...logMessage]);
                }

                onBattleEnd(enemy?.hp === 0);
            };
        
            processBattleEnd();
        }

    }, [enemy?.hp, player?.hp]);

    return(
        
        <div> 
          <div style={{display: "flex", justifyContent: "space-between"}}> 
            <div style={{border: "solid 3px gray", width: "150px"}}>
              <PlayerStatus character={player} />
            </div>
            <div style={{border: "solid 3px red", width: "150px"}}>
              {enemy && <EnemyStatus enemy={enemy} />}
            </div>
          </div>

          {!isBattleOver && (
            <button onClick={handleAttack} style={{marginTop: "20px"}} >Atakuj</button>
          )}

          {isBattleOver && ( 
            <div style={{marginTop: "20px", fontWeight: "bold"}} >
              {enemy?.hp === 0 ? `Pokonałeś ${enemy.name}!` : `${player.name} został pokonany...`}
            </div>
          )}

          <div style={{marginTop: "20px", width: "320px", position: "fixed", right: "5px", bottom:"5px"}}>
            <h4>Historia Walki:</h4>
            <div style={{height: "100px", overflow: "auto"}}>
              <ul style={{"list-style": "square "}}>
                {log.map((entry, index) => (
                  <li key={index}>{ entry }</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    )
}

export default BattleSys;