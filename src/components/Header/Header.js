import React from "react"
import './Header.css'
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg';
import { Route, Switch, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Switch>
                <Route exact path="/">
                    <div className='header__wrapper'>
                        <div className='header__container'>
                            <Link to="/"><img className='header__logo' src={logo} alt='Логотип проекта'></img></Link>
                            <Navigation />
                        </div>
                    </div>
                </Route>

                <Route exact path="/profile">
                    <div className='header__container'>
                        <Link to="/"><img className='header__logo' src={logo} alt='Логотип проекта'></img></Link>
                        <Navigation />
                    </div>
                </Route>

                <Route exact path="/movies">
                    <div className='header__container'>
                        <Link to="/"><img className='header__logo' src={logo} alt='Логотип проекта'></img></Link>
                        <Navigation />
                    </div>
                </Route>

                <Route exact path="/saved-movies">
                    <div className='header__container'>
                        <Link to="/"><img className='header__logo' src={logo} alt='Логотип проекта'></img></Link>
                        <Navigation />
                    </div>
                </Route>

            </Switch>
        </header>
    )
}


export default Header;
