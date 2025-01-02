import React from "react";  
import Logo from "../static/images/header/logo-blue2-transparent.png"

export default function Header(props){
    function menuMobile(){
        var objeto = document.querySelector("#icon-menu-mobile");
        var menu = document.querySelector(".cabecalho-mobile");
        objeto.classList.toggle("bi-x-lg");
        if (menu == "menu-deactive"){
            menu.classList.toggle("menu-active");
        }

        else{
            menu.classList.toggle("menu-deactive");
        }      
    }


    return(
        <>
            <header className="cabecalho">
                <nav className="menu">
                    <div className="div-logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <i className="bi bi-list-ul" id="icon-menu-mobile" onClick={() => menuMobile()}></i>
                    <ul>
                        <div className="icon-div active" id="home">
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
            <aside className="cabecalho-mobile menu-deactive">
                <nav className="menu-mobile">
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
            </aside>
        </>
    )
}