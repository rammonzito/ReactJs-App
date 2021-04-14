import React, { Component } from 'react';
import Formulario from './components/Formularios/Formulario';
import ListaCard from './components/CardNota/ListaCard';

class App extends Component {
  render() {
    return (
    <section>
      <Formulario />
      <ListaCard />
  </section>
    );
  }
}

export default App;
