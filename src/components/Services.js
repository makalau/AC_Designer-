import React from "react";
import Typical from 'react-typical'
import Henna from "../static/images/services-page/henna.jpg"
import Personalizado from "../static/images/services-page/design-personalizado.jpg"
import Brasileiro from "../static/images/services-page/vol-brasileiro.jpg"
import Egipcio from "../static/images/services-page/vol.egipcio.jpg"
import Glowlips from "../static/images/services-page/glowlips.jpg"

export default function Services(){
    return(
        <>  
            <section className="services-page-banner">

            </section>
            <section className="services-page">
                <h1 className="title-services">Serviços de &nbsp;
                    <span>
                    <Typical
                    loop={Infinity}
                    steps={[
                        "Design de Cílios",
                        1700,
                        "Design de Sobrancelha",
                        1700,
                        "Glow Lips Spa",
                        1700
                    ]}
                    wrapper="p"
                    />
                    </span>
                </h1>
                <div className="section-services">
                    <div className="section-services-item">
                        <div className="image-product-div">
                            <img  src={Henna} alt=""/>
                        </div>
                        <div className="description">
                            <h3>Design com Henna -</h3>
                            <p>preenche as sobrancelhas de forma natural e não agressiva à pele. </p>
                        </div>
                    </div>
                    <div className="section-services-item">
                        <div className="image-product-div">
                            <img  src={Brasileiro} alt=""/>
                        </div>
                        <div className="description">
                            <h3>Volume Brasileiro</h3>
                            <p>Técnica que consiste em deixar o olhar mais dramático e intenso,<br/> com mais volume e curvatura.</p>
                        </div>
                    </div>
                    <div className="section-services-item">
                        <div className="image-product-div">
                            <img  src={Egipcio} alt=""/>
                        </div>
                        <div className="description">
                            <h3>Volume Egípcio</h3>
                            <p>Técnica super avançada e contemporânea que trará uma beleza única ao seu olhar</p>
                        </div>
                    </div>
                    <div className="section-services-item">
                        <div className="image-product-div">
                            <img  src={Personalizado} alt=""/>
                        </div>
                        <div className="description">
                            <h3>Design Personalizado</h3>
                            <p>Design aplicado com base no desenho natural e medidas do rosto.<br/>Respeitando estilo próprio e visando garantir o máximo de harmonia.</p>
                        </div>
                    </div>
                    <div className="section-services-item">
                        <div className="image-product-div">
                            <img  src={Glowlips} alt=""/>
                        </div>
                        <div className="description">
                            <h3>GlowLips Spa</h3>
                            <p>Procedimento estético labial que hidrata, revitaliza e realça a cor dos lábios</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}