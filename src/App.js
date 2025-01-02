import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header"
import Services from "./components/Services"
import Contacts  from  "./components/Contacts"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import "./css/style.css"


export default function App(){  
    return(
    <>
    <Router>
        <Header className="cabecalho">
            <Link to="/home">Início</Link>
            <Link to="/services" className="active">Serviços</Link>
            <Link to="/contacts">Contatos</Link>
            <Link to="/aboutme">SobreMim</Link>
        </Header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
    <Footer/>
    </Router>
    </>
    )
}