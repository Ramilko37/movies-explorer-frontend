const BASE_URL = 'https://api.inmovies.students.nomoredomains.rocks';

const token = localStorage.getItem('jwt');

function response(res) {
    if(res.ok) {
        return res.json();
    }{
        return Promise.reject(
            new Error(`Ошибка ${res.status}`)
        );
    }
}

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const addToSavedMovies = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(movie),
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const removeSaveMovie = (movie) => {
    return fetch(`${BASE_URL}/movies/${movie._id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const updateToken = (newToken) => {
    return (token = newToken);
};

export const checkTokenValidity = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} - ${err.statusText}`));
};

export const updateUserInfo = (data) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
        .then(response)
        .catch((err) => console.log(`Ошибка ${err.status} - ${err.statusText}`));
};
