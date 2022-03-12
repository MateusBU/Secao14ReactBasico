import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';
// FORMs
import { FaPlus } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange} // handleChange é um método criado por mim
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
