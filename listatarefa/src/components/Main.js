import React, { Component } from 'react';

import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
    ],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    // O prevState é uma variaçaõ anterior de qualque componente
    if (tarefas === prevState.tarefas) return; // se as tarefas mudaram ou não

    localStorage.setItem('tarefas', JSON.stringify(tarefas));// salvar no storage
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim(); // trim remove os espaços

    if (tarefas.indexOf(novaTarefa) !== -1) return; // se a novaTarefa já existir não faz nada
    const novasTarefas = [...tarefas]; // copia o array de todas as tarefas em novasTarefas

    if (index === -1) { // Significa que eu estou criando e não editando
      this.setState({
        tarefas: [...novasTarefas, novaTarefa], // copia as novasTarefas e a tarefa nova em tarefas
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas]; // copia todas as tarefas em novasTarefas
    novasTarefas.splice(index, 1); // remove o elemento com indice que foi enviado

    this.setState({
      tarefas: [...novasTarefas], // copia as novasTarefas
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleChange = (e) => { // recebe um evento por causa do input
    this.setState({ // recebe um objeto que eu quero alterar
      novaTarefa: e.target.value, // o target é o input

    });
  };

  // render é usado para renderizar na pagina, toda classe de componente precisa do render
  render() {
    // tudo que for escrito no input vai ser setado na nova tarefas
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas={tarefas}
        />
      </div>
    );
  }
}

/* Quando o input muda é chamado de onChange */
