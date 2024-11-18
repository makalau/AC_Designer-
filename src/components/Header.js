import React from "react";
import Logo from "../static/images/header/logo-blue2-transparent.png"

export default function Header(props){
    return(
        <header className="cabecalho">
            <nav className="menu">
                <div className="div-logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <i class="bi bi-list-ul icon-menu-mobile"></i>
                <ul>
                    <div className="icon-div active">
                    <i className="bi bi-house-fill"></i>
                    <li>{props.children[0]}</li>
                    </div>
                    <div className="icon-div">
                    <i className="bi bi-tools"></i>
                    <li>{props.children[1]}</li>
                    </div>
                    <div className="icon-div">
                    <i className="bi bi-envelope-fill"></i>
                    <li>{props.children[2]}</li>
                    </div>
                    <div className="icon-div">
                    <i className="bi bi-person-square"></i>
                    <li>{props.children[3]}</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}