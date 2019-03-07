import axios from "../utils/axios";

class ApiService {
  /*
  ** Este servicio se encarga de realizar las consultas a la API.
  ** Se definen los headers necesarios y los métodos de interacción con la API.
  */

  _headers;

  constructor() {
    this._headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    this.apiUrl = process.env.REACT_APP_API_URL;
  }

  getHeaders() {
    let headers = {
      ...this._headers
    };
    return headers;
  }

  searchItems(query) {
    return axios(this.apiUrl + "/items?q=" + query, {
      headers: this.getHeaders()
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  getItem(id) {
    return axios(this.apiUrl + "/items/" + id, {
      headers: this.getHeaders()
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
}

const apiService = new ApiService();

export default apiService;
