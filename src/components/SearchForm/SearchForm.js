import { React, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


const SearchForm = ({
                        handleMovieInput,
                        handleSavedMovieInput,
                        value,
                        movieList,
                        savedMovieList,
                        addFilteredMovie,
                        movieSearchError,
                        savedMovies,
                        savedMovieSearch,
                        updateFilteredSavedMovies,
                    }) => {

    const [checkForShortness, setCheckForShortness] = useState(false);
    const checkBoxToggle = () => {
        setCheckForShortness(!checkForShortness);
    };

    const handleFilter = (movieList, movieSearch) => {
        const filtered = movieList.nameRU
            .toLowerCase()
            .includes(movieSearch.toLowerCase());
        return filtered;
    };

    const handleSavedFiltered = (savedMovieList, savedMovieSearch) => {
        console.log(savedMovieSearch);
        const savedFiltered = savedMovieList.nameRU
            .toLowerCase()
            .includes(savedMovieSearch.toLowerCase());
        return savedFiltered;
    };

    const filteringMoviesArray = (movieList, value) => {
        if (checkForShortness) {
            const shortMovie = movieList.filter((movie) => {
                return movie.duration <= 40 && handleFilter(movie, value);
            });
            return shortMovie;
        } else {
            const filteredMovies = movieList.filter((movie) => {
                return handleFilter(movie, value);
            });
            return filteredMovies;
        }
    };

    const filteringSavedMoviesArray = (savedMovieList, savedMovieSearch) => {
        if (checkForShortness) {
            const shortSavedMovie = savedMovieList.filter((movie) => {
                return (
                    movie.duration <= 40 && handleSavedFiltered(movie, savedMovieSearch)
                );
            });
            return shortSavedMovie;
        } else {
            const filteredSavedMovies = savedMovieList.filter((movie) => {
                return handleSavedFiltered(movie, savedMovieSearch);
            });
            return filteredSavedMovies;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredMoviesArray = filteringMoviesArray(movieList, value);
        addFilteredMovie(filteredMoviesArray);
        if (filteredMoviesArray.length === 0) {
            return <p className='movies__errorText'>Ничего не найдено</p>;
        } else if (value === '') {
            <p className='movies__errorText'>{movieSearchError}</p>;
        }
    };

    const handleSubmitSaved = (e) => {
        e.preventDefault();
        let filteredSavedMoviesArray = filteringSavedMoviesArray(
            savedMovieList,
            savedMovieSearch
        );
        updateFilteredSavedMovies(filteredSavedMoviesArray);
        if (filteredSavedMoviesArray.length === 0) {
            return <p className='movies__errorText'>Ничего не найдено</p>;
        } else if (savedMovieSearch === '') {
            <p className='movies__errorText'>{movieSearchError}</p>;
        }
    };

  return (
    <section className='search'>
        <div className="search__wrapper">
            <form className='search__form'
            onSubmit={savedMovies ? handleSubmitSaved : handleSubmit}
            noValidate
            >
                <input placeholder='Фильм' className='search__input' required='true' value={savedMovies ? savedMovieSearch : value}
                       onChange={savedMovies ? handleSavedMovieInput : handleMovieInput}
                       required/>
                <span className='search__input-error'>{movieSearchError}</span>
            </form>
            <button type='submit' className='search__button' />
        </div>
      {<FilterCheckbox onChange={checkBoxToggle} />}
    </section>
  )
};

export default SearchForm;
