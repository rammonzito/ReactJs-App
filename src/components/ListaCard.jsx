import React, { Component } from "react";
import Card from './Card'

export class ListaCard extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>
            <Card />
        </li>
      </ul>
    );
  }
}

export default ListaCard;
