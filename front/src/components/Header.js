import React, { Component } from "react";
import meli from "../assets/img/Logo_ML.png";
import lupa from "../assets/img/ic_Search.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: !!props.search ? props.search : ""
    };
  }

  render() {
    return (
      <header className="header">
        <div className="container header-container">
          <Link to="/">
            <img
              src={meli}
              srcSet={`${require("../assets/img/Logo_ML@2x.png.png")} 2x`}
              alt="Mercado Libre"
            />
          </Link>
          <form action="/items">
            <div className="input-group">
              <input
                placeholder="Nunca dejes de buscar"
                type="text"
                name="search"
                defaultValue={this.state.search}
              />
              <div className="input-group-append">
                <img
                  className="input-group-text"
                  src={lupa}
                  srcSet={`${require("../assets/img/ic_Search@2x.png.png")} 2x`}
                  alt="Mercado Libre"
                />
              </div>
            </div>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
