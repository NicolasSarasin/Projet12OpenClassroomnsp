import "../../project.css";
import React from "react";
//import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="App">
            <header>
			    <div className="Logo_SoprtSee"><img src="./Images/Logo_SoprtSee.png" alt="Logo" className="logo"/><p>SportSee</p></div>
			    <a href="#">Accueil</a>
                <a href="#">Profil</a>
                <a href="#">Réglage</a>
                <a href="#">Communauté</a>
		    </header>
        </div>
    )
}
export default Header;