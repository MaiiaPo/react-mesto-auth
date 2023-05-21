class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка ${res.status}`);
  }

  register = (email, password) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
      .then((response) => {
        try {
          if (response.status === 200){
            return response.json();
          }
        } catch(e){
          return (e)
        }
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  };

  authorize = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkResponse(res))
      .then((data) => {
        if (data.token){
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  };

  getToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res))
      .then(data => data);
  };
}

export const auth = new Api({
  baseUrl: 'https://auth.nomoreparties.co',
});
