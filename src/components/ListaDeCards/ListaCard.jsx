import React, { Component } from "react";
import { Card } from "../CardNota/Card";
import "./estilo.css"
export class ListaCard extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.listaDeNotas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <Card cardNota={nota}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaCard;
