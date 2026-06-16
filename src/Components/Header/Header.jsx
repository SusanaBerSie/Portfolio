import i18n from "../../Utils/i18n.js";
import "./header.css";
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import susanaFoto from "../../Images/susanaFoto.png";

function Header() {
    const { t } = useTranslation();

    return (
        <div className="header">
            <div className="header__container">
            <div className="header__content">
                <h1 className="header__title1">Susana</h1>
                <h1 className="header__title2">Bernal</h1>
                <p className="header__subtitle">{i18n.t("// DESARROLLADORA FULLSTACK")}</p>
                <p className="header__text">{i18n.t("Bióloga, uniendo naturaleza y y código para construir tecnología al servicio del medio ambiente")}</p>
                <div className="header__buttons">
                  <button className="header__button-projects">{i18n.t("Ver proyectos ->")}</button>   
                <button className="header__button-contact">{i18n.t("Contactarme")}</button>  
                </div>
                
            </div>
            <img src={susanaFoto} alt="Susana Bernal foto" className="header__photo" />
            </div>
        </div>
    )
}

export default Header;