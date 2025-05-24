import React, {useState} from "react";

function InputTracker(){
    const [text, setText] =useState('');

    return(
        <div>
            <label>Wpisz coś: </label>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <p>Wpisany tekst to: {text} </p>
        </div>
    )
}

export default InputTracker;