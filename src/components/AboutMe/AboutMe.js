import './AboutMe.css';
import React from "react";
import photo from '../../images/harold.jpg';

function AboutMe() {
  return (
    <section className = 'about-me'>
      <h2 className = 'about-me__title'>Студент</h2>
      <div className = 'about-me__title-line'></div>
      <div className = 'about-me__container'>
        <div className = 'about-me__text'>
          <h2 className = 'about-me__name'>Рамиль</h2>
          <h3 className = 'about-me__description'>Фронтенд-разработчик, 31 лет</h3>
          <p className = 'about-me__history'>Я живу в Москве. После долгих лет работы в нелюбимой профессии я наконец нашел дело,
            которое доставляет мне удовольствие. Практикум дал мне все необходимое для того, чтобы начать долгий и
            весьма интересный путь во фронтенд разработке. Совсем скоро я выхожу на новую работу и чувствую огромное воодушевление
            и благодарность ребятам из Практикума, моим менторам и другим студентам, которые со мной учатся :)</p>
          <div className = 'about-me__links'>
            <a href = 'https://www.instagram.com/' className = 'about-me__link'>Instagram</a>
            <a href = 'https://github.com/Ramilko37' className = 'about-me__link'>Github</a>
          </div>
        </div>
        <div>
          <img alt ='me' src = { photo } className = 'about-me__photo'/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
