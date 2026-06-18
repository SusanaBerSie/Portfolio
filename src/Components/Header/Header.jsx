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
                  <button className="header__button-projects">{i18n.t("Descargar CV")}
                    <svg className="header__button-projects__icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path fill="currentColor" d="M11.625 15.513q-.175-.063-.325-.213l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062-.375-.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"/>
                    </svg>
                  </button>   
                   <button className="header__button-contact">{i18n.t("Contactarme")}
                    <svg className="header__button-contact__icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037-.262-.037-.263-.113L4 8v10h16zm-8 3 8-5H4zM4 8v.25-1.475.025V6v.8-.012V8.25zv10z"/>
                    </svg>
                    </button>  
                </div>
                
            </div>
            <img src={susanaFoto} alt="Susana Bernal foto" className="header__photo" />
            </div>
        </div>
    )
}

export default Header;