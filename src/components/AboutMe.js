import React from "react";
import Eu from "../static/images/quem-sou/eu.jpg"

export default function AboutMe(){
    return(
        <>
            <div className="banner-aboutMe"></div>
            <section className="apresentacao">
                <div className="apresentacao-information">
                    <div className="apresentacao-image-div">
                        <img src={Eu} alt=""/>
                    </div>
                    <div className="biografia">
                        <h1>Me chamo Angélica Camily</h1>
                        <div className="text">
                            <p>Estou ligada a área da estética desde 2019, qualificada tanto na área de design de Cílios
                                quanto na área de design de sobrancelhas. Eu amo o que eu faço, para mim não é e nunca será somente pessoas, 
                                são transformações na vida de cada uma que passa aqui no meu espaço. Sempre quis impactar de maneira positiva
                                na vida das pessoas, encontrei uma forma de fazer isso. Ajudando milhares de mulheres a sentir-se linda, enaltecendo sua autoestima e 
                                por sua vez promovendo auto-confiança, saúde física e mental. Busco sempre me aprimorar com as últimas
                                técnicas do mercado, para sempre trazer novidades às minhas clientes. Agradeço a todas vocês por terem tornado esse sonho real
                                contem comigo para o que precisar. 
                            </p>
                        </div>
                </div>
                </div>
            </section>

        </>
    )
}