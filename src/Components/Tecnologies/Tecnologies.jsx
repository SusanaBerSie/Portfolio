import "./tecnologies.css";
import logoCSS from "../../Images/css.svg";
import logoExpress from "../../Images/express.svg";
import logoFigma from "../../Images/figma.svg";
import logoHTML from "../../Images/html.svg";
import logoJavaScript from "../../Images/javascript.svg";
import logoMongoDB from "../../Images/mongo.svg";
import logoNode from "../../Images/node.svg";
import logoPostman from "../../Images/postman.svg";
import logoReact from "../../Images/react.svg";
import logoVite from "../../Images/vite.svg";
import i18n from "../../Utils/i18n.js";
import React from "react";
import { useTranslation } from "react-i18next";

function Tecnologies() {
    const { t } = useTranslation();

    return (
        <div className="tecnologies">
            <p className="tecnologies__subtitle">{i18n.t("// MI STACK")}</p>
            <h1 className="tecnologies__title">{i18n.t("Tecnologías")}</h1>
            <div className="tecnologies__container">
                <div className="tecnologies__item">
                    <img src={logoHTML} alt="HTML logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">HTML5</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoCSS} alt="CSS logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">CSS3</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoJavaScript} alt="JavaScript logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">JavaScript</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoReact} alt="React logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">React</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoNode} alt="Node.js logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">Node.js</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoExpress} alt="Express logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">Express</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoMongoDB} alt="MongoDB logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">MongoDB</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoPostman} alt="Postman logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">Postman</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoVite} alt="Vite logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">Vite</p>
                </div>
                <div className="tecnologies__item">
                    <img src={logoFigma} alt="Figma logo" className="tecnologies__item-logo" />
                    <p className="tecnologies__item-name">Figma</p>
                </div>
            </div>
        </div>
    );
}

export default Tecnologies;