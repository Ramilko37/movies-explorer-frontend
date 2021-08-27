import React from 'react'
import './Techs.css'

const Techs = () => {
    return(
        <section className="techs" id="techs">
        <div className="techs__wrapper section">
            <h1 className="section__title">Технологии</h1>
                <p className="techs-content__heading">
                    7 технологий
                </p>
                <p className="techs-content__subheading">
                        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
        </div>
        <div className="techs__items">
            <span className="techs__item">HTML</span>
            <span className="techs__item">CSS</span>
            <span className="techs__item">JS</span>
            <span className="techs__item">React</span>
            <span className="techs__item">Git</span>
            <span className="techs__item">Express.js</span>
            <span className="techs__item">mongoBD</span>
        </div>
    </section>
    )

}

export default Techs;
