import React, { Component } from "react";
import apiService from "../services/apiService";

import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ItemDetail from "../components/items/ItemDetail";

class DetailItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      hasResult: false
    };
  }

  componentDidMount() {
    /*
    ** Se realiza consulta a la API para obtener el item correspondiente al id recibido por parametro.
    */
    apiService.getItem(this.props.match.params.id).then(result => {
      /*
      ** Se corrobora si la consulta arroja error.
      */
      if (!!result.error) {
        console.log(result.status);
      } else {
        this.setState({ item: result.item, hasResult: true });
      }
      this.setState({ hasResult: true });
    });
  }

  render() {
    /*
    ** hasResult determina la finalizacion de la consulta a la API con la cual renderizar los items resultantes
    */

    const { item, hasResult } = this.state;

    if (!!hasResult) {
      return (
        <React.Fragment>
          <Header />
          <Breadcrumb />
          <ItemDetail info={item} />
        </React.Fragment>
      );
    }
    return "Cargando...";
  }
}

export default DetailItem;
