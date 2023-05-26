import UnityComponent from "./UnityComponent.jsx"
import "./styles/Juego.css"
export default function Juego() {
    return (
        <div className="Juego">
            <div className="rowContainer">
                <UnityComponent className="unity"/>
                <div className="jugadores">
                    <h1>Mejores Jugadores:</h1>
                    <ul>
                        <li>Jugador1 - 300 puntos</li>
                        <li>Jugador2 - 290 puntos</li>
                        <li>Jugador3 - 280 puntos</li>
                        <li>Jugador4 - 210 puntos</li>
                        <li>Jugador5 - 150 puntos</li>
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