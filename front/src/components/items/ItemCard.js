import React from "react";
import free_shipping from "../../assets/img/ic_shipping.png";
import { Link } from "react-router-dom";

const ItemCard = props => {
  /*
  ** Corresponde a la visualización individual del Item del listado. (Resultado de la búsqueda)
  */
  
  const { info } = props;

  return (
    <div className="card">
      <div className="card-media">
        <Link to={"items/" + info.id}>
          <img src={info.picture} alt={info.title} />
        </Link>
      </div>
      <div className="card-body">
        <Link to={"items/" + info.id}>
          <div className="item-price">
            <h3>
              {!!info.price.currency ? info.price.currency : ""}
              {info.price.amount}
              {!!info.free_shipping ? (
                <img
                  src={free_shipping}
                  srcSet={`${require("../../assets/img/ic_shipping@2x.png.png")} 2x`}
                  alt="Envío gratis"
                />
              ) : null}
            </h3>
          </div>
        </Link>
        <p>{info.title}</p>
      </div>
    </div>
  );
};

export default ItemCard;
