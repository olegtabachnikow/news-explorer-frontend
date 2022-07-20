class NewsApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  getArticles(keyword) {
    return fetch(
      `${
        this._baseUrl
      }?q=${keyword}&from=${this._setSubstractedDate()}&to=${this._setCurrentDate()}&pageSize=100&apiKey=c31d2e5dc9f44e14876f20bd43498308`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponce);
  }
  _checkResponce = (res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

  _setCurrentDate() {
    const currentDate = new Date().toJSON().slice(0, 10);
    return currentDate;
  }
  _setSubstractedDate() {
    const date = new Date();
    const substractWeek = new Date(date.setDate(date.getDate() - 7))
      .toJSON()
      .slice(0, 10);
    return substractWeek;
  }
}
const newsApi = new NewsApi({
    baseUrl: 'https://nomoreparties.co/news/v2/everything',
});
export default newsApi;
