import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {

  return (
    <div className='card-list'>
      <ul className='card-list__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
        <div className="card-list__wrapper">
            <button className='card-list__more-button'>Ещё</button>
        </div>
    </div>
  )
};

export default MoviesCardList;
