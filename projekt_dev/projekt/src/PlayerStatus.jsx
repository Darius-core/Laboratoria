import React, { useState } from "react";

function PlayerStatus({player}){
    

    return(
        <div>
            <h4>{player.name}</h4>
            <p>Poziom: {player.level} </p>
            <p>Życie: {player.hp} / {player.maxHP} </p>
            <p>: {player.mp} / {player.maxMP} </p>
            <p>Atak: {player.attack} </p>
        </div>
    )
}
export default PlayerStatus