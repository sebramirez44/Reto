import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from './Menu.jsx';
import Burger from './Burger.jsx';

import "./styles/TerniumHeader.css";
export default function TerniumHeader()  {
    // estado open, nos dice cuando se le dio click al burger
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <div className="TerniumHeader">
            <nav id="bar">
                <div className="left">
                    <div ref={node} className="burger">
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />

                    </div>
                    <span className="logo__icon icon" data-component="icon" data-icon="logo"><svg className="Ternium" viewBox="0 0 190 66" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#FFFFFF" d="M0 65.884h189.78V0H0z"></path><path fill="#FF3300" d="M41.705 28.687L3.775 40.1v22.012H56.31V46.827z"></path><path d="M87.747 35.702c-1.93 0-3.527.927-3.564 6.12h7.314c0-5.453-1.523-6.12-3.75-6.12zm88.028 16.8h-3.044v-12.98c0-1.891-.52-3.634-2.97-3.634-1.151 0-1.485.037-2.302.704-.891.742-1.04 2.596-1.04 3.3v12.61h-3.045v-12.98c0-1.891-.52-3.634-2.97-3.634-.927 0-2.19.556-2.636 1.26-.556.928-.705 2.04-.705 2.745v12.61h-3.045V37.667c0-1.298-.074-2.596-.185-3.894h3.23v2.337h.074c.89-2.003 2.488-2.707 4.678-2.707 1.708 0 3.675.704 4.382 2.41 1.039-2.002 2.747-2.41 4.455-2.41 1.968 0 5.123.445 5.123 4.858v14.242zm-29.404 0V50.24h-.111c-1.003 1.706-2.785 2.633-4.753 2.633-3.267 0-5.05-1.632-5.05-4.82v-14.28h3.044v12.981c0 2.263 1.04 3.783 3.193 3.783 1.634 0 3.677-1.224 3.677-4.34V33.773h3.044v14.835a45.7 45.7 0 0 0 .185 3.895h-3.23zM128.215 28.99h3.416v-3.264h-3.416v3.264zm.186 23.513h3.045v-18.73h-3.045v18.73zm-4.715 0h-3.045V39.522c0-2.003-.705-3.634-3.303-3.634-3.343 0-3.825 2.966-3.825 5.526v11.089h-3.044V37.667c0-1.298-.075-2.596-.186-3.894h3.23v2.411h.15c1.186-2.114 2.597-2.781 5.011-2.781 4.009 0 5.012 2.41 5.012 6.119v12.98zm-16.002-15.948c-.26-.037-.556-.074-.816-.111-.26-.037-.52-.075-.817-.075-3.379 0-4.233 2.56-4.233 5.081v11.053h-3.044v-18.73h3.044v2.82h.075c1.262-2.856 2.822-3.19 5.791-3.19v3.152zM94.727 44.12H84.183c0 5.23 1.41 6.268 3.787 6.268 2.08 0 3.156-1.668 3.267-3.56h3.342c-.038 4.154-2.599 6.045-6.535 6.045-3.973 0-7.128-1.187-7.128-9.457 0-5.489.631-10.013 7.128-10.013 5.346 0 6.683 2.93 6.683 9.123v1.594zm-18.192 8.383H73.12v-23.81h-6.366v-2.967H82.9v2.967h-6.365v23.81zm-15.76-48.73v58.339l125.228-.01V3.763l-125.229.01z" fill="#666666"></path><path fill="#FF9900" d="M3.776 36.288L23.79 15.392l32.52 18.293V3.773H3.775z"></path></g></svg></span>
                </div>
                
                
                
                <div className="iconbutton">
                <IconButton aria-label="delete" className="iconbutton">
                    <AccountCircleIcon className="svg_icon"/>
                </IconButton>
                </div>
                
            </nav>
        </div>
    );
}