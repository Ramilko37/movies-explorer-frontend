import React from 'react'
import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
      <div className="page">
          <BrowserRouter>
              <Switch>
                  <Route path='/' exact>
                      <Header loggedIn={false} />
                      <Main />
                      <Footer />
                  </Route>
                  <Route path='/movies' exact>
                      <Header loggedIn={true} />
                      <Movies />
                      <Footer />
                  </Route>
                  <Route path='/saved-movies' exact>
                      <Header loggedIn={true} />
                      <SavedMovies />
                      <Footer />
                  </Route>
                  <Route path='/profile' exact>
                      <Header loggedIn={true} />
                      <Profile />
                  </Route>
                  <Route path='/signin' exact>
                      <Login />
                  </Route>
                  <Route path='/signup' exact>
                      <Register />
                  </Route>
                  <Route path='*'>
                      <NotFound />
                  </Route>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;




