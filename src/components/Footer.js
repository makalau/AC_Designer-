import React from "react";

export default function Footer(){

    function whatsapp(){
        window.open("https://api.whatsapp.com/send/?phone=5511959131581&text=Boa%25tarde%21%25Quero%25saber%25mais&type=phone_number&app_absent=0", "_blank");
        
    }

    function Ig_Angelica(){
        window.open("https://www.instagram.com/studio_angelicadesigner/", "_blank");
    }

    function MeuIg(){
        window.open("https://www.instagram.com/makalau14/", "_blank");
        
    }

    return(
        <footer className="rodape">
            <div className="social-media">
            <span><i class="bi bi-facebook"></i> Facebook</span>
            <span onClick={() => Ig_Angelica()}><i class="bi bi-instagram"></i> Instagram</span>
            <span onClick={() => whatsapp()}><i class="bi bi-whatsapp"></i> WhatsApp</span>
            </div>
            <p>&copy; Direitos reservados à AC Designer |   <br/>Criador site: <span onClick={() => MeuIg()}>  Marcelo Victor <i class="bi bi-instagram"></i></span></p>
        </footer>
    )
}