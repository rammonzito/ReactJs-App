import React, {
  Component
} from 'react';
import Formulario from './components/Formularios/Formulario';
import ListaCard from './components/ListaDeCards/ListaCard';
import "./assets/App.css"
import ListaCategorias from "./components/ListaDeCategorias/ListaDeCategoria";
class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    }
  }
  criarNota(titulo, texto, categoria) {
    const novaNota = {
      titulo,
      texto,
      categoria
    };
    novaNota.titulo = titulo;
    novaNota.texto = texto;
    novaNota.categoria = categoria;

    const novoArrayNotas = this._adicionarNaLista(this.state.notas, novaNota)
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

    criarCategoria(descricao) {
      const novaCateg = {
        descricao: ""
      };

      novaCateg.descricao = descricao;
      const novoArrayCategorias = this._adicionarNaLista(this.state.categorias, novaCateg)
      const novoEstado = {...this.state, categorias: novoArrayCategorias}
      this.setState(novoEstado);
    }

    _adicionarNaLista(lista, item){
    let novaLista = [...lista, item]
    return novaLista;

  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({
      notas: arrayNotas
    })
    console.log("deletar...")
  }

  render() {
    return ( <section className = "conteudo" >
      <Formulario 
      categorias = {this.state.categorias}
      criarNota = {
        this.criarNota.bind(this)
      }
      /> <main className = "conteudo-principal">
      <ListaCategorias 
      criarCategoria = {
        this.criarCategoria.bind(this)
      }
      listaCategorias = {
        this.state.categorias
      }/>
      <ListaCard listaDeNotas = {
        this.state.notas
      }
      apagarNota = {
        this.deletarNota.bind(this)
      }/> </main> </section>
    );
  }
}

export default App;