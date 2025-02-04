import React from "react";
import Carrossel from "./Carrossel";
import autoEstima from "../static/images/info/autoestima.png"
import CorretoImage  from "../static/images/serviços/correto.png"
import VolumeBrasileiro from "../static/images/timeline/Vol.brasileiro.jpg"
import VolumeEgipcio from "../static/images/timeline/Vol_egipcio.png"
import Henna from "../static/images/timeline/henna.png"
import Personalizado from "../static/images/timeline/personalizado.png"
import GlowLips from "../static/images/timeline/glowlips.png"


export default function Home(){

    function whatsapp(){
        window.open("https://api.whatsapp.com/send/?phone=5511959131581&text=Boa%25tarde%21%25Quero%25saber%25mais&type=phone_number&app_absent=0");
    }

    return(
        <>
        <main className="principal">
        <Carrossel/>
        <section className="services">
            <div className="services-div">
                <div className="brush-stroke">
                    <h1>Serviços oferecidos</h1>
                </div>
                <div className="lista-services">
                    <div>
                        <div className="div-image-iconCerto">
                        <img src={CorretoImage} alt="icone-sinal-correto"/>
                        </div>
                        <h2>Design de sobrancelhas</h2>
                    </div>
                    <div>
                        <div className="div-image-iconCerto">
                        <img src={CorretoImage} alt="icone-sinal-correto"/>
                        </div>
                        <h2>Extensão de cílios</h2>
                    </div>
                    <div>
                        <div className="div-image-iconCerto">
                        <img src={CorretoImage} alt="icone-sinal-correto"/>
                        </div>
                        <h2>Glow Lips</h2>
                    </div>
                    <div>
                        <div className="div-image-iconCerto">
                        <img src={CorretoImage} alt="icone-sinal-correto"/>
                        </div>
                        <h2>Hidra Gloss</h2>
                    </div>
                </div>
                <button onClick={() => whatsapp()}>Agende Agora!</button>
            </div>
        </section>

        <section id="timeline">
            <ul>
                <li>
                    <div className="timeline-content">
                        <div className="div-image-timeline">
                        <img src={VolumeBrasileiro} alt="volume egípcio"/>
                        </div>
                        <p>Volume Brasileiro</p>
                    </div>
                </li>
                <li>
                    <div className="timeline-content">
                        <div className="div-image-timeline">
                            <img src={VolumeEgipcio} alt="volume egípcio" id="egipcio"/>
                        </div>
                        <p>Volume Egípcio</p>
                    </div>
                </li>
                <li>
                    <div className="timeline-content">
                        <div className="div-image-timeline">
                            <img src={Henna} alt="Design Henna" id="henna"/>
                        </div>
                        <p>Design Henna</p>
                    </div>
                </li>
                <li>
                    <div className="timeline-content">
                        <div className="div-image-timeline">
                            <img src={Personalizado} alt="Design Personalizado" id="personalizado"/>
                        </div>
                        <p>Design Personalizado</p>
                    </div>
                </li>
                <li>
                    <div className="timeline-content">
                        <div className="div-image-timeline">
                            <img src={GlowLips} alt="GlowLips Spa" id="glowLips"/>
                        </div>
                        <p>Glow Lips Spa</p>
                    </div>
                </li>
            </ul>
        </section>

        <section className="info">
            <div className="div-info">
                <div className="image-info-div">
                    <img src={autoEstima}  alt="imagem-autoestima"/>
                </div>
                <div className="text-info">
                    <div className="title">
                    <h1>Autoestima e saúde psicológica</h1>
                    <h3>Quanto você investe em você?</h3>
                    </div>
                    <p>Os cuidados estéticos contribuem positivamente para a autoestima, que por sua vez, 
                        está ligada estruturalmente à saúde mental. Não há nada melhor do que se olhar no
                        espelho e sentir-se bem, isso contribui positivamente para diversos aspectos da vida,
                        até mesmo para a sua confiança.
                    </p>
                    <div className="title">
                        <h1>Minha missão</h1>
                        <h3>Maneiras de se alcançar seu objetivo</h3>
                    </div>
                    <p>A minha missão é elevar sua autoestima, exercendo as técnicas mais recentes de
                        design, garantindo assim, a sua satisfação. Não perca tempo, realize já o seu 
                        agendamento. 
                    </p>
                    <div className="button-div">
                    <button className="btn" onClick={() => whatsapp()}>Contate-me</button>
                    </div>
                </div>
            </div>
        </section>

        </main>
        </>
    )
}
