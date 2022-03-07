import React, {Component} from 'react';

//FORM
import {FaPlus} from 'react-icons/fa';

import './Main.css';

export default class Main extends Component{

  state = {
    novaTarefa: '',
  };

  handleChange = (e) =>{ //recebe um evento por causa do input
    this.setState({
      novaTarefa: e.target.value,
    })
    console.log(this.state.novaTarefa);
  }

  render(){ //render é usado para renderizar na pagina
    const{ novaTarefa} = this.state;//tudo que for escrito no input vai ser setado na nova tarefa

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input
          onChange={this.handleChange}
          type="text"
          value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  };
}

/*Qunado o input muda é chamado de onChange */
