import React, { Component } from "react";
import { Card } from "../CardNota/Card";
import "./estilo.css"
export class ListaCard extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <Card 
              indice={index}
              cardNota={nota}
              apagarCard={this.props.apagarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaCard;
