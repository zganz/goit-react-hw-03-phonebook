import css from './Contact.module.css'
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, handleDelete }) => {
    
    return (
          <li key={id} className={css.contact}>
            <span>{`${name}: ${number}`}</span>
            <span>
              <button  onClick={() => handleDelete(id)} className={css.contact}>
                delete
              </button>
            </span>
          </li>
    );
  };

  Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };