import React, {
  Component
} from 'react';
import Formulario from './components/Formularios/Formulario';
import ListaDeNotas from './components/ListaDeCards/ListaCard';
import "./assets/App.css"
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategoria";
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/ArrayDeNotas';
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    
  }

  render() {
    return (
      <section className="conteudo">
        <Formulario
          categorias={this.categorias.categorias}
          adicionarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
