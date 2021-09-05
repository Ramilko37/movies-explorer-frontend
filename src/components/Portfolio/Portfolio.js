import './Portfolio.css';
import React from "react";
import arrow from "../../images/arrow.png"

function Portfolio() {
  return (
    <div className = 'portfolio'>
      <h2 className = 'portfolio__title'>Портфолио</h2>

      <div className = 'portfolio__container'>
        <div className = 'portfolio__box'>

          <a href = 'https://ramilko37.github.io/how-to-learn/' className = 'portfolio__box-link' target='_blank' rel="noreferrer">
          <p className = 'portfolio__box-title'>Статичный сайт</p>
          <img src = { arrow } alt = 'arrow' className = 'portfolio__box-arrow' />
          </a>
        </div>
        <div className = 'portfolio__box'>

          <a href = 'https://ramilko37.github.io/russian-travel/' className = 'portfolio__box-link' target='_blank' rel="noreferrer">
          <p className = 'portfolio__box-title'>Адаптивный сайт</p>
          <img src = { arrow } alt = 'arrow' className = 'portfolio__box-arrow' />
          </a>
        </div>
        <div className = 'portfolio__box'>

          <a href = 'https://github.com/ramilko37/react-mesto-api-full' className = 'portfolio__box-link' target='_blank' rel="noreferrer">
          <p className = 'portfolio__box-title'>Одностраничное приложение</p>
          <img src = { arrow } alt = 'arrow' className = 'portfolio__box-arrow' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
