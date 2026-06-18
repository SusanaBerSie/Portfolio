import i18n from "../../Utils/i18n.js";
import "./contact.css";
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    return (
        <div className="contact">
            <div className="contact__container">
             <p className="contact__subtitle">{i18n.t("// HABLEMOS")}</p>  
             <h1 className="contact__title">Contacto</h1>
             <p className="contact__text">{i18n.t("¿Tienes alguna idea en mente? Escribeme y vemos cómo podemos hacerla realidad.")}</p>
             <div className="contact__content">
                <div className="contact__form">
                    <div className="contact__form-row">
                        <input className="contact__input" type="text" placeholder={i18n.t("Tu nombre")} />
                        <input className="contact__input" type="text" placeholder={i18n.t("¿En que puedo ayudarte?")} />
                    </div>
                    <input className="contact__input" type="email" placeholder={i18n.t("tu@correo.com")} />
                    <textarea className="contact__textarea" placeholder={i18n.t("Describe tu idea o propuesta")}></textarea>
                    <button className="contact__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                            <path fill="none" d="M0 0h14v14H0z"/>
                            <path fill="currentColor" fillRule="evenodd" d="M13.959.848a.625.625 0 0 0-.807-.807L.402 4.916a.625.625 0 0 0-.025 1.158L5.65 8.35l2.276 5.273a.625.625 0 0 0 1.158-.025zm-8.1 6.232L2.284 5.535l10.009-3.827-3.827 10.009L6.92 8.14l2.485-2.485a.75.75 0 0 0-1.06-1.06z" clipRule="evenodd"/>
                        </svg>
                        {i18n.t("Enviar")}</button>
                </div>
             </div>
            </div>
        </div>
    );
}

export default Contact;