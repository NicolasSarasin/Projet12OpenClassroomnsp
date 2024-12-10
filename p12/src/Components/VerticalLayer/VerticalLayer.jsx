import "../../project.css";
import React from "react";
//import { Link } from "react-router-dom";
function VerticalLayer(){
    return (
        <div className="VerticalLayer">
            <div className="verticalLayer">
                <div className="href">
                    <a href="#"><img src="./Images/icon.png" alt="ImageNav1" className="logo2"/></a>
                    <a href="#"><img src="./Images/icon (1).png" alt="ImageNav2" className="logo2"/></a>
                    <a href="#"><img src="./Images/icon (2).png" alt="ImageNav3" className="logo2"/></a>
                    <a href="#"><img src="./Images/icon (3).png" alt="ImageNav4" className="logo2"/></a>
                </div>
                <p className="Copiryght">Copiryght, SportSee 2020</p>
            </div>
        </div>
    )
}
export default VerticalLayer;