import React, { Component } from "react";
import { Card } from "./Card";

export class ListaCard extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
              <span>{categoria}</span>
              <Card />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaCard;
