import UnityComponent from "./UnityComponent.jsx"
import {useState} from 'react'
import "./styles/Juego.css"
export default function Juego() {
    // cambiar con url del api endpoint
    const url="localhost";
    // objeto que espero:
    // [{user: usuario, topScore: topScore},{user: usuario, topScore: topScore}]
    window.alert=()=>{};
    const [top, setTop] = useState([{user:"user", score: 123},{user:"user2",score:432}, {user:"user3",score:342},{user:"user4",score:214},{user:"user5",score:432}]);
    async function GetJugadores() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Request fallo con el codigo" + response.status);
            }
            const jugadores = await response.json();
            setTop(jugadores);
        } catch(error) {
            console.log(error);
        }
    }
    GetJugadores();
    
    
    return (
        <div className="Juego">
            <div className="rowContainer">
                <UnityComponent className="unity"/>
                <div className="jugadores">
                    <h1>Mejores Jugadores:</h1>
                    <ul>
                        {/* obtener estos de gamestat.topscore */}
                        {/* no se como se vera el objeto de javascript, asumo que un array de objetos */}
                        {top.map((item, index) => (
                            <li key={index}>{item.user}: {item.score}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="cursos">
                <h1>Mejores cursos para obtener puntos: </h1>
                <ul>
                    <li>Curso 1 - Breve descripcion - 100 puntos</li>
                    <li>Curso 2 - Breve descripcion - 200 puntos</li>
                    <li>Curso 3 - Breve descripcion - 399 puntos</li>
                </ul>
            </div>
        </div>
    )
}