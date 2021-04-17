import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/images/delete.svg"

export class Card extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarCard(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.cardNota.titulo}</h3>
          <DeleteSVG 
          onClick={this.apagar.bind(this)}
          />
          <h4 className="card-nota_texto">{this.props.cardNota.categoria}</h4>
          </header>
        <p className="card-nota_texto">{this.props.cardNota.texto}</p>
      </section>
    );
  }
}
