import React, { Component } from 'react';

// FORM         //TAREFAS
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
    ],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim(); // trim remove os espaços

    if (tarefas.indexOf(novaTarefa) !== -1) return; // se a novaTarefa já existir não faz nada
    const novasTarefas = [...tarefas]; // copia o array de todas as tarefas em novasTarefas

    this.setState({
      tarefas: [...novasTarefas, novaTarefa], // copia as novasTarefas e a tarefa nova em tarefas
    });
  };

  handleChange = (e) => { // recebe um evento por causa do input
    this.setState({ // recebe um objeto que eu quero alterar
      novaTarefa: e.target.value, // o target é o input

    });
    // qconsole.log(this.state.novaTarefa);
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
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

/* Quando o input muda é chamado de onChange */
