import React, { Component } from 'react';

export default class Formulario extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota.."></textarea>
        <button>Criar Nota</button>
      </form>
    );
  }
}
