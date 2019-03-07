/*
** Módulo de transformación de datos.
**
** itemCondition() permite transformar el valor de condición de un item recibido por parametro
*/

const transform = {
  itemCondition: input => {
    switch (input) {
      case "new":
        return "Nuevo";
      case "not_specified":
        return "Sin especificar";
      case "used":
        return "Usado";
      default:
        return "";
    }
  }
};

export default transform;
