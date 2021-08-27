import React from "react"
import Promo from "../Promo/Promo";
import Navbar from "../Navtab/Navbar";
import Project from "../Project/Project";
import Techs from "../Techs/Techs";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
       <main className="main">
            <Promo />
            <Navbar />
            <Project />
            <Techs />
            <Student />
            <Portfolio />
       </main>
    )
}

export default Main;
