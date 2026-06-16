import i18n from "../../Utils/i18n.js";
import "./aboutMe.css";
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import susanaFoto from "../../Images/su_llano.jpg";

function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className="aboutMe">
            <div className="aboutMe__container">
                <img src={susanaFoto} alt="Susana Bernal foto" className="aboutMe__photo" />
                <div className="aboutMe__content">
                    <p className="aboutMe__subtitle">{i18n.t("// BIÓLOGA   x   DESARROLLADORA")}</p>
                    <h1 className="aboutMe__title">{i18n.t("Sobre mí")}</h1>
                    <p className="aboutMe__text">{i18n.t("Soy desarrolladora full stack con formación en biología y más de 6 años de experiencia en investigación. Combino pensamiento científico y código para crear soluciones digitales sostenibles y accesibles, con foco en impacto ambiental.")}</p>
                    <div className="aboutMe__boxes">
                        <div className="aboutMe__box">
                            <h2 className="aboutMe__box-title aboutMe__box-title-verde">
                                {i18n.t("BIO")}
                            </h2>
                            <p className="aboutMe__box-text">{i18n.t("Research ° Conservation")}</p>
                        </div>

                        <div className="aboutMe__box">
                            <h2 className="aboutMe__box-title aboutMe__box-title-naranja">
                                {i18n.t("CODE")}
                            </h2>
                            <p className="aboutMe__box-text">{i18n.t("Web ° Fullstack")}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutMe;