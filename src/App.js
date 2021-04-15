import React, { Component } from 'react';
import Formulario from './components/Formularios/Formulario';
import ListaCard from './components/ListaDeCards/ListaCard';
import "./assets/App.css"
class App extends Component {

constructor(){
  super();
  this.state = {
    notas:[]
  }
}

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    novaNota.titulo = titulo;
    novaNota.texto = texto;

    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);

    console.log(`criando nota com titulo ` + titulo + ` e texto ` +  texto);

  }

  render() {
    return (
    <section className="conteudo">
      <Formulario criarNota={this.criarNota.bind(this)} />
      <ListaCard listaDeNotas={this.state.notas}/>
  </section>
    );
  }
}

export default App;
