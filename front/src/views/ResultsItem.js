import React, { Component } from "react";
import apiService from "../services/apiService";
import queryString from "query-string";

import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ItemList from "../components/items/ItemList";

class ResultsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      hasResult: false
    };

    this.search = "";
  }

  componentDidMount() {
    /*
    ** Se corrobora el parametro search de la URI.
    ** Si existe, se parsea con QueryString y se guarda en search.
    */
    if (!!this.props.location.search) {
      const queryLocation = queryString.parse(this.props.location.search);
      if (!!queryLocation.search) {
        this.search = queryLocation.search;
      }
    }

    /*
    ** Se realiza la consulta a la API con el parametro search y se actualiza el state con los datos resultantes.
    */
    apiService.searchItems(this.search).then(result => {
      this.setState({ items: result.items, hasResult: true });
    });
  }

  render() {
    /*
    ** hasResult determina la finalizacion de la consulta a la API con la cual renderizar los items resultantes
    */
    const { items, hasResult } = this.state;

    if (!!hasResult) {
      return (
        <React.Fragment>
          <Header search={this.search}/>
          <Breadcrumb />
          <ItemList items={items} />
        </React.Fragment>
      );
    }
    return "Cargando...";
  }
}

export default ResultsItem;
