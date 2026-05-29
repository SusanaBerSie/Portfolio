import i18n from "../../Utils/i18n";
import "./NavBar.css";
import React, {useState, useEffect} from "react";

function NavBar() {
return (
    <div className="navBar">
        <img src="" alt="susanaLogo" className="navBar__logo" />
        <h1 className="navBar__item">{i18n.t("Inicio")}</h1>
        <h1 className="navBar__item">{i18n.t("Sobre mí")}</h1>
        <h1 className="navBar__item">{i18n.t("Proyectos")}</h1>
        <h1 className="navBar__item">{i18n.t("Tecnologías")}</h1>        
        <h1 className="navBar__item">{i18n.t("Contacto")}</h1>    
        <button className="navBar__button-languaje" onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button className="navBar__button-languaje" onClick={() => i18n.changeLanguage("en")}>EN</button>   
    </div>
)
}

export default NavBar;