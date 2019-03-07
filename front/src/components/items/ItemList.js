import React from "react";
import ItemCard from "./ItemCard";
import dynamicSort from '../../utils/dynamicSort'

const ItemList = props => {
  /*
  ** Corresponde a la visualización del contenedor de Items. (Resultado de la búsqueda)
  */

  const items = !!props.items ? props.items : [];

  return (
    <div className="container card-container">
      {items.length > 0
        ? items.sort(dynamicSort('title')).map(item => {
            return <ItemCard key={item.id} info={item} />;
          })
        : "No hay productos"}
    </div>
  );
};

export default ItemList;
