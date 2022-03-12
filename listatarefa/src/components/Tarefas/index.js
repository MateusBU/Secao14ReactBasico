import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas(handleEdit, handleDelete, tarefas) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)} // index vem do map
              className="edit"
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
                  // faz isso,pois tem que enviar o index tbm
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  handleEdit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  handleDelete: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  tarefas: PropTypes.array.isRequired,
};
