import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {
  state = {};

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      this.props.criarCategoria(e.target.value);
      e.currentTarget.value = "";
    }
    
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.listaCategorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria.descricao}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categoria_input"
          placeholder="Digite a Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        ></input>
      </section>
    );
  }
}

export default ListaCategorias;
