import { useState } from "react";

function LoginForm(){
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Email: ${email} \n Hasło: ${password}`);
    };

    return(
        <div>
            <p>Formularz logowania</p>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email: "></input>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Hasło: "></input>
                <button type="submit" >Zaloguj się </button>
            </form>
        </div>
    )
}


export default LoginForm;