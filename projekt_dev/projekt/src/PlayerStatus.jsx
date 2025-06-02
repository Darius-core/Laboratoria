import React from "react";

export default function PlayerStatus({character}){
    

    return(
        <div>
            <h4>{character.name}</h4>
            <p>Poziom: {character.level} </p>
            <p>Życie: {character.hp} / {character.maxHP} </p>
            <p>Magia: {character.mp} / {character.maxMP} </p>
            <p>Atak: {character.attack} </p>
            <p>Obrona: {character.defense} </p>
        </div>
    )
}

export function CharacterView({character}){
    
    return(
        <div>
            <h4>{character.name}</h4>
            <p>Poziom:  {character.level} </p>
            <p>Życie:  {character.maxHP} </p>
            <p>Magia:  {character.maxMP} </p>
            <p>Atak: {character.attack} </p>
            <p>Obrona: {character.defense} </p>
            <p>Unik: {character.dodge} </p>
        </div>
    )
}

