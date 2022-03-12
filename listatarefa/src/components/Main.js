import React, { Component } from 'react';

// FORM         //TAREFAS
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer cafe',
      'Beber agua',
      'Dormir',
    ],
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

        <form action="#" className="form">
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
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

/* Quando o input muda é chamado de onChange */
