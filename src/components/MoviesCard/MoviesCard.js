import React from 'react';
import './MoviesCard.css';
import movie__preview from '../../images/movie-card.png';
import { useLocation } from 'react-router-dom';

const MoviesCard = () => {
  const routeLocation = useLocation().pathname;
  const [isSaved, setIsSaved] = React.useState(true);

  const deleteIcon = ( routeLocation === '/saved-movies' ? 'card__save-button_delete' : 'card__save-button_active' );
  const saveIcon = ( routeLocation === '/movies' ? 'card__save-button' : 'card__save-button_active' );

  return (
    <div className='card'>
      <img alt='Постер к карточке' src={movie__preview} className='card__photo' />
      <div className='card__title-section'>
        <div className='card__text-section'>
          <h2 className='card__title'>33 слова о дизайне</h2>
          <p className='card__duration'>1ч 42м</p>
        </div>
        <button onClick={() => setIsSaved(!isSaved)} className={`card__save-button ${ isSaved ? deleteIcon : '' ? saveIcon : ''}` } />
      </div>
    </div>
  )
};

export default MoviesCard;
