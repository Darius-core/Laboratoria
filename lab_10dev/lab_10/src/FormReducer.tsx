import {useReducer} from "react";

const initialState = {name: "", email: ""}

function reducer(state: typeof initialState, action: any){
    switch(action.type){
        case "SET_NAME":
            return {...state, name: action.payload}
        case "SET_EMAIL": 
            return {...state, email: action.payload}
        default:
            return state
    }
}

function FormReducer(){
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <form>
                <input value={state.name} onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})} placeholder="Imie: "/>
                <input value={state.email} onChange={(e) => dispatch({type: "SET_EMAIL", payload: e.target.value})} placeholder="Email: "/>

            </form>
            <p> {JSON.stringify(state)} </p>
        </div>
    )
}

export default FormReducer