import React, { Component } from "react";
import "./estilo.css"

export class Card extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.cardNota.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.cardNota.texto}</p>
      </section>
    );
  }
}
