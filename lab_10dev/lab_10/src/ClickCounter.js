import { useRef } from "react";

function ClickCounter(){

    const clickCount = useRef(0);

    const handleClick = () => {
        clickCount.current++;
        console.log("Kliknięć było: ", clickCount.current)
    }

    return(
        <div>
            <button onClick={handleClick} >Kliknij mnie :D</button>
        </div>
    )
}

export default ClickCounter;