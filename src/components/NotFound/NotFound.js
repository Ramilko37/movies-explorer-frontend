import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
        <p className='not-found__link' onClick={ () => history.goBack() }>Назад</p>
      </div>
    </section>
  )
};

export default NotFound;
