import React, { Component } from 'react';
import Formulario from './components/Formulario';
import ListaCard from './components/ListaCard';

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
