/*
** Método para la ordenación de los elementos de un array.
** Permite realizar la ordenación creciente (property) o decreciente (-property).
*/
const dynamicSort = (property) =>  {
  if(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  } else {
    return function (a,b) {
        var result = (a < b) ? -1 : (a > b) ? 1 : 0;
        return result;
    }
  }
}

export default dynamicSort;
