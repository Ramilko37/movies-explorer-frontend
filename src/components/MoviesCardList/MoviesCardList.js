import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({
                            movieCards,
                            onSaveMovie,
                            errorLoaded,
                            savedMovieList,
                            onRemoveSaveMovie,
                        }) => {

    return (
        <section className='card-list'>


            {movieCards.length !== 0 ? (
                movieCards.map((item) => {
                    return (
                        <MoviesCard
                            key={item.id}
                            card={item}
                            onSaveMovie={onSaveMovie}
                            savedMovieList={savedMovieList}
                            onRemoveSaveMovie={onRemoveSaveMovie}
                        />
                    );
                })
            ) : errorLoaded ? (
                ''
            ) : (
                <p className='moviesCardList__text'>
                    Нажмите "Найти" для вывода списка фильмов или введите ключевое слово
                    для поиска конкретного
                </p>
            )}


            <div className="card-list__wrapper">
                <button className='card-list__more-button'>Ещё</button>
            </div>


        </section>
    );
}


export default MoviesCardList;




