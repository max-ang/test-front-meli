import React from "react";
import Loadable from "react-loadable";

/*
** Se definen las rutas del sistema junto con los componentes para cada una.
** Ademas, se inserta Loading antes de montar el componente correspondiente.
*/

function Loading() {
  return (
    <div>
      <span>Cargando...</span>
    </div>
  );
}

const Home = Loadable({
  loader: () => import("../views/Home"),
  loading: Loading
});

const ResultsItem = Loadable({
  loader: () => import("../views/ResultsItem"),
  loading: Loading
});

const DetailItem = Loadable({
  loader: () => import("../views/DetailItem"),
  loading: Loading
});

const routes = [
  { path: "/", name: "Caja de búsqueda", component: Home, exact: true },
  {
    path: "/items",
    name: "Resultados de la búsqueda",
    component: ResultsItem,
    exact: true
  },
  {
    path: "/items/:id",
    name: "Detalle del producto",
    component: DetailItem,
    exact: true
  }
];

export default routes;
