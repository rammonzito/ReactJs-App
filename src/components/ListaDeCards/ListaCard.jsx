import React, { Component } from "react";
import { Card } from "../CardNota/Card";
import "./estilo.css"
export class ListaCard extends Component {

  constructor(){
    super();
    this.state = {notas:[]}
    this._novasNotas = this._novasNotas.bind(this)
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas){
    this.setState({...this.notas, notas: notas})
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
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
