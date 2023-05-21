class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
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
            console.log(response.json())
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
}

export const auth = new Api({
  baseUrl: 'https://auth.nomoreparties.co',
});
