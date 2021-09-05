import './Footer.css';
import React from "react";
import { Link, Route, Switch } from 'react-router-dom';

function Footer() {
  return (
    <Switch>
      <Route exact path = '/'>
        <div className = 'footer'>
          <h2 className = 'footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className = 'footer__container'>
            <p className = 'footer__date'>&copy; 2021</p>
            <div className = 'footer__links'>
              <a href = 'https://praktikum.yandex.ru/' className = 'footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
              <a href = 'https://github.com/Ramilko37/' className = 'footer__link' target='_blank' rel='noreferrer'>Github</a>
              <a href = 'https://www.instagram.com/' className = 'footer__link' target='_blank' rel='noreferrer'>Instagram</a>
            </div>
          </div>
        </div>
      </Route>
      <Route path = '/movies'>
        <div className = 'footer'>
          <h2 className = 'footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className = 'footer__container'>
            <p className = 'footer__date'>&copy; 2021</p>
            <div className = 'footer__links'>
            <a href = 'https://praktikum.yandex.ru/' className = 'footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
              <a href = 'https://github.com/Ramilko37/' className = 'footer__link' target='_blank' rel='noreferrer'>Github</a>
              <a href = 'https://www.instagram.com/' className = 'footer__link' target='_blank' rel='noreferrer'>Instagram</a>
            </div>
          </div>
        </div>
      </Route>
      <Route path = '/saved-movies'>
        <div className = 'footer'>
          <h2 className = 'footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <div className = 'footer__container'>
            <p className = 'footer__date'>&copy; 2021</p>
            <div className = 'footer__links'>
            <a href = 'https://praktikum.yandex.ru/' className = 'footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
              <a href = 'https://github.com/Ramilko37/' className = 'footer__link' target='_blank' rel='noreferrer'>Github</a>
              <a href = 'https://www.instagram.com/' className = 'footer__link' target='_blank' rel='noreferrer'>Instagram</a>
            </div>
          </div>
        </div>
      </Route>
      <Route path = '/signin'>

      </Route>
    </Switch>

  );
}

export default Footer;
