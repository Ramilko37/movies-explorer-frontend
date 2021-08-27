import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {

  return (
    <section className='search'>
        <div className="search__wrapper">
            <form className='search__form'>
                <input placeholder='Фильм' className='search__input' required='true' />
            </form>
            <button type='submit' className='search__button' />
        </div>
      {<FilterCheckbox />}
    </section>
  )
};

export default SearchForm;
