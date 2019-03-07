import React from "react";
import transform from "../../utils/transform";

const ItemDetail = props => {
  /*
  ** Corresponde a la visualización del detalle del Item seleccionado. (Detalle del producto)
  */

  const { info } = props;

  /*
  ** transform.itemCondition() resuelve la información de condición del producto.
  */

  return (
    <div className="container card-container">
      {!!info ? (
        <div className="item-detail">
          <div className="item-detail-heading">
            <div className="card-media">
              <img src={info.picture} alt={info.title} />
            </div>
            <div className="card-title">
              <div>
                <span>
                  {transform.itemCondition(info.condition)} -{" "}
                  {info.sold_quantity} vendidos
                </span>
              </div>
              <div>
                <h3>{info.title}</h3>
              </div>
              <div>
                <h1>
                  {!!info.price.currency ? info.price.currency : ""}
                  {info.price.amount}
                </h1>
              </div>
              <div>
                <button>Comprar</button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2>Descripción del producto</h2>
            <p>{info.description}</p>
          </div>
        </div>
      ) : (
        "Hubo un error de conexión"
      )}
    </div>
  );
};

export default ItemDetail;
