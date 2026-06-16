import i18n from "../../Utils/i18n.js";
import "./projects.css";
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import juncalProject from "../../Images/juncal.jpg";
import aroundProject from "../../Images/around.jpg";
import coffeeProject from "../../Images/coffee.jpg";

function Projects() {
    const { t } = useTranslation();
    const projectsCards = [
        {
            title: "Posada Rural EL JUNCAL",
            image: juncalProject,
            stack: ["HTML5", "CSS3", "Vite", "React", "API rest"],
            stackDescription: t("Página web para posada rural con detalles sobre servicios y actividades. Incluye links de contacto y API que muestra reseñas de visitantes."),
            roleDescription: t("Frontend con Vite y React. Diseño de componentes. Conexión con API de reseñas."),
            URLproject: "#",
            URLGitHub: "#",
        },
        {
            title: "Around the US",
            image: aroundProject,
            stack: ["React", "Node.js", "Vite", "JavaScript", "CSS3"],
            stackDescription: t("Aplicación web que incluye registro y autenticación de usuario. Premite compartir y dar like a fotos de diversos lugares de Colombia."),
            roleDescription: t("Desarrolladora fullstack — diseño del esquema de datos, autenticación, manejo de errores, info Tooltip."),
            URLproject: "#",
            URLGitHub: "#",
        },
        {
            title: "Coffee Shop",
            image: coffeeProject,
            stack: ["HTML5", "CSS3", "BEM Methodology"],
            stackDescription: t("Página de reservas para un café-estudio con detalles de servicios y posibilidad de reserva."),
            roleDescription: t("Diseño y desarrollo de frontend escalable con metodologia BEM. Elementos multimedia integrados para experiencia de usuario atractiva."),
            URLproject: "#",
            URLGitHub: "#",
        }
    ]

    return (
        <div className="projects">
         <div className="projects__container">
             <p className="projects__subtitle">{i18n.t("// TRABAJO SELECCIONADO")}</p>  
            <h1 className="projects__title">Proyectos</h1>
            <div className="projects__content">
                {projectsCards.map((project, index) => (
                    <div className="projects__card">
                        <div className="projects__card-main">
                            <img className="projects__card-image" src={project.image} alt="Project image" />
                            <h2 className="projects__card-title">{project.title}</h2>
                        </div>
                    <div className="projects__card-information">
                        <p className="projects__card-stack">STACK    
                            <div className="projects__card-stack-items">
                                {project.stack.map((item, index) => (
                                    <p className="projects__card-item" key={index}>
                                        {item}
                                    </p>
                                ))}
                            </div>                  
                        </p>
                        <p className="projects__card-description">{project.stackDescription}</p>
                        <p className="projects__card-role">MI ROL</p>
                        <p className="projects__card-role-description">{project.roleDescription}</p>
                        <div className="projects__card-buttons">
                            <button className="projects__card-button-proyects">
                                {i18n.t("VER PROYECTO")}
                            </button>
                            <button className="projects__card-button-github">
                                {i18n.t("GitHub")}
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
         </div>
        </div>
    );
}

export default Projects;