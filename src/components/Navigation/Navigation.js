import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/profile-logo.svg";
import account__icon from "../../images/profile-logo.svg";

export default function Navigation({ loggedIn }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function toggleBurgerMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navigation__container">
            <Switch>
                <Route exact path="/">
                    <div className="navigation__container_type_login">
                        <Link
                            to="/signup"
                            className="navigation__link navigation__link_type_signup"
                        >
                            Регистрация
                        </Link>
                        <Link
                            to="/signin"
                            className="navigation__link navigation__link_type_signin"
                        >
                            Войти
                        </Link>
                    </div>
                </Route>

                <Route exact path="/profile">
                    <div className="navigation__link navigation__link_type_movies-container">
                        <Link
                            to="/movies"
                            className="navigation__link navigation__link_type_movies"
                        >
                            Фильмы
                        </Link>
                        <Link
                            to="/saved-movies"
                            className="navigation__link navigation__link_type_saved-movies"
                        >
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <div className="navigation__container-profile">
                        <img className="navigation__link_logo" src={logo} alt="logo" />
                    </div>
                    <button
                        className={`navigation__burger-button ${
                            loggedIn ? "" : "no-display"
                        }`}
                        onClick={toggleBurgerMenu}
                    />
                    <div
                        className={`navigation__burger-menu ${isMenuOpen ? "visible" : ""}`}
                    >
                        <button
                            className="navigation__burger-button navigation__burger-button_type_close"
                            onClick={toggleBurgerMenu}
                        />
                        <div
                            className={`navigation__burger-menu-container ${
                                isMenuOpen ? "visible" : ""
                            }`}
                        >
                            <div className="navigation__burger-links-block">
                                <Link
                                    to="/"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Главная
                                </Link>
                                <Link
                                    to="/movies"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Фильмы
                                </Link>
                                <Link
                                    to="/saved-movies"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Сохранённые фильмы
                                </Link>
                                <Link
                                    to="/profile"
                                    className="navigation__link navigation__burger-link navigation__burger-link_type_account"
                                    onClick={toggleBurgerMenu}
                                >
                                    Аккаунт
                                    <img
                                        alt="Редактировать аккаунт"
                                        className="navigation__account-icon"
                                        src={account__icon}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Route>

                <Route exact path="/movies">
                    <div className="navigation__container_type_movies">
                        <Link
                            to="/movies"
                            className="navigation__link navigation__link_type_movies"
                        >
                            Фильмы
                        </Link>
                        <Link
                            to="/saved-movies"
                            className="navigation__link navigation__link_type_saved-movies"
                        >
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <div className="navigation__container-profile">
                        <img
                            className="navigation__link_logo"
                            src={account__icon}
                            alt="logo"
                        />
                        <Link
                            to="/profile"
                            className="navigation__link navigation__link_type_profile"
                        >
                            Аккаунт
                        </Link>
                    </div>
                    <button
                        className={`navigation__burger-button ${
                            loggedIn ? "" : "no-display"
                        }`}
                        onClick={toggleBurgerMenu}
                    />
                    <div
                        className={`navigation__burger-menu ${isMenuOpen ? "visible" : ""}`}
                    >
                        <button
                            className="navigation__burger-button navigation__burger-button_type_close"
                            onClick={toggleBurgerMenu}
                        />
                        <div
                            className={`navigation__burger-menu-container ${
                                isMenuOpen ? "visible" : ""
                            }`}
                        >
                            <div className="navigation__burger-links-block">
                                <Link
                                    to="/"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Главная
                                </Link>
                                <Link
                                    to="/movies"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Фильмы
                                </Link>
                                <Link
                                    to="/saved-movies"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Сохранённые фильмы
                                </Link>
                                <Link
                                    to="/profile"
                                    className="navigation__link navigation__burger-link navigation__burger-link_type_account"
                                    onClick={toggleBurgerMenu}
                                >
                                    Аккаунт
                                    <img
                                        alt="Редактировать аккаунт"
                                        className="navigation__account-icon"
                                        src={account__icon}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Route>

                <Route exact path="/saved-movies">
                    <div className="navigation__container_type_movies">
                        <Link
                            to="/movies"
                            className="navigation__link navigation__link_type_movies"
                        >
                            Фильмы
                        </Link>
                        <Link
                            to="/saved-movies"
                            className="navigation__link navigation__link_type_saved-movies"
                        >
                            Сохранённые фильмы
                        </Link>
                    </div>
                    <div className="navigation__container-profile">
                        <img
                            className="navigation__link_logo"
                            src={account__icon}
                            alt="logo"
                        />
                        <Link
                            to="/profile"
                            className="navigation__link navigation__link_type_profile"
                        >
                            Аккаунт
                        </Link>
                    </div>
                    <button
                        className={`navigation__burger-button ${
                            loggedIn ? "" : "no-display"
                        }`}
                        onClick={toggleBurgerMenu}
                    />
                    <div
                        className={`navigation__burger-menu ${isMenuOpen ? "visible" : ""}`}
                    >
                        <button
                            className="navigation__burger-button navigation__burger-button_type_close"
                            onClick={toggleBurgerMenu}
                        />
                        <div
                            className={`navigation__burger-menu-container ${
                                isMenuOpen ? "visible" : ""
                            }`}
                        >
                            <div className="navigation__burger-links-block">
                                <Link
                                    to="/"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Главная
                                </Link>
                                <Link
                                    to="/movies"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Фильмы
                                </Link>
                                <Link

                                    to="/saved-movies"
                                    className="navigation__link navigation__burger-link"
                                    onClick={toggleBurgerMenu}
                                >
                                    Сохранённые фильмы
                                </Link>
                                Аккаунт
                                <img
                                    alt="Редактировать аккаунт"
                                    className="navigation__account-icon"
                                    src={account__icon}
                                />
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}
