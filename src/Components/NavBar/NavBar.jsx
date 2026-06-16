import i18n from "../../Utils/i18n.js";
import "./NavBar.css";
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import logo from "../../Images/susanaLogo.png";

function NavBar() {
  const { t, i18n } = useTranslation();
  //const { lang, setLang} = useI18n();

return (
    <div className="navBar">
        <img src={logo} alt="susanaLogo" className="navBar__logo" />
        <div className="navBar__items">
         <h1 className="navBar__item">{i18n.t("Inicio")}</h1>
         <h1 className="navBar__item">{i18n.t("Sobre mí")}</h1>
         <h1 className="navBar__item">{i18n.t("Proyectos")}</h1>
         <h1 className="navBar__item">{i18n.t("Tecnologías")}</h1>        
         <h1 className="navBar__item">{i18n.t("Contacto")}</h1>    
        </div>
        <button className="navBar__button-languaje" onClick={() => i18n.changeLanguage("es")}>{/* {lang === "es" ? "EN" : "ES" }*/}</button>
         </div>
)
}

export default NavBar;