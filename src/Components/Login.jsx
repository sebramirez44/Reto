import {useState} from "react";
export default function Login({onLogIn}) {
    const [login, setLogin] = useState({username:"", password:""})
    async function handleLogIn(evt) {
        evt.preventDefault();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
        const response_data = response.json();
        // dependiendo de la respuesta que tengamos es si estas logged in, este solo es ejemplo
        if (response_data === "404") {
            console.log("credenciales invalidos")
        } else if (response_data === "200") {
            onLogIn();
        }

    }
    function handleChange(evt) {
        setLogin(currData => {
            currData[evt.target.name] = evt.target.value;
            return {...currData}
        })
    }
    return (
        <div className="backgroundLogin">
            <div className="login">
                <form action="">
                    <h1>Login</h1>
                    {/* hacer que el valor de cada uno sea un estado */}
                    {/* y que al cambiar el estado cambia el valor con onCHange */}
                    {/* onSubmit del boton se manda lo que hay en estos estaods como un objeto ig al API */}
                    {/* si el retorno de eso es dq ok o algo asi ya estas logged in. */}
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={login.username} onChange={handleChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={login.password} onChange={handleChange}/>
                    <button onClick={handleLogIn}>LogIn</button>
                </form>
                
                
            </div>
        </div>
    )
}