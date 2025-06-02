import React from "react";

export default function EnemyStatus({enemy}){
    

    return(
        <div>
            <h4>{enemy.name}</h4>
            <p>Poziom: {enemy.level} </p>
            <p>Życie: {enemy.hp} / {enemy.maxHP} </p>
            <p>Magia: {enemy.mp} / {enemy.maxMP} </p>
            <p>Atak: {enemy.attack} </p>
            <p>Obrona: {enemy.defense} </p>
        </div>
    )
}