import {NavLink} from 'react-router-dom';
import StyledMenu from './styles/StyledMenu.jsx';
// un componente Menu
const Menu = ({ open }) => {
    return (
      // Ocupa al componente StyledMenu
      <StyledMenu open={open}>
        <NavLink to="/">
          <div className="menu-item">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
          </svg>
          Home
          </div>
          
        </NavLink>
        <NavLink to="/Puntuaciones">
          <span role="img" aria-label="Puntuaciones">💸</span>
          Puntuaciones
          </NavLink>
        <NavLink to="/Perfiles">
          <span role="img" aria-label="Perfiles">📩</span>
          Perfiles
          </NavLink>
        <NavLink to="/Juego">
          <span role="img" aria-label="Juego">📩</span>
          Juego
          </NavLink>
        <NavLink to="/Administracion">
          <span role="img" aria-label="Administracion">📩</span>
          Administracion
          </NavLink>
      </StyledMenu>
    )
  }
export default Menu;