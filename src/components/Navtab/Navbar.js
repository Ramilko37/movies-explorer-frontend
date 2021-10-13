import React from 'react'
import './Navtab.css'

const Navbar = () => {
    return(
        <nav class="navtab">
        <ul class="navtab__list">
            <li class="navtab__item">
                <a class="navtab__link" href="#project">О проекте</a>
            </li>
            <li class="navtab__item">
                <a class="navtab__link" href="#techs">Технологии</a>
            </li>
            <li class="navtab__item">
                <a class="navtab__link" href="#student">Студент</a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;
