/*
** Módulo de storage para el manejo de datos del cliente.
*/

const storage = window.sessionStorage;

const storageService = {
  getItem: key => {
    if (!!storage[key]) return storage[key];
  },
  setItem: (key, value) => {
    storage.setItem(key, value);
  },
  isItem: key => {
    return storage[key];
  },
  removeItem: key => {
    storage.removeItem(key);
  }
};

export default storageService;
