import React from "react";

export default function Contacts(){
    return(
        <section className="contatos">
           <form className="formulario">
            <div>
            <label>Seu email</label>
            <input type="email" required/>
            </div>
            <div>
            <label>Assunto</label>
            <input type="text" required/>
            </div>
            <div>
            <label>Insira sua mensagem</label>
            <textarea required/>
            </div>
            <button className="btn">Enviar</button>
           </form>
        </section>
    )
}