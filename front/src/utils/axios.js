import axios from "axios";

/*
** Instanciación del servicio AXIOS para la conexión con la API.
*/

const instance = axios.create({
  apiUrl: process.env.API_URL
});

export default instance;
