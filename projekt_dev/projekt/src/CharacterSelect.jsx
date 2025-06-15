import React, {useState, useEffect} from "react";
import classesData from "./data/character.json"
import {CharacterView} from "./Status.jsx";

function CharacterSelect ({ onSelect }){
    const [classes, setClasses] = useState({});

    useEffect(()=>{
        setClasses(classesData);
    },[]);

    return(
        <div>
            <h3>Wybierz postać: </h3>
            <div style={{display: "flex", justifyContent: "space-evenly" }}>
                {Object.entries(classes).map(([key, charData]) => (
                    <div style={{width: "150px", border: "solid 3px gray" }}> 
                        <CharacterView character={charData}/> 
                        <button key={key} onClick={() => onSelect({...charData})} >Wybierz</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
//"center"
export default CharacterSelect;