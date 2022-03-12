import React, { Component } from 'react';

// FORM         //TAREFAS
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
    ],
    index: -1,
  };

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

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange} // handleChange é um método criado por mim
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)} // index vem do map
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  // faz isso,pois tem que enviar o index tbm
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

/* Quando o input muda é chamado de onChange */
